import { Router, Request, Response } from "express";
const { Merchant } = require("../../models");

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const merchants = await Merchant.findAll();

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
export default router;