export const pickRandomElement = <T>(elements: T[]): T => {
    if (elements.length === 0) {
        throw new Error("No se puede elegir un elemento aleatorio de una lista vacía.");
    }

    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex] as T;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleElements = <T>(elements: T[]): T[] => {
    const shuffledElements = [...elements];

    for (let index = shuffledElements.length - 1; index > 0; index--) {
        const randomIndex = getRandomInt(0, index);

        const temporalElement = shuffledElements[index];
        shuffledElements[index] = shuffledElements[randomIndex] as T;
        shuffledElements[randomIndex] = temporalElement as T;
    }

    return shuffledElements;
};

export const pickRandomItems = <T>(items: T[], amount: number): T[] => {
    if (items.length === 0) {
        return [];
    }

    const safeAmount = Math.min(amount, items.length);
    const shuffledItems = shuffleElements(items);

    return shuffledItems.slice(0, safeAmount);
};