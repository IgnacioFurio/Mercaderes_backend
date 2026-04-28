import { getRandomInt } from "./random.utils";

    export const rollDiceFormula = (formula: string): number => {
    const cleanFormula = formula.replace(/\s+/g, "").toLowerCase();

    const diceRegex = /^(\d+)d(\d+)([+-]\d+)?(?:x(\d+)|\*(\d+))?$/;
    const fixedNumberRegex = /^\d+$/;

    if (fixedNumberRegex.test(cleanFormula)) {
        return Number(cleanFormula);
    }

    const match = cleanFormula.match(diceRegex);

    if (!match) {
        throw new Error(`Fórmula de dados no válida: ${formula}`);
    }

    const numberOfDice = Number(match[1]);
    const diceFaces = Number(match[2]);
    const modifier = match[3] ? Number(match[3]) : 0;
    const multiplier = match[4] ? Number(match[4]) : match[5] ? Number(match[5]) : 1;

    let total = 0;

    for (let index = 0; index < numberOfDice; index++) {
        total += getRandomInt(1, diceFaces);
    }

    const result = (total + modifier) * multiplier;

    return Math.max(result, 0);
};