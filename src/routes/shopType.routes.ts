import { Router, Request, Response } from "express";
const { ShopType } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const shopTypes = await ShopType.findAll({
      order: [["name", "ASC"]],
    });

    res.json({
      message: "Listado de tipos de tienda",
      count: shopTypes.length,
      data: shopTypes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener tipos de tienda",
      error,
    });
  }
});

export default router;