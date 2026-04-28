import { Router, Request, Response } from "express";
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

export default router;