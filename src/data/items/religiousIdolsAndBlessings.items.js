const religiousIdolsAndBlessingsItems = [
    // Atroz
    {
        name: 'Caja de limosnas',
        price: '5 cp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Caja para recoger ofrendas monetarias.',
        shopTypeId: 14,
        merchantQualityId: 1
    },
    {
        name: 'Vela',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Viene en varios colores.',
        shopTypeId: 14,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Amuleto',
        price: '5 gp',
        quantityFormula: '1d4 x 7',
        source: 'PHB',
        notes: 'Símbolo sagrado; un collar con un símbolo de fe.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Libro sagrado',
        price: '5 gp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'De una entre varias religiones.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Tiza',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por pieza. Cantidad en piezas. Viene en varios colores.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Daga ritual',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Tiene un diseño extrañamente curvado.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Emblema',
        price: '5 gp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Símbolo sagrado; el rostro o símbolo de una deidad.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Incienso',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por bloque. Cantidad en bloques. Espeso, almizclado y penetrante.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Pergamino',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Relicario',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Símbolo sagrado; una pequeña caja que contiene un fragmento de reliquia.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Conjuro: ceremonia',
        price: '60 gp',
        quantityFormula: '3',
        source: 'XGE',
        notes: 'Cantidad en conjuros diarios. Realiza un rito sagrado: expiación, bendecir agua, mayoría de edad, dedicación, funeral o boda.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Conjuro: curar heridas',
        price: '10 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Lanzado a nivel 1; cura 1d8 + 3 puntos de golpe.',
        shopTypeId: 14,
        merchantQualityId: 2
    },
    {
        name: 'Conjuro: identificar',
        price: '20 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Revela las propiedades de un objeto mágico.',
        shopTypeId: 14,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Incensario',
        price: '55 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Recipiente dorado para quemar incienso.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Ropa, túnicas',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Sencillas, lisas y limpias, con muchos bolsillos.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Vestiduras',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Un atuendo ceremonial para un miembro de una fe específica.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Kit de sanador',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Agua bendita',
        price: '25 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Lámpara',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Aceite',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Bastón',
        price: '2 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: ayuda',
        price: '40 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Lanzado a nivel 2; hasta 3 criaturas aumentan su máximo de puntos de golpe en 5 durante 8 horas.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: disipar magia',
        price: '90 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Lanzado a nivel 3; termina un conjuro o efecto mágico.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: restablecimiento menor',
        price: '40 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Cura ceguera, sordera, parálisis o envenenamiento.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: plegaria de curación',
        price: '40 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Lanzado a nivel 2; cura hasta 6 criaturas por 2d8 + 3 puntos de golpe.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Tótem',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Foco druídico; tallado con la imagen de un buen espíritu.',
        shopTypeId: 14,
        merchantQualityId: 3
    },
    {
        name: 'Varita de tejo',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Foco druídico; asociada con la naturaleza, la vida eterna.',
        shopTypeId: 14,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Amuleto del devoto +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo para clérigos o paladines; permite usar Canalizar Divinidad sin gastar carga.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Balanza de la armonía',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TYP',
        notes: 'Solo 1, para siempre. Balanza capaz de detectar el bien y el mal como ritual.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Piedra de limpieza',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'ERLW',
        notes: '',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Ropa, paño de oro',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Adecuada para un sumo sacerdote o una persona de posición distinguida.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Linterna siemprebrillante',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'ERLW',
        notes: 'En Eberron usa una llama continua; fuera de Eberron, funciona como una llama continua.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Emblema guardián',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo clérigo o paladín; niega golpes críticos.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Ungüento de Keoghtom',
        price: '250 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: '',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Linterna de revelación',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Revela criaturas y objetos invisibles.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Periapto de salud',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Concede inmunidad a la enfermedad.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Periapto de cerrar heridas',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Estabiliza al morir y duplica la curación por dados de golpe.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Santuario pequeño',
        price: '8 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Cualquier espacio donde dejar ofrendas o hacer plegarias rápidas.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: guarda contra la muerte',
        price: '160 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Si cae a 0 PG, baja a 1 PG en su lugar.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: adivinación',
        price: '210 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Otorga guía sobre un curso de acción.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: levantar maldición',
        price: '90 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Levanta una maldición o sintonización con un objeto maldito.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: hablar con los muertos',
        price: '90 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Permite hablar con un cadáver no muerto.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Bastón de la pitón',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Estatuilla de metal o piedra',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Una pequeña figura de un dios o persona, tallada con hermoso detalle.',
        shopTypeId: 14,
        merchantQualityId: 4
    },
    {
        name: 'Jarra de sobriedad',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 14,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Vela de invocación',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Incensario del devoto',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo clérigo o paladín; mayal, bonificador al daño y curación.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Maza de disrupción',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Collar de cuentas de plegaria',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Tiene 1d4 + 2 cuentas aleatorias que lanzan conjuros.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Periapto de prueba contra veneno',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Concede inmunidad al veneno, al daño de veneno y a la condición envenenado.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Versos protectores',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo para magos; contiene conjuros y añade puntos de golpe temporales.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Conjuro: restablecimiento mayor',
        price: '450 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Reduce agotamiento, elimina encantamiento, petrificación, maldición o reducción de característica/puntos de golpe.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Conjuro: sacralizar',
        price: '2,250 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Santifica una zona con efectos adicionales.',
        shopTypeId: 14,
        merchantQualityId: 5
    },
    {
        name: 'Conjuro: alzar a los muertos',
        price: '1,250 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Devuelve la vida a un cadáver.',
        shopTypeId: 14,
        merchantQualityId: 5
    }
];

module.exports = religiousIdolsAndBlessingsItems;