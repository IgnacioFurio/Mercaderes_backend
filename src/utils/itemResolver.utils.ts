import {
    EnchantmentResult,
    legendaryEnchantments,
    majorEnchantments,
    minorEnchantments,
} from '../data/specialTables/enchantments.tables';

import {
    FeyGeasResult,
    legendaryGeas,
    majorGeas,
    minorGeas,
} from '../data/specialTables/feyGeas.tables';

import { rollDiceFormula } from './dice.utils';

interface ResolvedSpecialItem {
    name: string;
    notes: string;
    isResolved: boolean;
}

const pickRandomEnchantment = (enchantments: EnchantmentResult[]): EnchantmentResult => {
    if (enchantments.length === 0) {
        throw new Error('No hay encantamientos disponibles para resolver.');
    }

    const randomIndex = Math.floor(Math.random() * enchantments.length);
    const enchantment = enchantments[randomIndex];

    if (!enchantment) {
        throw new Error('No se pudo resolver el encantamiento.');
    }

    return enchantment;
};

const pickRandomGeas = (geasList: FeyGeasResult[]): FeyGeasResult => {
    if (geasList.length === 0) {
        throw new Error('No hay geas disponibles para resolver.');
    }

    const randomIndex = Math.floor(Math.random() * geasList.length);
    const geas = geasList[randomIndex];

    if (!geas) {
        throw new Error('No se pudo resolver el geas.');
    }

    return geas;
};

const resolveDiceExpressionsInText = (text: string): string => {
    return text.replace(/\b\d+d\d+(?:\s*[+-]\s*\d+)?\b/g, (diceFormula) => {
        const normalizedFormula = diceFormula.replace(/\s+/g, '');
        const result = rollDiceFormula(normalizedFormula);

        return String(result);
    });
};

const buildResolvedEnchantment = (enchantment: EnchantmentResult): ResolvedSpecialItem => {
    return {
        name: `Encantamiento de ${enchantment.name}`,
        notes: enchantment.effect,
        isResolved: true,
    };
};

const buildResolvedGeas = (
    itemName: string,
    geasLabel: string,
    geas: FeyGeasResult
): ResolvedSpecialItem => {
    const resolvedEffect = resolveDiceExpressionsInText(geas.effect);

    return {
        name: itemName,
        notes: `${resolvedEffect}`,
        isResolved: true,
    };
};

export const resolveSpecialItem = (
    itemName: string,
    originalNotes: string
): ResolvedSpecialItem => {
    if (originalNotes.includes('Coste: geas menor')) {
        const geas = pickRandomGeas(minorGeas);
        return buildResolvedGeas(itemName, 'geas menor', geas);
    }

    if (originalNotes.includes('Coste: geas mayor')) {
        const geas = pickRandomGeas(majorGeas);
        return buildResolvedGeas(itemName, 'geas mayor', geas);
    }

    if (originalNotes.includes('Coste: geas legendario')) {
        const geas = pickRandomGeas(legendaryGeas);
        return buildResolvedGeas(itemName, 'geas legendario', geas);
    }

    switch (itemName) {
        case 'Encantamiento menor aleatorio':
        case 'Encantamiento menor elegido': {
            const enchantment = pickRandomEnchantment(minorEnchantments);
            return buildResolvedEnchantment(enchantment);
        }

        case 'Encantamiento mayor aleatorio':
        case 'Encantamiento mayor elegido': {
            const enchantment = pickRandomEnchantment(majorEnchantments);
            return buildResolvedEnchantment(enchantment);
        }

        case 'Encantamiento legendario aleatorio':
        case 'Encantamiento legendario elegido': {
            const enchantment = pickRandomEnchantment(legendaryEnchantments);
            return buildResolvedEnchantment(enchantment);
        }

        default:
            return {
                name: itemName,
                notes: originalNotes,
                isResolved: false,
            };
    }
};