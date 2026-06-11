import { pickRandomElement } from "./random.utils";
import {
    humanNames,
    humanSurnames,
    dwarfNames,
    dwarfSurnames,
    elfNames,
    elfSurnames,
    halflingNames,
    halflingSurnames,
    gnomeNames,
    gnomeSurnames,
    orcNames,
    orcSurnames,
    tieflingNames,
    tieflingSurnames,
    dragonbornNames,
    dragonbornSurnames,
    goblinNames,
    goblinSurnames,
    koboldNames,
    koboldSurnames,
    } from "../data/merchants/names";

export const generateMerchantNameBySpecies = (species: string): string => {
    let names = humanNames;
    let surnames = humanSurnames;

    switch (species) {
        case "Dracrónido":
        names = dragonbornNames;
        surnames = dragonbornSurnames;
        break;
        
        case "Enano":
        names = dwarfNames;
        surnames = dwarfSurnames;
        break;

        case "Elfo":
        names = elfNames;
        surnames = elfSurnames;
        break;
        
        case "Gnomo":
        names = gnomeNames;
        surnames = gnomeSurnames;
        break;
        
        case "Goblin":
        names = goblinNames;
        surnames = goblinSurnames;
        break;
        
        case "Kobold":
        names = koboldNames;
        surnames = koboldSurnames;
        break;
        
        case "Semielfo":
        names = [...humanNames, ...elfNames];
        surnames = [...humanSurnames, ...elfSurnames];
        break;
        
        case "Semiorco":
        names = [...humanNames, ...orcNames];
        surnames = [...humanSurnames, ...orcSurnames];
        break;
        
        case "Orco":
        names = orcNames;
        surnames = orcSurnames;
        break;
        
        case "Tiefling":
        names = tieflingNames;
        surnames = tieflingSurnames;
        break;
        
        case "Mediano":
        names = halflingNames;
        surnames = halflingSurnames;
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