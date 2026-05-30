export interface EnchantmentResult {
    roll: number;
    name: string;
    effect: string;
}

export const minorEnchantments: EnchantmentResult[] = [
    {
        roll: 1,
        name: 'Faro',
        effect: 'Como acción adicional, el objeto empieza o deja de emitir luz brillante en un radio de 15 pies y luz tenue 15 pies adicionales.',
    },
    {
        roll: 2,
        name: 'Llamada',
        effect: 'Como acción adicional, el objeto emite un sonido no verbal de tu elección, audible hasta 300 pies.',
    },
    {
        roll: 3,
        name: 'Brújula',
        effect: 'Como acción adicional, el objeto indica de alguna forma dónde está el norte. Solo funciona en el Plano Material.',
    },
    {
        roll: 4,
        name: 'Reluciente',
        effect: 'El objeto nunca se ensucia.',
    },
    {
        roll: 5,
        name: 'Guardián',
        effect: 'La criatura sintonizada obtiene un bonificador de +2 a la iniciativa.',
    },
    {
        roll: 6,
        name: 'Idioma',
        effect: 'La criatura sintonizada obtiene conocimiento de un idioma adicional, a elección del DM.',
    },
    {
        roll: 7,
        name: 'Retorno',
        effect: 'Como acción adicional, el objeto vuelve a la persona sintonizada y se equipa por sí mismo si es aplicable.',
    },
    {
        roll: 8,
        name: 'Centinela',
        effect: 'El objeto brilla cuando está a 300 pies o menos de una criatura de un tipo concreto, elegido por el DM.',
    },
    {
        roll: 9,
        name: 'Irrompible',
        effect: 'El objeto solo puede romperse por medios especiales.',
    },
    {
        roll: 10,
        name: 'Flotante',
        effect: 'El objeto flota de forma natural en líquidos. Una criatura sintonizada obtiene una velocidad de nado de 30 pies.',
    },
    ];

    export const majorEnchantments: EnchantmentResult[] = [
    {
        roll: 1,
        name: 'Duradero',
        effect: 'La criatura sintonizada obtiene un bonificador de +1 a la CA mientras lleva el objeto encima. Solo puede beneficiarse de este bonificador una vez.',
    },
    {
        roll: 2,
        name: 'Veloz',
        effect: 'La criatura sintonizada obtiene un bonificador de +10 pies a su velocidad de movimiento.',
    },
    {
        roll: 3,
        name: 'Elocuencia',
        effect: 'Como acción adicional, la criatura sintonizada realiza todas las pruebas de Carisma con ventaja durante 1 minuto. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 4,
        name: 'Visión nocturna',
        effect: 'La criatura sintonizada obtiene visión en la oscuridad hasta 60 pies, o aumenta en 60 pies el alcance de su visión en la oscuridad existente.',
    },
    {
        roll: 5,
        name: 'Toque arácnido',
        effect: 'La criatura sintonizada obtiene una velocidad de trepa igual a su velocidad de movimiento.',
    },
    {
        roll: 6,
        name: 'Templanza',
        effect: 'La criatura sintonizada obtiene resistencia al daño de fuego y al daño de frío.',
    },
    {
        roll: 7,
        name: 'Transformación',
        effect: 'Como acción, el objeto se transforma en otro objeto del mismo tipo general, a tu elección. Por ejemplo, un estoque podría convertirse en un mandoble, o unas botas en unas sandalias.',
    },
    {
        roll: 8,
        name: 'Apertura',
        effect: 'Como acción, el objeto abre mágicamente una cerradura no mágica de tu elección a 30 pies o menos. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 9,
        name: 'Invisible',
        effect: 'El objeto es permanentemente invisible.',
    },
    {
        roll: 10,
        name: 'Amparo',
        effect: 'Como reacción al realizar una tirada de salvación, la criatura sintonizada obtiene ventaja en esa tirada. Se recarga tras completar un descanso corto o largo.',
    },
    ];

    export const legendaryEnchantments: EnchantmentResult[] = [
    {
        roll: 1,
        name: 'Equilibrio',
        effect: 'Los ataques contra la criatura sintonizada no pueden tener ventaja ni desventaja.',
    },
    {
        roll: 2,
        name: 'Temor',
        effect: 'Como acción adicional, la criatura sintonizada elige a otra criatura a 5 pies o menos. El objetivo debe superar una salvación de Sabiduría CD 15 o quedar asustado de la criatura sintonizada hasta el final del siguiente turno de la criatura sintonizada. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 3,
        name: 'Vuelo',
        effect: 'Como acción adicional, la criatura sintonizada obtiene una velocidad de vuelo igual al doble de su velocidad de movimiento hasta el final de su siguiente turno. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 4,
        name: 'Fortaleza',
        effect: 'El máximo de puntos de golpe de la criatura sintonizada aumenta en 15 + su bonificador de competencia.',
    },
    {
        roll: 5,
        name: 'Suerte',
        effect: 'La criatura sintonizada puede añadir 1d10 a cualquier prueba, salvación o ataque después de tirar, pero antes de conocer el resultado. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 6,
        name: 'Fase',
        effect: 'Como acción adicional, la criatura sintonizada puede atravesar objetos sólidos de su elección, como muros o suelos, como si fueran terreno difícil hasta el final de su turno actual. Si termina su turno dentro de un objeto, es expulsada al espacio abierto más cercano y recibe 4d8 de daño de fuerza que no puede resistirse ni ignorarse. Se recarga tras completar un descanso corto o largo.',
    },
    {
        roll: 7,
        name: 'Silencio',
        effect: 'La criatura sintonizada obtiene un bonificador de +10 a las pruebas de Destreza (Sigilo).',
    },
    {
        roll: 8,
        name: 'Teleportación',
        effect: 'Como acción adicional, la criatura sintonizada se teleporta hasta 15 pies a una ubicación que pueda ver.',
    },
    {
        roll: 9,
        name: 'Visión verdadera',
        effect: 'La criatura sintonizada obtiene visión verdadera hasta 60 pies, o aumenta en 60 pies el alcance de su visión verdadera existente.',
    },
    {
        roll: 10,
        name: 'Vitalidad',
        effect: 'La criatura sintonizada es inmune a las enfermedades, a la condición envenenado y al daño de veneno.',
    },
];