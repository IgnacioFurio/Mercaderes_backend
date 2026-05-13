import { Router, Request, Response } from "express";
import { Op } from "sequelize";
import { rollDiceFormula } from "../utils/dice.utils";
import { pickRandomItems } from "../utils/random.utils";
import { 
  getModifiedPrice,
  PRICE_MODIFIER_MIN,
  PRICE_MODIFIER_MAX,
} from "../utils/priceModifier.utils";


const { Item, ShopType, MerchantQuality } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await Item.findAll({
      include: [
        {
          model: ShopType,
          as: "shopType",
        },
        {
          model: MerchantQuality,
          as: "quality",
        },
      ],
      order: [["id", "ASC"]],
    });

    res.json({
      message: "Listado de items",
      count: items.length,
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener items",
      error,
    });
  }
});

router.get("/compatible", async (req, res) => {
  try {
    const { shopTypeId, merchantQualityId } = req.query;

    const whereConditions: any = {};

    if (shopTypeId !== undefined) {
      const parsedShopTypeId = Number(shopTypeId);

      if (Number.isNaN(parsedShopTypeId)) {
        return res.status(400).json({
          message: "shopTypeId must be a valid number",
        });
      }

      whereConditions.shopTypeId = parsedShopTypeId;
    }

    if (merchantQualityId !== undefined) {
      const parsedMerchantQualityId = Number(merchantQualityId);

      if (Number.isNaN(parsedMerchantQualityId)) {
        return res.status(400).json({
          message: "merchantQualityId must be a valid number",
        });
      }

      whereConditions.merchantQualityId = {
        [Op.lte]: parsedMerchantQualityId,
      };
    }

    const compatibleItems = await Item.findAll({
      where: whereConditions,
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
      order: [
        ["shopTypeId", "ASC"],
        ["merchantQualityId", "ASC"],
        ["basePriceCp", "ASC"],
      ],
    });

    return res.status(200).json(compatibleItems);
  } catch (error) {
    console.error("Error getting compatible items:", error);

    return res.status(500).json({
      message: "Error getting compatible items",
    });
  }
});

router.post("/inventory-items", async (req, res) => {
  try {
    const { itemIds, priceModifierPercent } = req.body; 
    
    if (!Array.isArray(itemIds)) {
      return res.status(400).json({
        message: "itemIds must be an array",
      });
    }

    if (itemIds.length === 0) {
      return res.status(400).json({
        message: "itemIds cannot be empty",
      });
    }

    const parsedItemIds = itemIds.map((itemId) => Number(itemId));

    const hasInvalidIds = parsedItemIds.some((itemId) =>
      Number.isNaN(itemId)
    );

    if (priceModifierPercent === undefined || priceModifierPercent === null) {
      return res.status(400).json({
        message: "priceModifierPercent is required",
      });
    }

    const parsedPriceModifierPercent = Number(priceModifierPercent);

    if (Number.isNaN(parsedPriceModifierPercent)) {
      return res.status(400).json({
        message: "priceModifierPercent must be a valid number",
      });
    }

    if (
      parsedPriceModifierPercent < PRICE_MODIFIER_MIN ||
      parsedPriceModifierPercent > PRICE_MODIFIER_MAX
    ) {
      return res.status(400).json({
        message: `priceModifierPercent must be between ${PRICE_MODIFIER_MIN} and ${PRICE_MODIFIER_MAX}`,
      });
    }
    
    if (hasInvalidIds) {
      return res.status(400).json({
        message: "All itemIds must be valid numbers",
      });
    }

    const items = await Item.findAll({
      where: {
        id: {
          [Op.in]: parsedItemIds,
        },
      },
      order: [
        ["shopTypeId", "ASC"],
        ["merchantQualityId", "ASC"],
        ["basePriceCp", "ASC"],
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (items.length !== parsedItemIds.length) {
      const foundItemIds = items.map((item: any) => item.id);

      const missingItemIds = parsedItemIds.filter(
        (itemId) => !foundItemIds.includes(itemId)
      );

      return res.status(404).json({
        message: "Some itemIds were not found",
        missingItemIds,
      });
    }

    const inventoryItems = items.map((item: any) => {
    const quantity = item.quantityFormula
      ? rollDiceFormula(item.quantityFormula)
      : 1;
    const { finalPrice, finalPriceCp } = getModifiedPrice(
      item.basePriceCp || 0,
      parsedPriceModifierPercent
    );

    return {
      itemId: item.id,
      quantity,
      finalPrice,
      finalPriceCp,
      status: quantity > 0 ? "Disponible" : "Sin Stock",
      notes: "",
      item,
    };
  });

  return res.status(200).json(inventoryItems);
  } catch (error) {
    console.error("Error preparing inventory items:", error);

    return res.status(500).json({
      message: "Error preparing inventory items",
    });
  }
});

router.post("/generate-random", async (req, res) => {
  try {
    const {
      shopTypeId,
      merchantQualityId,
      excludeItemIds = [],
      amount = 1,
      priceModifierPercent = 0,
    } = req.body;

    if (priceModifierPercent === undefined || priceModifierPercent === null) {
      return res.status(400).json({
        message: "priceModifierPercent is required",
      });
    }

    const parsedShopTypeId = Number(shopTypeId);
    const parsedMerchantQualityId = Number(merchantQualityId);
    const parsedAmount = Number(amount);
    const parsedPriceModifierPercent = Number(priceModifierPercent);
    
    if (shopTypeId === undefined || merchantQualityId === undefined) {
      return res.status(400).json({
        message: "shopTypeId and merchantQualityId are required",
      });
    }
    
    if (Number.isNaN(parsedPriceModifierPercent)) {
      return res.status(400).json({
        message: "priceModifierPercent must be a valid number",
      });
    }

    if (
      parsedPriceModifierPercent < PRICE_MODIFIER_MIN ||
      parsedPriceModifierPercent > PRICE_MODIFIER_MAX
    ) {
      return res.status(400).json({
        message: `priceModifierPercent must be between ${PRICE_MODIFIER_MIN} and ${PRICE_MODIFIER_MAX}`,
      });
    }

    if (
      Number.isNaN(parsedShopTypeId) ||
      Number.isNaN(parsedMerchantQualityId)
    ) {
      return res.status(400).json({
        message: "shopTypeId and merchantQualityId must be valid numbers",
      });
    }

    if (Number.isNaN(parsedAmount) || parsedAmount < 1) {
      return res.status(400).json({
        message: "amount must be a valid number greater than 0",
      });
    }

    if (!Array.isArray(excludeItemIds)) {
      return res.status(400).json({
        message: "excludeItemIds must be an array",
      });
    }

    if (Number.isNaN(parsedPriceModifierPercent)) {
      return res.status(400).json({
        message: "priceModifierPercent must be a valid number",
      });
    }

    if (
      parsedPriceModifierPercent < PRICE_MODIFIER_MIN ||
      parsedPriceModifierPercent > PRICE_MODIFIER_MAX
    ) {
      return res.status(400).json({
        message: `priceModifierPercent must be between ${PRICE_MODIFIER_MIN} and ${PRICE_MODIFIER_MAX}`,
      });
    }

    const parsedExcludeItemIds = excludeItemIds.map((itemId) =>
      Number(itemId)
    );

    const hasInvalidExcludeIds = parsedExcludeItemIds.some((itemId) =>
      Number.isNaN(itemId)
    );

    if (hasInvalidExcludeIds) {
      return res.status(400).json({
        message: "All excludeItemIds must be valid numbers",
      });
    }

    const whereConditions: any = {
      shopTypeId: parsedShopTypeId,
      merchantQualityId: {
        [Op.lte]: parsedMerchantQualityId,
      },
    };

    if (parsedExcludeItemIds.length > 0) {
      whereConditions.id = {
        [Op.notIn]: parsedExcludeItemIds,
      };
    }

    const compatibleItems = await Item.findAll({
      where: whereConditions,
      order: [
        ["shopTypeId", "ASC"],
        ["merchantQualityId", "ASC"],
        ["basePriceCp", "ASC"],
      ],
    });

    if (compatibleItems.length === 0) {
      return res.status(404).json({
        message: "No compatible items available",
      });
    };

    const selectedItems = pickRandomItems(
      compatibleItems,
      Math.min(parsedAmount, compatibleItems.length)
    );

    selectedItems.sort((a: any, b: any) => {
      if (a.shopTypeId !== b.shopTypeId) {
        return a.shopTypeId - b.shopTypeId;
      }

      if (a.merchantQualityId !== b.merchantQualityId) {
        return a.merchantQualityId - b.merchantQualityId;
      }

      return (a.basePriceCp || 0) - (b.basePriceCp || 0);
    });

    const inventoryItems = selectedItems.map((item: any) => {
      const quantity = item.quantityFormula
        ? rollDiceFormula(item.quantityFormula)
        : 1;
      
      const { finalPrice, finalPriceCp } = getModifiedPrice(
        item.basePriceCp || 0,
        parsedPriceModifierPercent
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
    });

    return res.status(200).json(inventoryItems);
  } catch (error) {
    console.error("Error generating random inventory items:", error);

    return res.status(500).json({
      message: "Error generating random inventory items",
    });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const item = await Item.findByPk(req.params.id,{
      include: [
        {
          model: ShopType,
          as: "shopType",
          attributes: [ "id", "name", "description" ]
        },
        {
          model: MerchantQuality,
          as: "quality",
          attributes: [ "id", "name", "description" ]
        },
      ],
    });

    res.json({
      message: "Objeto",
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener items",
      error,
    });
  }
});

export default router;