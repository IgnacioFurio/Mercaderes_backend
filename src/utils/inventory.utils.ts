import { rollDiceFormula } from "./dice.utils";

export const getInventorySizeFormulaByQualityRank = (rank: number): string => {
    switch (rank) {
        case 1:
        return "1d2";
        case 2:
        return "1d4+2";
        case 3:
        return "2d4+2";
        case 4:
        return "2d6+3";
        case 5:
        return "3d6+4";
        case 6:
        return "4d6+6";
        default:
        return "2d4+2";
    }
};

export const getInventorySizeByQualityRank = (rank: number): number => {
    const formula = getInventorySizeFormulaByQualityRank(rank);
    return rollDiceFormula(formula);
};