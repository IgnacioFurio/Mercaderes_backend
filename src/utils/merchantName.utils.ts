import { pickRandomElement } from "./random.utils";
import {
    humanNames,
    humanSurnames,
    dwarfNames,
    dwarfSurnames,
    elfNames,
    elfSurnames,
    } from "../data/merchants/names";

export const generateMerchantNameBySpecies = (species: string): string => {
    let names = humanNames;
    let surnames = humanSurnames;

    switch (species) {
        case "Enano":
        names = dwarfNames;
        surnames = dwarfSurnames;
        break;

        case "Elfo":
        names = elfNames;
        surnames = elfSurnames;
        break;

        case "Humano":
        default:
        names = humanNames;
        surnames = humanSurnames;
        break;
    }

    const name = pickRandomElement(names);
    const surname = pickRandomElement(surnames);

    return `${name} ${surname}`;
};