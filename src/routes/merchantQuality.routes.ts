import { Router, Request, Response } from "express";
const { MerchantQuality } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const qualities = await MerchantQuality.findAll({
      order: [["rank", "ASC"]],
    });

    res.json({
      message: "Listado de calidades de mercader",
      count: qualities.length,
      data: qualities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener calidades de mercader",
      error,
    });
  }
});

export default router;