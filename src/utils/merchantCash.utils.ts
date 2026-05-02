import { rollDiceFormula } from "./dice.utils";
import { formatCopperToCurrency } from "./currency.utils";

type MerchantQualityWithCashFormula = {
    cashFormula?: string | null;
};

type MerchantCashResult = {
    cashAmountCp: number;
    cashAmount: string;
};

export const getMerchantCashFromQualities = (
    qualities: MerchantQualityWithCashFormula[]
): MerchantCashResult => {
    const cashAmountGp = qualities.reduce((total, quality) => {
        if (!quality.cashFormula) {
        return total;
        }

        return total + rollDiceFormula(quality.cashFormula);
    }, 0);

    const cashAmountCp = cashAmountGp * 100;

    return {
        cashAmountCp,
        cashAmount: formatCopperToCurrency(cashAmountCp),
    };
};