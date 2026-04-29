import { Router, Request, Response } from "express";
import {
  speciesOptions,
    regionOptions,
    personalityTraitsOptions,
    idealsOptions,
    bondsOptions,
    flawsOptions,
    gimmicksOptions,
} from "../data/merchants";

    const { ShopType, MerchantQuality } = require("../../models");

    const router = Router();

    router.get("/", async (req: Request, res: Response) => {
    try {
        const shopTypes = await ShopType.findAll({
        attributes: ["id", "name", "description"],
        order: [["name", "ASC"]],
        });

        const merchantQualities = await MerchantQuality.findAll({
        attributes: ["id", "name", "rank", "description"],
        order: [["rank", "ASC"]],
        });

        res.json({
        message: "Opciones para formulario de mercader",
        data: {
            species: speciesOptions,
            regions: regionOptions,
            shopTypes,
            merchantQualities,
            personalityTraits: personalityTraitsOptions,
            ideals: idealsOptions,
            bonds: bondsOptions,
            flaws: flawsOptions,
            gimmicks: gimmicksOptions,
        },
        });
    } catch (error) {
        res.status(500).json({
        message: "Error al obtener opciones de mercader",
        error: error instanceof Error ? error.message : error,
        });
    }
});

export default router;