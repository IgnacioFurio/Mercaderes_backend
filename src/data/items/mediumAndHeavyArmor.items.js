const mediumAndHeavyArmorItems = [
    // Atroz
    {
        name: 'Cubo ponible',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Incluye correas; no incluye parte superior ni inferior.',
        shopTypeId: 12,
        merchantQualityId: 1
    },
    {
        name: 'Cubo',
        price: '5 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Cualquier cosa es armadura si eres lo bastante insensato.',
        shopTypeId: 12,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Lingote de cobre',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por barra de 1 libra. Cantidad en barras de 1 libra.',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Lingote de hierro',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por barra de 1 libra. Cantidad en barras de 1 libra.',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Cota de malla',
        price: '75 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Armadura pesada; CA 16; req. Fue 13; desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Camisote de malla',
        price: '50 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Armadura intermedia; CA 13 + mod. DES (máx. 2).',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Cota de anillas',
        price: '30 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Armadura pesada; CA 14; desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Cota de escamas',
        price: '50 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Armadura intermedia; CA 14 + mod. DES (máx. 2); desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 2
    },
    {
        name: 'Escudo',
        price: '10 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Hecho de bronce o acero; +2 a la CA.',
        shopTypeId: 12,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Yunque',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Pesa 275 lb.',
        shopTypeId: 12,
        merchantQualityId: 3
    },
    {
        name: 'Barda, armadura intermedia o pesada',
        price: '0 gp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Precio variable. El precio es 4 veces el coste de una armadura similar para humanoides. Pendiente de lógica específica.',
        shopTypeId: 12,
        merchantQualityId: 3
    },
    {
        name: 'Coraza',
        price: '400 gp',
        quantityFormula: '1d4+4',
        source: 'PHB',
        notes: 'Armadura intermedia; CA 14 + mod. DES (máx. 2).',
        shopTypeId: 12,
        merchantQualityId: 3
    },
    {
        name: 'Yelmo con cuernos',
        price: '25 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Aunque impone bastante, cuesta pasar por las puertas.',
        shopTypeId: 12,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de herrero',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 12,
        merchantQualityId: 3
    },
    {
        name: 'Armadura de pinchos',
        price: '75 gp',
        quantityFormula: '1d4+1',
        source: 'SCAG',
        notes: 'Armadura intermedia; CA 14 + mod. DES (máx. 2); desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Armadura laminada',
        price: '200 gp',
        quantityFormula: '1d4+4',
        source: 'PHB',
        notes: 'Armadura pesada; CA 17; req. Fue 15; desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de adamantina, cualquiera',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura +1, intermedia o pesada',
        price: '5,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura reluciente, intermedia o pesada',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Lingote de plata',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Precio por barra de 1 libra. Cantidad en barras de 1 libra.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura desprendible, intermedia o pesada',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Guardadragones',
        price: '900 gp',
        quantityFormula: '1',
        source: 'LMP',
        notes: 'Solo 1, para siempre. Armadura intermedia; CA 14 + mod. DES (máx. 2); ventaja en salvaciones contra armas de aliento de dragones.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Yelmo del terror',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Cuando lo llevas, tus ojos brillan de rojo.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Media armadura',
        price: '750 gp',
        quantityFormula: '1d4+3',
        source: 'PHB',
        notes: 'Armadura intermedia; CA 15 + mod. DES (máx. 2); desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Yelmo alado',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Gallardo y extravagante.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura del marinero, intermedia o pesada',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de mithral, cualquiera',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de placas',
        price: '1,500 gp',
        quantityFormula: '1d4+2',
        source: 'PHB',
        notes: 'Armadura pesada; CA 18; req. Fue 15; desventaja en Sigilo.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Escudo +1',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Hecho de metal encantado; +3 a la CA.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Escudo de expresión',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 4
    },
    {
        name: 'Armadura humeante, intermedia o pesada',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Escudo atrapaflechas',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Armadura +2, intermedia o pesada',
        price: '50,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Armadura de resistencia, intermedia o pesada',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. De una variedad aleatoria; añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Lingote de oro',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Precio por barra de 1 libra. Cantidad en barras de 1 libra.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Lingote de platino',
        price: '500 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Precio por barra de 1 libra. Cantidad en barras de 1 libra.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Armadura enana',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Cota élfica',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Guanteletes de furia llameante',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'BGDIA',
        notes: 'Solo 1 juego, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Yelmo de teletransporte',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Piel de bronce fundido, cualquiera',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'MOT',
        notes: 'Solo 1, para siempre. Añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 12,
        merchantQualityId: 5
    },
    {
        name: 'Escudo +2',
        price: '5,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Hecho de metal encantado; +4 a la CA.',
        shopTypeId: 12,
        merchantQualityId: 5
    }
];

module.exports = mediumAndHeavyArmorItems;