const weaponsItems = [
    // Atroz
    {
        name: 'Garrote',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d4 contundente; ligera.',
        shopTypeId: 21,
        merchantQualityId: 1
    },
    {
        name: 'Gran garrote',
        price: '2 sp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d8 contundente; a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Flecha',
        price: '1 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en flechas.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Cerbatana',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1 perforante; recarga, a distancia 25/100.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Virote de ballesta',
        price: '1 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en virotes.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Bala de honda',
        price: '4 cp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en balas.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Ballesta ligera',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 perforante; recarga, a dos manos, a distancia 80/320.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Daga',
        price: '2 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: '1d4 perforante; sutil, ligera, arrojadiza 20/60.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Dardo',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: '1d4 perforante; sutil, a distancia/arrojadiza 20/60.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Martillo ligero',
        price: '2 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d4 contundente; ligera, arrojadiza 20/60.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Hacha de mano',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d6 cortante; ligera, arrojadiza 20/60.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Jabalina',
        price: '5 sp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: '1d6 perforante; arrojadiza 30/120.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Maza',
        price: '5 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: '1d6 contundente.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Agujas de cerbatana',
        price: '4 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en agujas.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Bastón',
        price: '2 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d6 contundente; versátil 1d8.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Arco corto',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d6 perforante; a distancia 80/320, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Hoz',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d4 cortante; ligera.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Honda',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d4 contundente; a distancia 30/120.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Lanza',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '1d6 perforante; arrojadiza 20/60, versátil 1d8.',
        shopTypeId: 21,
        merchantQualityId: 2
    },
    {
        name: 'Piedra de afilar',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: '',
        shopTypeId: 21,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Hacha de batalla',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 cortante; versátil 1d10.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para virotes de ballesta',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Contiene hasta 20 virotes.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Mayal',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 contundente.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Guja',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d10 cortante; pesada, alcance, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Gran hacha',
        price: '30 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d12 cortante; pesada, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Mandoble',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '2d6 cortante; pesada, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Alabarda',
        price: '20 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d10 cortante; pesada, alcance, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Lanza de caballería',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d12 perforante; alcance, especial.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Arco largo',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 perforante; a distancia 150/600, pesada, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Espada larga',
        price: '15 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d8 cortante; versátil 1d10.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Martillo de guerra',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 contundente; pesada, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Lucero del alba',
        price: '15 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d8 perforante.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Red',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Especial, arrojadiza 5/15.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Pica',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d10 perforante; pesada, alcance, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Carcaj',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Contiene hasta 20 flechas.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Estoque',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d8 perforante; sutil.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Cimitarra',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '1d6 cortante; sutil, ligera.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Vaina',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Funda para una daga o espada.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Espada corta',
        price: '10 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: '1d6 perforante; sutil, ligera.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de herrero',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Tridente',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d6 perforante; arrojadiza 20/60, versátil 1d8.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Pico de guerra',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d8 perforante.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Martillo de guerra',
        price: '15 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d8 contundente; versátil 1d10.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Látigo',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d4 cortante; sutil, alcance.',
        shopTypeId: 21,
        merchantQualityId: 3
    },
    {
        name: 'Yklwa',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'TA',
        notes: '1d8 perforante; arrojadiza 10/30.',
        shopTypeId: 21,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Munición +1',
        price: '50 gp',
        quantityFormula: '1d4 x 10',
        source: 'DMG',
        notes: 'Precio por unidad. Cantidad en unidades. Puede ser cualquier pieza de munición.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Chakram',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'MM',
        notes: '1d6 cortante; sutil, ligera, a distancia/arrojadiza 30/120.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Ballesta de mano',
        price: '75 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d6 perforante; ligera, recarga, a distancia 30/120.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Ballesta pesada',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d10 perforante; pesada, recarga, a dos manos, a distancia 100/400.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Ballesta ligera, repetición',
        price: '150 gp',
        quantityFormula: '1d4-2',
        source: 'OA',
        notes: '1d8 perforante; a dos manos, a distancia 40/160; tiene 6 disparos y puede recargarse con una acción.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Gythka',
        price: '40 gp',
        quantityFormula: '1d4-1',
        source: 'MM',
        notes: '1d8 cortante; alcance, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Jabalina de relámpago',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Arco largo sobredimensionado',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'WDH',
        notes: '2d6 perforante; pesada, a distancia 150/600, a dos manos; requiere Fue 18; el ataque y el daño usan Fue en lugar de Des.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Espada tocada por la luna, cualquiera',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE',
        notes: 'Emite luz brillante durante 15 pies y luz tenue otros 15 pies. Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Cimitarra de doble hoja',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'ERLW',
        notes: '2d4 cortante; especial, a dos manos.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Espada corta con gancho',
        price: '125 gp',
        quantityFormula: '1d4-1',
        source: 'OA',
        notes: '1d4 perforante; ligera. Puede elegir no hacer daño y, en su lugar, dar ventaja al siguiente ataque de un aliado contra ese objetivo. CD 8 + Fue o Des + competencia.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Bumerán de tormenta',
        price: '500 gp',
        quantityFormula: '1',
        source: 'PA',
        notes: 'Solo 1, para siempre. En vez de recargas, usa un descanso corto.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Bastón de veterano',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Acción adicional: se transforma en una espada larga mundana.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Munición golpeadora',
        price: '10 gp',
        quantityFormula: '1d4 x 10',
        source: 'XGE',
        notes: 'Precio por unidad. Cantidad en unidades. Una criatura golpeada debe superar una salvación de Fuerza CD 10 o quedar derribada.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Arma +1, cualquiera',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 4
    },
    {
        name: 'Arma de aviso, cualquiera',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Munición +2',
        price: '500 gp',
        quantityFormula: '1d4 x 10',
        source: 'DMG',
        notes: 'Precio por unidad. Cantidad en unidades. Puede ser cualquier pieza de munición.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Lengua flamígera, cualquiera',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Marca de escarcha, cualquiera',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Jurapactos',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Espada de agudeza, cualquiera',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Honda de dos pájaros',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'MOT',
        notes: 'Solo 1, para siempre. Los disparos pueden rebotar entre objetivos.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Arma viciosa, cualquiera',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 5
    },
    {
        name: 'Arma +2',
        price: '5,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Añade el coste base del arma no mágica al precio del objeto.',
        shopTypeId: 21,
        merchantQualityId: 5
    }
];

module.exports = weaponsItems;