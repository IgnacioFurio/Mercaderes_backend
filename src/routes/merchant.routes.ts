import { Router, Request, Response } from "express";
import { Op } from "sequelize";
import { pickRandomElement, pickRandomItems } from "../utils/random.utils";
import { rollDiceFormula } from "../utils/dice.utils";
import { getInventorySizeByQualityRank } from "../utils/inventory.utils";
import { 
  speciesOptions, 
  regionOptions,
  personalityTraitsOptions,
  idealsOptions,
  bondsOptions,
  flawsOptions,
  gimmicksOptions,
} from "../data/merchants";
import { generateMerchantNameBySpecies } from "../utils/merchantName.utils";

const { Merchant, ShopType, MerchantQuality, Item, MerchantInventory } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const merchants = await Merchant.findAll( {
      attributes: [
        "id",
        "name",
        "species",
        "region",
        "attitude",
        "personalityTrait",
        "ideal",
        "bond",
        "flaw",
        "gimmick",
        "notes",
        "shopTypeId",
        "merchantQualityId",
      ],
      include: [
        {
          model: ShopType,
          as: "shopType",
          attributes: ["id", "name", "description"],
        },
        {
          model: MerchantQuality,
          as: "quality",
          attributes: ["id", "name", "rank", "description"],
        },
      ],
      order: [
        ["name", "ASC"],
        ["id", "DESC"],
      ],
    });

    res.json({
        message: "Listado de comerciantes",
        count: merchants.length,
        data: merchants,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener comerciantes",
      error,
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const merchant = await Merchant.create(req.body);

    res.status(201).json({
      message: "Mercader creado correctamente",
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear mercader",
      error,
    });
  }
});

//generar mercader con tienda
router.post("/generate", async (req: Request, res: Response) => {
  try {
    const { shopTypeId, merchantQualityId, save = false } = req.body;

    let selectedShopType;

    if (shopTypeId === null || shopTypeId === undefined) {
      const shopTypes = await ShopType.findAll();
      selectedShopType = pickRandomElement(shopTypes);
    } else {
      selectedShopType = await ShopType.findByPk(shopTypeId);

      if (!selectedShopType) {
        return res.status(404).json({
          message: "El tipo de tienda indicado no existe.",
        });
      }
    }

    let selectedQuality;

    if (merchantQualityId === null || merchantQualityId === undefined) {
      const qualities = await MerchantQuality.findAll();
      selectedQuality = pickRandomElement(qualities);
    } else {
      selectedQuality = await MerchantQuality.findByPk(merchantQualityId);

      if (!selectedQuality) {
        return res.status(404).json({
          message: "La calidad de mercader indicada no existe.",
        });
      }
    }

    const compatibleItems = await Item.findAll({
      where: {
        shopTypeId: selectedShopType.id,
        merchantQualityId: {
          [Op.lte]: selectedQuality.id,
        },
      },
    });

    const inventorySize = getInventorySizeByQualityRank(selectedQuality.rank);
    const selectedItems = pickRandomItems(compatibleItems, inventorySize);

    const generatedInventory = selectedItems
      .map((item: any) => {
        const quantity = rollDiceFormula(item.quantityFormula);

        return {
          itemId: item.id,
          name: item.name,
          price: item.price,
          finalPrice: item.price,
          quantity,
          quantityFormula: item.quantityFormula,
          source: item.source,
          notes: item.notes,
          status: quantity > 0 ? "Disponible" : "Sin stock",
        };
      })
      .filter((inventoryItem: any) => inventoryItem.quantity > 0);

    const selectedSpecies = pickRandomElement(speciesOptions);
    const selectedRegion = pickRandomElement(regionOptions);
    const generatedName = generateMerchantNameBySpecies(selectedSpecies);
    const personalityTrait = pickRandomElement(personalityTraitsOptions);
    const ideal = pickRandomElement(idealsOptions);
    const bond = pickRandomElement(bondsOptions);
    const flaw = pickRandomElement(flawsOptions);
    const gimmick = pickRandomElement(gimmicksOptions);

    const generatedMerchant = {
      name: generatedName,
      species: selectedSpecies,
      region: selectedRegion,
      attitude: "Neutral",
      personalityTrait,
      ideal,
      bond,
      flaw,
      gimmick,
      notes: "",
      shopTypeId: selectedShopType.id,
      merchantQualityId: selectedQuality.id,
    };

    if (save === true) {
      const savedMerchant = await Merchant.create(generatedMerchant);

      const inventoryToSave = generatedInventory.map((inventoryItem: any) => ({
        merchantId: savedMerchant.id,
        itemId: inventoryItem.itemId,
        quantity: inventoryItem.quantity,
        finalPrice: inventoryItem.finalPrice,
        status: inventoryItem.status,
        notes: "",
      }));

      await MerchantInventory.bulkCreate(inventoryToSave);

      return res.status(201).json({
        message: "Mercader generado y guardado correctamente",
        saved: true,
        data: {
          merchant: savedMerchant,
          inventorySize,
          inventoryCount: generatedInventory.length,
          inventory: generatedInventory,
        },
      });
    }

    res.json({
      message: "Mercader generado correctamente",
      saved: false,
      data: {
        merchant: {
          ...generatedMerchant,
          shopType: selectedShopType,
          quality: selectedQuality,
        },
        inventorySize,
        inventoryCount: generatedInventory.length,
        inventory: generatedInventory,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al generar mercader",
      error: error instanceof Error ? error.message : error,
    });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const merchant = await Merchant.findByPk(req.params.id, {
      include: [
        {
          model: ShopType,
          as: "shopType",
          attributes: ["id", "name", "description"],
        },
        {
          model: MerchantQuality,
          as: "quality",
          attributes: ["id", "name", "rank", "description"],
        },
        {
          model: MerchantInventory,
          as: "inventory",
          attributes: [
            "id",
            "quantity",
            "finalPrice",
          ],
          include: [
            {
              model: Item,
              as: "item",
              attributes: [
                "id",
                "name",
                "price",
                "source",
                "notes",
              ],
            },
          ],
        },
      ],
    });

    if (!merchant) {
      return res.status(404).json({
        message: "Mercader no encontrado",
      });
    }

    res.json({
      message: "Mercader encontrado",
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener mercader",
      error,
    });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const merchant = await Merchant.findByPk(req.params.id);

    if (!merchant) {
      return res.status(404).json({
        message: "Mercader no encontrado",
      });
    }

    await merchant.update(req.body);

    res.json({
      message: "Mercader actualizado correctamente",
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar mercader",
      error,
    });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const merchant = await Merchant.findByPk(req.params.id);

    if (!merchant) {
      return res.status(404).json({
        message: "Mercader no encontrado",
      });
    }

    await merchant.destroy();

    res.json({
      message: "Mercader eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar mercader",
      error,
    });
  }
});

export default router;