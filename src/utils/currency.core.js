const COPPER_VALUE_BY_CURRENCY = {
    cp: 1,
    sp: 10,
    gp: 100,
};

const parseCurrencyToCopper = (price) => {
    if (!price || typeof price !== "string") {
        return 0;
    }

    const normalizedPrice = price
        .trim()
        .toLowerCase()
        .replace(/,/g, "");

    const match = normalizedPrice.match(/^(\d+)\s*(cp|sp|gp)$/);

    if (!match) {
        return 0;
    }

    const amountText = match[1];
    const currency = match[2];

    if (!amountText || !currency) {
        return 0;
    }

    const amount = Number(amountText);
    const copperMultiplier = COPPER_VALUE_BY_CURRENCY[currency];

    if (copperMultiplier === undefined) {
        return 0;
    }

    return amount * copperMultiplier;
    };

    const formatCopperToCurrency = (amountCp) => {
    if (!Number.isFinite(amountCp) || amountCp <= 0) {
        return "0 cp";
    }

    const gp = Math.floor(amountCp / 100);
    const remainingAfterGp = amountCp % 100;

    const sp = Math.floor(remainingAfterGp / 10);
    const cp = remainingAfterGp % 10;

    const parts = [];

    if (gp > 0) {
        parts.push(`${gp.toLocaleString("en-US")} gp`);
    }

    if (sp > 0) {
        parts.push(`${sp} sp`);
    }

    if (cp > 0) {
        parts.push(`${cp} cp`);
    }

    return parts.join(" ");
};

module.exports = {
    parseCurrencyToCopper,
    formatCopperToCurrency,
};