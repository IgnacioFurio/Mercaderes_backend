const tattoosItems = [
    // Atroz
    {
        name: 'Tinta',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Precio por botella. Cantidad en botellas. Adecuada para escribir o aplicar tatuajes.',
        shopTypeId: 17,
        merchantQualityId: 1
    },
    {
        name: 'Pluma de tinta',
        price: '2 cp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 17,
        merchantQualityId: 1
    },
    {
        name: 'Aguja',
        price: '2 cp',
        quantityFormula: '1d4 x 50',
        source: '—',
        notes: 'Adecuada para aplicar tatuajes.',
        shopTypeId: 17,
        merchantQualityId: 1
    },
    {
        name: 'Tatuaje mundano sencillo',
        price: '5 cp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Formas y figuras básicas; no mayor de 1/4 pie cuadrado.',
        shopTypeId: 17,
        merchantQualityId: 1
    },
    {
        name: 'Tatuaje temporal',
        price: '5 cp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Dibujado; dura 24 horas o hasta que toca agua.',
        shopTypeId: 17,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Kit de sanador',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 17,
        merchantQualityId: 2
    },
    {
        name: 'Aceite',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por frasco. Cantidad en frascos. Apto tanto para músculos como para faroles.',
        shopTypeId: 17,
        merchantQualityId: 2
    },
    {
        name: 'Jabón',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 17,
        merchantQualityId: 2
    },
    {
        name: 'Tatuaje mundano regular',
        price: '5 gp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Figuras semicomplejas; no mayor de 1/2 pie cuadrado.',
        shopTypeId: 17,
        merchantQualityId: 2
    },
    {
        name: 'Suministros de tatuador',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Herramientas artesanales para tatuadores; tintas, agujas, tela, etc.',
        shopTypeId: 17,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Tatuaje barrera pequeño',
        price: '500 gp',
        quantityFormula: '3',
        source: 'TCE 122',
        notes: 'Cantidad en usos diarios. Otorga una CA igual a 12 + tu modificador de Destreza.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Suministros de calígrafo',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Piedra de limpieza',
        price: '100 gp',
        quantityFormula: '1',
        source: 'ERLW 276',
        notes: 'Solo 1, para siempre. Usar una acción mientras se toca; limpia la suciedad de ti.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tinta luminiscente',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por botella. Cantidad en botellas. Brilla tenuemente de forma indefinida; puede verse en la oscuridad.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje del iluminador',
        price: '100 gp',
        quantityFormula: '3',
        source: 'TCE 129',
        notes: 'Cantidad en usos diarios. Puede escribir con el dedo, haciendo escritura invisible.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje de mascarada',
        price: '100 gp',
        quantityFormula: '3',
        source: 'TCE 131',
        notes: 'Cantidad en usos diarios. Cambia de forma; permite lanzar disfrazarse una vez al día.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Pintura facial de luna',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'GGR 180',
        notes: 'Cuando se aplica al rostro, cambia de color según el ánimo.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje sortílego, truco',
        price: '50 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un truco específico una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje sortílego, nivel 1',
        price: '50 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un conjuro específico de nivel 1 una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje complejo',
        price: '25 gp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Escenas con múltiples colores, figuras y diseños; no mayor de 1 pie cuadrado.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje de foco mágico',
        price: '100 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Cuenta como foco arcano, foco druídico o símbolo sagrado.',
        shopTypeId: 17,
        merchantQualityId: 3
    },
    {
        name: 'Tatuaje de retirada mundano',
        price: '50 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Elimina mágicamente hasta 1 pie cuadrado de tatuaje mundano.',
        shopTypeId: 17,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Tatuaje barrera mediano',
        price: '5,000 gp',
        quantityFormula: '3',
        source: 'TCE 122',
        notes: 'Cantidad en usos diarios. Otorga una CA igual a 15 + tu modificador de Destreza, máximo +2.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tela, lino',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas. Tela blanca o beige adecuada para vendajes.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje de agarre enroscado',
        price: '500 gp',
        quantityFormula: '3',
        source: 'TCE 123',
        notes: 'Cantidad en usos diarios. Zarcillos serpentinos que agarran a una criatura.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje de garra sobrenatural',
        price: '500 gp',
        quantityFormula: '3',
        source: 'TCE 126',
        notes: 'Cantidad en usos diarios. Potencia los golpes sin armas y los ataques con armas.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje de ola etérea',
        price: '500 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Acción: lanza invisibilidad sobre ti una vez al día.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje de paso fantasmal',
        price: '500 gp',
        quantityFormula: '3',
        source: 'TCE 128',
        notes: 'Cantidad en usos diarios. Permite volverse incorpóreo tres veces al día.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje de memorias',
        price: '500 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Otorga velocidad de nado de 60 pies y permite hablar acuano.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje sortílego, nivel 2',
        price: '250 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un conjuro específico de nivel 2 una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje sortílego, nivel 3',
        price: '250 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un conjuro específico de nivel 3 una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje animado',
        price: '100 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Las imágenes se mueven por sí mismas; no mayor de 1 pie cuadrado.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Tatuaje artístico mundano',
        price: '125 gp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Tatuaje magnífico, una verdadera obra de arte; no mayor de 2 pies cuadrados.',
        shopTypeId: 17,
        merchantQualityId: 4
    },
    {
        name: 'Retirada mágica de tatuaje',
        price: '250 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Elimina mágicamente un único tatuaje mágico.',
        shopTypeId: 17,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Tatuaje absorbente, cualquiera',
        price: '50,000 gp',
        quantityFormula: '3',
        source: 'TCE 119',
        notes: 'Cantidad en usos diarios. Absorbe daño de un tipo elegido una vez al día.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje barrera grande',
        price: '50,000 gp',
        quantityFormula: '3',
        source: 'TCE 122',
        notes: 'Cantidad en usos diarios. Otorga una CA de 18.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje de furia de sangre',
        price: '500,000 gp',
        quantityFormula: '1',
        source: 'TCE 122',
        notes: 'Solo 1, para siempre. Otorga crítico con 19–20, daño adicional y ataques de reacción.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje de montaña eterna',
        price: '5,000 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Acción: lanza piel pétrea sobre ti una vez al día.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje de marca infernal',
        price: '5,000 gp',
        quantityFormula: '3',
        source: '—',
        notes: 'Cantidad en usos diarios. Ritual de 1 hora: invoca un im diablillo que te obedece; solo uno a la vez.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje de joya',
        price: '5,000 gp',
        quantityFormula: '3',
        source: 'TCE 129',
        notes: 'Cantidad en usos diarios. Resiste daño necrótico; otorga beneficios de custodia contra la muerte una vez al día.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Piel de bronce fundido, cualquiera',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'MOT 197',
        notes: 'Solo 1, para siempre. Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Pigmentos maravillosos de Nolzur',
        price: '25,000 gp',
        quantityFormula: '1',
        source: 'DMG 183',
        notes: 'Solo 1 juego, para siempre. Crea pinturas que se vuelven reales.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Aceite de etereidad',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 183',
        notes: 'Otorga los efectos del conjuro etereidad.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje de marca sombría',
        price: '50,000 gp',
        quantityFormula: '3',
        source: 'TCE 134',
        notes: 'Cantidad en usos diarios. Ventaja en Sigilo; reduce daño a la mitad usando una reacción.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje sortílego, nivel 4',
        price: '2,500 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un conjuro específico de nivel 4 una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje sortílego, nivel 5',
        price: '2,500 gp',
        quantityFormula: '3',
        source: 'TCE 135',
        notes: 'Cantidad en usos diarios. Lanza un conjuro específico de nivel 5 una vez, luego desaparece.',
        shopTypeId: 17,
        merchantQualityId: 5
    },
    {
        name: 'Tatuaje obra maestra mundano',
        price: '600 gp',
        quantityFormula: '1d10 x 100',
        source: '—',
        notes: 'Disponibilidad original: ilimitada. Normalizado para generación automática. Único, con detalle y precisión imposibles; puede cubrir todo el cuerpo.',
        shopTypeId: 17,
        merchantQualityId: 5
    }
];

module.exports = tattoosItems;