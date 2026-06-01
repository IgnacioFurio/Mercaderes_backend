type CurrencyUnit = "cp" | "sp" | "gp";

const CURRENCY_MULTIPLIERS: Record<CurrencyUnit, number> = {
    cp: 1,
    sp: 10,
    gp: 100,
};

export const parseCurrencyToCopper = (price: string): number => {
    if (!price || typeof price !== "string") {
        return 0;
    }

    const normalizedPrice = price
        .toLowerCase()
        .replace(/,/g, "")
        .trim();

    const regex = /(\d+)\s*(cp|sp|gp)/g;

    let totalCopper = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(normalizedPrice)) !== null) {
        const amount = Number(match[1]);
        const unit = match[2] as CurrencyUnit;

        totalCopper += amount * CURRENCY_MULTIPLIERS[unit];
    }

    return totalCopper;
};

export const formatCopperToCurrency = (amountCp: number): string => {
    if (!Number.isFinite(amountCp) || amountCp <= 0) {
        return "0 cp";
    }

    let remainingCopper = Math.round(amountCp);

    const gp = Math.floor(remainingCopper / 100);
    remainingCopper %= 100;

    const sp = Math.floor(remainingCopper / 10);
    remainingCopper %= 10;

    const cp = remainingCopper;

    const parts: string[] = [];

    if (gp > 0) {
        parts.push(`${gp} gp`);
    }

    if (sp > 0) {
        parts.push(`${sp} sp`);
    }

    if (cp > 0) {
        parts.push(`${cp} cp`);
    }

    return parts.join(" ");
};