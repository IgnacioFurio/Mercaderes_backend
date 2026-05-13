import { formatCopperToCurrency } from "./currency.utils";

export const PRICE_MODIFIER_MIN = -30;
export const PRICE_MODIFIER_MAX = 30;

export const PRICE_MODIFIER_OPTIONS = [
    {
        attitudeLabel: "Hostil",
        priceLabel: "+30%",
        value: 30,
        description:
        "El mercader desconfía abiertamente de los personajes y aplica el mayor sobreprecio.",
    },
    {
        attitudeLabel: "Muy desconfiado",
        priceLabel: "+25%",
        value: 25,
        description:
        "El mercader ve a los personajes como una oportunidad de beneficio fácil.",
    },
    {
        attitudeLabel: "Desconfiado",
        priceLabel: "+20%",
        value: 20,
        description: "El mercader mantiene precios claramente inflados.",
    },
    {
        attitudeLabel: "Reservado",
        priceLabel: "+15%",
        value: 15,
        description: "El mercader no se fía del todo y protege su margen.",
    },
    {
        attitudeLabel: "Cauto",
        priceLabel: "+10%",
        value: 10,
        description: "El mercader aplica una pequeña subida por prudencia.",
    },
    {
        attitudeLabel: "Ligeramente favorable",
        priceLabel: "+5%",
        value: 5,
        description:
        "El trato es correcto, pero el mercader aún busca sacar algo más.",
    },
    {
        attitudeLabel: "Neutral",
        priceLabel: "Precio base",
        value: 0,
        description: "El mercader vende al precio base sin modificar.",
    },
    {
        attitudeLabel: "Colaborador",
        priceLabel: "-5%",
        value: -5,
        description:
        "El mercader ofrece una pequeña rebaja por buena disposición.",
    },
    {
        attitudeLabel: "Amable",
        priceLabel: "-10%",
        value: -10,
        description:
        "El mercader trata bien a los personajes y reduce el margen.",
    },
    {
        attitudeLabel: "Favorable",
        priceLabel: "-15%",
        value: -15,
        description:
        "El mercader está claramente inclinado a ayudar.",
    },
    {
        attitudeLabel: "Aliado comercial",
        priceLabel: "-20%",
        value: -20,
        description:
        "El mercader prioriza la relación antes que el beneficio inmediato.",
    },
    {
        attitudeLabel: "Amigo",
        priceLabel: "-25%",
        value: -25,
        description: "El mercader ofrece precios casi de coste.",
    },
    {
        attitudeLabel: "Leal",
        priceLabel: "-30%",
        value: -30,
        description:
        "El mercader aplica el mayor descuento posible por confianza, deuda o vínculo fuerte.",
    },
];

export const clampPriceModifier = (modifierPercent: number): number => {
    if (!Number.isFinite(modifierPercent)) {
        return 0;
    }

    return Math.max(
        PRICE_MODIFIER_MIN,
        Math.min(PRICE_MODIFIER_MAX, modifierPercent)
    );
};

export const applyPriceModifierToCopper = (
    basePriceCp: number,
    modifierPercent: number
    ): number => {
    if (!Number.isFinite(basePriceCp) || basePriceCp <= 0) {
        return 0;
    }

    const safeModifierPercent = clampPriceModifier(modifierPercent);
    const multiplier = 1 + safeModifierPercent / 100;

    return Math.max(0, Math.round(basePriceCp * multiplier));
};

export const getModifiedPrice = (
    basePriceCp: number,
    modifierPercent: number
    ): {
    finalPriceCp: number;
    finalPrice: string;
    } => {
    const finalPriceCp = applyPriceModifierToCopper(
        basePriceCp,
        modifierPercent
    );

    return {
        finalPriceCp,
        finalPrice: formatCopperToCurrency(finalPriceCp),
    };
};

export const getPriceModifierOptionByValue = (value: number) => {
    return PRICE_MODIFIER_OPTIONS.find((option) => option.value === value);
};