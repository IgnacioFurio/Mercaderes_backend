export interface FeyGeasResult {
    roll: number;
    effect: string;
}

export const minorGeas: FeyGeasResult[] = [
    {
        roll: 1,
        effect: 'Entrega al mercader 1d4 de tus recuerdos más felices.',
    },
    {
        roll: 2,
        effect: 'Destruye por completo un objeto específico de hierro frío.',
    },
    {
        roll: 3,
        effect: 'Entrega al mercader una sílaba de tu nombre.',
    },
    {
        roll: 4,
        effect: 'Mata a una fata concreta y lleva su cabeza al mercader.',
    },
    {
        roll: 5,
        effect: 'Entrega al mercader un simple mechón de tu pelo.',
    },
    {
        roll: 6,
        effect: 'Cuenta al mercader tu secreto más oscuro.',
    },
    {
        roll: 7,
        effect: 'Bebe una poción misteriosa que te entrega el mercader.',
    },
    {
        roll: 8,
        effect: 'Entrega al mercader un aspecto importante de tu belleza.',
    },
    {
        roll: 9,
        effect: 'Envejeces instantáneamente 2d6 años.',
    },
    {
        roll: 10,
        effect: 'Pierdes un objeto concreto y sin nombre que llevas encima.',
    },
];

export const majorGeas: FeyGeasResult[] = [
    {
        roll: 1,
        effect: 'Pierdes el conocimiento de un idioma, o la competencia con un instrumento o un conjunto de herramientas de artesano concretos.',
    },
    {
        roll: 2,
        effect: 'Solo puedes hablar en rima durante los próximos 30 días.',
    },
    {
        roll: 3,
        effect: 'Quedas permanentemente encantado por el mercader.',
    },
    {
        roll: 4,
        effect: 'Realiza una broma inofensiva a un gobernante poderoso.',
    },
    {
        roll: 5,
        effect: 'Finge tu propia muerte y asume una nueva identidad.',
    },
    {
        roll: 6,
        effect: 'Roba un objeto específico y poderoso para el mercader.',
    },
    {
        roll: 7,
        effect: 'Quema un edificio construido sobre una arboleda ancestral y sagrada.',
    },
    {
        roll: 8,
        effect: 'Entrega al mercader la visión de uno de tus ojos.',
    },
    {
        roll: 9,
        effect: 'Obtienes cuernos largos y curvados, orejas bestiales y los ojos de un animal.',
    },
    {
        roll: 10,
        effect: 'Escuchar una palabra concreta te causa 3d8 de daño psíquico.',
    },
];

export const legendaryGeas: FeyGeasResult[] = [
    {
        roll: 1,
        effect: 'Promete al mercader tu primer hijo.',
    },
    {
        roll: 2,
        effect: 'Lleva al mercader un niño concreto que no sea tuyo.',
    },
    {
        roll: 3,
        effect: 'Traiciona a tus amigos de una forma específica e importante.',
    },
    {
        roll: 4,
        effect: 'Nunca vuelvas a tocar hierro, o recibe 10d10 de daño radiante por asalto.',
    },
    {
        roll: 5,
        effect: 'Vive como perro de caza feérico durante los próximos 90 días.',
    },
    {
        roll: 6,
        effect: 'Cada año y un día, el mercader puede pedirte un favor de cualquier magnitud, y debes cumplirlo.',
    },
    {
        roll: 7,
        effect: 'Promete tu leyenda al mercader. Nadie te recordará después de no haberte visto durante 7 días.',
    },
    {
        roll: 8,
        effect: 'Entrega tus sueños al mercader; puede hacer con ellos lo que desee, como con el conjuro sueño.',
    },
    {
        roll: 9,
        effect: 'Promete tu mano en matrimonio.',
    },
    {
        roll: 10,
        effect: 'Pierdes tu pasado. Olvidas todo salvo el último día.',
    },
];