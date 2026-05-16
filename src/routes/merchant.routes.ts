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
import {
  PRICE_MODIFIER_OPTIONS,
  getPriceModifierOptionByValue,
  getModifiedPrice,
  applyPriceModifierToCopper,
} from "../utils/priceModifier.utils";
import { formatCopperToCurrency } from "../utils/currency.utils";

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
      order: [
        [{ model: MerchantInventory, as: "inventory" }, { model: Item, as: "item" }, "shopTypeId", "ASC"],
        [{ model: MerchantInventory, as: "inventory" }, { model: Item, as: "item" }, "merchantQualityId", "ASC"],
        [{ model: MerchantInventory, as: "inventory" }, { model: Item, as: "item" }, "basePriceCp", "ASC"],
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
      priceModifierPercent,
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

    selectedItems.sort((a: any, b: any) => {
      if (a.shopTypeId !== b.shopTypeId) {
        return a.shopTypeId - b.shopTypeId;
      }

      if (a.merchantQualityId !== b.merchantQualityId) {
        return a.merchantQualityId - b.merchantQualityId;
      }

      return (a.basePriceCp || 0) - (b.basePriceCp || 0);
    });

        let finalPriceModifierOption;

    if (priceModifierPercent === null || priceModifierPercent === undefined) {
      finalPriceModifierOption = pickRandomElement(PRICE_MODIFIER_OPTIONS);
    } else {
      const parsedPriceModifierPercent = Number(priceModifierPercent);

      if (Number.isNaN(parsedPriceModifierPercent)) {
        return res.status(400).json({
          message: "priceModifierPercent must be a valid number",
        });
      }

      finalPriceModifierOption = getPriceModifierOptionByValue(
        parsedPriceModifierPercent
      );

      if (!finalPriceModifierOption) {
        return res.status(400).json({
          message: "priceModifierPercent must be one of the allowed values",
          allowedValues: PRICE_MODIFIER_OPTIONS.map((option) => option.value),
        });
      }
    }

    const generatedInventory = selectedItems
      .map((item: any) => {
        const quantity = item.quantityFormula
          ? rollDiceFormula(item.quantityFormula)
          : 1;

        const { finalPrice, finalPriceCp } = getModifiedPrice(
          item.basePriceCp || 0,
          finalPriceModifierOption.value
        );

        return {
          itemId: item.id,
          quantity,
          finalPrice,
          finalPriceCp,
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
      attitude: finalPriceModifierOption.attitudeLabel ||"Neutral",
      priceModifierPercent: finalPriceModifierOption.value,
      cashAmount: cashAmount,
      cashAmountCp: cashAmountCp,
      personalityTrait: selectedPersonalityTrait,
      ideal: selectedIdeal,
      bond: selectedBond,
      flaw: selectedFlaw,
      gimmick: selectedGimmick,
      notes: notes || "",
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

//traer opciones de actitud del mercader
router.get("/price-modifier-options", (_req: Request, res: Response) => {
  res.json({
    message: "Opciones de modificador de precio",
    count: PRICE_MODIFIER_OPTIONS.length,
    data: PRICE_MODIFIER_OPTIONS,
  });
});

//calcular ventas
router.post("/calculate-sale", (req: Request, res: Response) => {
  try {
    const {
      cashAmountCp,
      itemId,
      currentQuantity,
      finalPriceCp,
      saleQuantity,
    } = req.body;

    const parsedCashAmountCp = Number(cashAmountCp);
    const parsedItemId = Number(itemId);
    const parsedCurrentQuantity = Number(currentQuantity);
    const parsedFinalPriceCp = Number(finalPriceCp);
    const parsedSaleQuantity = Number(saleQuantity);

    if (
      Number.isNaN(parsedCashAmountCp) ||
      !Number.isInteger(parsedCashAmountCp) ||
      parsedCashAmountCp < 0
    ) {
      return res.status(400).json({
        message: "cashAmountCp must be a positive integer or zero",
      });
    }

    if (
      Number.isNaN(parsedItemId) ||
      !Number.isInteger(parsedItemId) ||
      parsedItemId <= 0
    ) {
      return res.status(400).json({
        message: "itemId must be a positive integer",
      });
    }

    if (
      Number.isNaN(parsedCurrentQuantity) ||
      !Number.isInteger(parsedCurrentQuantity) ||
      parsedCurrentQuantity < 0
    ) {
      return res.status(400).json({
        message: "currentQuantity must be a positive integer or zero",
      });
    }

    if (
      Number.isNaN(parsedFinalPriceCp) ||
      !Number.isInteger(parsedFinalPriceCp) ||
      parsedFinalPriceCp < 0
    ) {
      return res.status(400).json({
        message: "finalPriceCp must be a positive integer or zero",
      });
    }

    if (
      Number.isNaN(parsedSaleQuantity) ||
      !Number.isInteger(parsedSaleQuantity) ||
      parsedSaleQuantity <= 0
    ) {
      return res.status(400).json({
        message: "saleQuantity must be a positive integer",
      });
    }

    if (parsedSaleQuantity > parsedCurrentQuantity) {
      return res.status(400).json({
        message: "No hay suficiente stock para completar la venta.",
        availableQuantity: parsedCurrentQuantity,
        requestedQuantity: parsedSaleQuantity,
      });
    }

    const totalPriceCp = parsedFinalPriceCp * parsedSaleQuantity;
    const newCashAmountCp = parsedCashAmountCp + totalPriceCp;
    const newQuantity = parsedCurrentQuantity - parsedSaleQuantity;

    res.json({
      message: "Venta calculada correctamente",
      data: {
        saleSummary: {
          itemId: parsedItemId,
          quantity: parsedSaleQuantity,
          unitPriceCp: parsedFinalPriceCp,
          unitPrice: formatCopperToCurrency(parsedFinalPriceCp),
          totalPriceCp,
          totalPrice: formatCopperToCurrency(totalPriceCp),
        },
        merchant: {
          cashAmountCp: newCashAmountCp,
          cashAmount: formatCopperToCurrency(newCashAmountCp),
        },
        inventoryItem: {
          itemId: parsedItemId,
          quantity: newQuantity,
          status: newQuantity > 0 ? "Disponible" : "Sin stock",
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al calcular venta",
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
      order: [
        [
          { model: MerchantInventory, as: "inventory" },
          { model: Item, as: "item" },
          "shopTypeId",
          "ASC",
        ],
        [
          { model: MerchantInventory, as: "inventory" },
          { model: Item, as: "item" },
          "merchantQualityId",
          "ASC",
        ],
        [
          { model: MerchantInventory, as: "inventory" },
          { model: Item, as: "item" },
          "basePriceCp",
          "ASC",
        ],
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