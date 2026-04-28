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

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const merchant = await Merchant.findByPk(req.params.id);

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