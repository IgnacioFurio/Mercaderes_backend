import { Router, Request, Response } from "express";
import { rollDiceFormula } from "../utils/dice.utils";
import { getInventorySizeByQualityRank } from "../utils/inventory.utils";

const { Item, ShopType, MerchantQuality } = require("../../models");

const router = Router();

// test para las tiradas de dados
router.get("/test-roll/:formula", (req: Request, res: Response) => {
  try {
    const formula = req.params.formula;

    if (!formula || Array.isArray(formula)) {
      return res.status(400).json({
        message: "Debes indicar una fórmula válida.",
      });
    }

    const result = rollDiceFormula(formula);

    res.json({
      formula,
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fórmula no válida",
      error: error instanceof Error ? error.message : error,
    });
  }
});

// test para el tamaño de inventario
router.get("/test-inventory-size/:rank", (req: Request, res: Response) => {
  try {
    const rankParam = req.params.rank;

    if (!rankParam || Array.isArray(rankParam)) {
      return res.status(400).json({
        message: "Debes indicar un rank válido.",
      });
    }

    const rank = Number(rankParam);

    if (Number.isNaN(rank)) {
      return res.status(400).json({
        message: "El rank debe ser un número.",
      });
    }

    const result = getInventorySizeByQualityRank(rank);

    res.json({
      rank,
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: "No se pudo calcular el tamaño del inventario.",
      error: error instanceof Error ? error.message : error,
    });
  }
});

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



export default router;