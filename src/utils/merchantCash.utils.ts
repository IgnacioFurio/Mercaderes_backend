import { rollDiceFormula } from "./dice.utils";

export const getMerchantCashAmountFromQualities = (
    qualities: any[]
): number => {
    return qualities.reduce((total, quality) => {
        if (!quality.cashFormula) {
        return total;
        }

        return total + rollDiceFormula(quality.cashFormula);
    }, 0);
};