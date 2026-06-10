const booksAndMapsItems = [
  // Atroz
    {
        name: 'Libro, desvaríos lunáticos',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Lleno de garabatos enloquecidos, casi imposible de descifrar.',
        shopTypeId: 3,
        merchantQualityId: 1
    },
    {
        name: 'Mapa del tesoro, falso',
        price: '1 sp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Una prueba de Investigación o Historia CD 10 revela que es falso.',
        shopTypeId: 3,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Libro, gramática',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Parece sofisticado, pero en la práctica es inútil.',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Libro, matemáticas',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Enseña desde los fundamentos básicos hasta cálculo.',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Libro, diario gastado',
        price: '25 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'El diario personal de alguien; ¿quizá sea importante?',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Calendario',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Contiene todos los días y meses de un único año.',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Tinta',
        price: '10 gp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por onza. Cantidad en onzas.',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Pluma de tinta',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Papel',
        price: '2 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 3,
        merchantQualityId: 2
    },
    {
        name: 'Pergamino',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 3,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Libro, almanaque',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Lleno de predicciones importantes para granjeros o astrólogos.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, guía local',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Trata sobre una ciudad o localización cercana.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, en blanco',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Apto para escribir o dibujar; no puede contener conjuros.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, elaboración de cerveza',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Explica los fundamentos para crear tu propio alcohol.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, cocina',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Repleto de recetas deliciosas.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, diccionario',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Define todas las palabras conocidas por su autor.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, historia',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Detalla la historia comúnmente conocida de una región.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, código legal',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Una recopilación completa de las leyes de una región.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, flora local',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Imágenes y descripciones de plantas locales comunes.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, mampostería',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Textos sencillos sobre técnicas básicas de construcción.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, poesía',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Poemas sugerentes y llenos de emociones complejas.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, romance subido de tono',
        price: '25 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Una historia apasionante y picante de romance ardiente.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, teología',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Un texto sagrado común de una fe popular o pagana.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Libro, tesauro',
        price: '25 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Demuestra tu intelecto con este folio de sinónimos.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para mapa o pergamino',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Mapa, preciso',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Representa una zona importante situada a 7 días de viaje o menos.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Carta de navegación',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Una carta estelar que muestra cómo navegar por el cielo nocturno.',
        shopTypeId: 3,
        merchantQualityId: 3
    },
    {
        name: 'Periódico',
        price: '2 sp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Noticias semanales impresas de una ciudad cercana.',
        shopTypeId: 3,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Atlas del mundo conocido',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Muy preciso, aunque no excesivamente detallado.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, alquimia',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Contiene escritos alquímicos; algunos están en clave.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, fabricación de armaduras',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Enseña los fundamentos de la construcción de armaduras.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, astrología',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Una colección completa de signos estelares y sus significados.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, bestiario',
        price: '125 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Trata sobre un tipo concreto de criatura que puede encontrarse cerca.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, biografía',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Detalla la vida de una figura histórica importante.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, clásico',
        price: '100 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Un libro que todos quieren haber leído, pero nadie ha leído.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, diario de viaje exótico',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Relata viajes reales a una tierra lejana, con muchos detalles.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, heráldica',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Describe todos los linajes familiares nobles, con símbolos.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, herboristería',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Describe la práctica de recolectar y procesar hierbas.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, herético',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Un texto impío que reniega de una teología importante.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, trucos de magia',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Enseña trucos no arcanos de prestidigitación.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, medicina',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Contiene curas mundanas para muchas dolencias comunes.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, memorias',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Una figura histórica reflexiona sobre su vida y sus pruebas.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, mitología',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Relatos de dioses, héroes y otras figuras míticas.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, novela',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Uno de varios volúmenes de una aclamada serie de ficción de género.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro de oraciones',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Lleno de cánticos rituales y plegarias litúrgicas.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Libro, partituras',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Contiene varias canciones populares para múltiples instrumentos.',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Suministros de calígrafo',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 3,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de cartógrafo',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 3,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Libro, fauna exótica',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Tiene imágenes y descripciones de muchos animales extraños.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Libro, flora exótica',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Detalla muchas hierbas y plantas raras y misteriosas.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Libro, saber prohibido',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Contiene textos misteriosos por los que ciertos cultistas matarían.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Libro, diario de viaje planar',
        price: '1,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Detalles íntimos de una localización planar, por Beatrix Trifling.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Manuscrito engañoso',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo para magos; contiene conjuros, pero parece una novela romántica.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Mapa, automático',
        price: '500 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Mapea mágicamente y de forma constante todo en un radio de 5 millas.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Mapa, planar',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Representa con precisión una localización planar significativa.',
        shopTypeId: 3,
        merchantQualityId: 5
    },
    {
        name: 'Mapa del tesoro, real',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. El tesoro está a 7 días de viaje o menos; vale 1d10 x 500 gp.',
        shopTypeId: 3,
        merchantQualityId: 5
    }
];

module.exports = booksAndMapsItems;