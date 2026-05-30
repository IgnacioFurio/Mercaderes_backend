import {
    EnchantmentResult,
    legendaryEnchantments,
    majorEnchantments,
    minorEnchantments,
} from '../data/specialTables/enchantments.tables';

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

    const buildResolvedEnchantment = (enchantment: EnchantmentResult): ResolvedSpecialItem => {
    return {
        name: `Encantamiento de ${enchantment.name}`,
        notes: enchantment.effect,
        isResolved: true,
    };
    };

    export const resolveSpecialItem = (
    itemName: string,
    originalNotes: string
    ): ResolvedSpecialItem => {
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