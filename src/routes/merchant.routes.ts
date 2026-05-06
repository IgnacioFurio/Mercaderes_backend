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
import { getMerchantCashFromQualities } from "../utils/merchantCash.utils";

const { sequelize, Merchant, ShopType, MerchantQuality, Item, MerchantInventory } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const merchants = await Merchant.findAll( {
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
        ["id", "DESC"],
        ["name", "ASC"],
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

// crear mercader
router.post("/", async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();

  try {
    const { merchant, inventory = [] } = req.body;

    if (!merchant) {
      await transaction.rollback();

      return res.status(400).json({
        message: "Debes enviar los datos del mercader.",
      });
    }

    const savedMerchant = await Merchant.create(merchant, { transaction });

    const inventoryToSave = inventory.map((inventoryItem: any) => ({
      merchantId: savedMerchant.id,
      itemId: inventoryItem.itemId,
      quantity: inventoryItem.quantity,
      finalPrice: inventoryItem.finalPrice,
      finalPriceCp: inventoryItem.finalPriceCp || 0,
      status: inventoryItem.status || "Disponible",
      notes: inventoryItem.notes || "",
    }));

    if (inventoryToSave.length > 0) {
      await MerchantInventory.bulkCreate(inventoryToSave, { transaction });
    }

    await transaction.commit();

    const merchantWithInventory = await Merchant.findByPk(savedMerchant.id, {
      include: [
        {
          model: ShopType,
          as: "shopType",
          attributes: ["id", "name", "description"],
        },
        {
          model: MerchantQuality,
          as: "quality",
          attributes: ["id", "name", "rank", "description", "cashFormula"],
        },
        {
          model: MerchantInventory,
          as: "inventory",
          attributes: ["id", "quantity", "finalPrice", "finalPriceCp", "status"],
          include: [
            {
              model: Item,
              as: "item",
              attributes: [
                "id",
                "name",
                "price",
                "basePriceCp",
                "quantityFormula",
                "source",
                "notes",
                "shopTypeId",
                "merchantQualityId",
              ],
            },
          ],
        },
      ],
    });

    res.status(201).json({
      message: "Mercader creado correctamente",
      data: merchantWithInventory,
    });
  } catch (error) {
    await transaction.rollback();

    res.status(500).json({
      message: "Error al crear mercader",
      error: error instanceof Error ? error.message : error,
    });
  }
});

//generar mercader con tienda
router.post("/generate", async (req: Request, res: Response) => {
  try {
    const {
      name,
      species,
      region,
      shopTypeId,
      merchantQualityId,
      personalityTrait,
      ideal,
      bond,
      flaw,
      gimmick,
      attitude,
      notes,
    } = req.body;

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

    const cashQualities = await MerchantQuality.findAll({
      where: {
        rank: {
          [Op.lte]: selectedQuality.rank,
        },
      },
      order: [["rank", "ASC"]],
    });

    const { cashAmount, cashAmountCp } = getMerchantCashFromQualities(cashQualities);

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
        const quantity = item.quantityFormula
          ? rollDiceFormula(item.quantityFormula)
          : 1;

        return {
          itemId: item.id,
          quantity,
          finalPrice: item.price,
          finalPriceCp: item.basePriceCp,
          status: quantity > 0 ? "Disponible" : "Sin stock",
          notes: "",
          item,
        };
      })
      .filter((inventoryItem: any) => inventoryItem.quantity > 0);

    const selectedSpecies = species ?? pickRandomElement(speciesOptions);
    const selectedRegion = region ?? pickRandomElement(regionOptions);
    const generatedName = name ?? generateMerchantNameBySpecies(selectedSpecies);
    const selectedPersonalityTrait = personalityTrait ?? pickRandomElement(personalityTraitsOptions);
    const selectedIdeal = ideal ?? pickRandomElement(idealsOptions);
    const selectedBond = bond ?? pickRandomElement(bondsOptions);
    const selectedFlaw = flaw ?? pickRandomElement(flawsOptions);
    const selectedGimmick = gimmick ?? pickRandomElement(gimmicksOptions);

    const generatedMerchant = {
      name: generatedName,
      species: selectedSpecies,
      region: selectedRegion,
      attitude: "Neutral",
      cashAmount: cashAmount,
      cashAmountCp: cashAmountCp,
      personalityTrait: selectedPersonalityTrait,
      ideal: selectedIdeal,
      bond: selectedBond,
      flaw: selectedFlaw,
      gimmick: selectedGimmick,
      notes: "",
      shopTypeId: selectedShopType.id,
      merchantQualityId: selectedQuality.id,
    };

    res.json({
      message: "Mercader generado correctamente",
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
          attributes: ["id", "name", "rank", "description", "cashFormula"],
        },
        {
          model: MerchantInventory,
          as: "inventory",
          attributes: [
            "id",
            "merchantId",
            "itemId",
            "quantity",
            "finalPrice",
            "finalPriceCp",
            "status",
            "notes",
          ],
          include: [
            {
              model: Item,
              as: "item",
              attributes: [
                "id",
                "name",
                "price",
                "basePriceCp",
                "quantityFormula",
                "source",
                "notes",
                "shopTypeId",
                "merchantQualityId",
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