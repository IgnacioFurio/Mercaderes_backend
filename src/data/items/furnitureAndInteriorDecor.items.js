const furnitureAndInteriorDecorItems = [
    // Atroz
    {
        name: 'Barril pequeño',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'DMG',
        notes: '0,75 pies de ancho y 1 pie de alto; contiene 20 galones o 2 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 1
    },
    {
        name: 'Barril',
        price: '2 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '1,25 pies de ancho y 2,5 pies de alto; contiene 40 galones o 4 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 1
    },
    {
        name: 'Cesta',
        price: '4 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '1 pie de ancho y 1 pie de alto; contiene 40 libras o 2 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 1
    },
    {
        name: 'Caja mediana',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'DMG',
        notes: '2 pies por 2 pies y 1 pie de alto; contiene 80 libras o 4 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 1
    },
    {
        name: 'Estante',
        price: '7 sp',
        quantityFormula: '1d4 x 4',
        source: 'DMG',
        notes: '4 pies por 0,5 pies; contiene aproximadamente 20 libros u otros objetos.',
        shopTypeId: 6,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Cama individual',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '6 pies por 3 pies y 2,5 pies de alto; duerme 1 criatura Mediana.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Estantería',
        price: '2 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: '5 pies por 1 pie y 4 pies de alto; contiene aproximadamente 60 libros.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Caja grande',
        price: '7 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG',
        notes: '3 pies por 3 pies y 3 pies de alto; contiene 675 libras o 27 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Barril firkin',
        price: '5 sp',
        quantityFormula: '1d4 x 4',
        source: 'DMG',
        notes: '0,5 pies de ancho y 1,33 pies de alto; contiene 10 galones o 1 pie cúbico.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Silla sencilla',
        price: '3 sp',
        quantityFormula: '1d4 x 4',
        source: 'DMG',
        notes: 'Hecha de madera dura; asiento para 1 criatura Mediana.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Cofre mediano',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '6 pies por 2 pies y 1 pie de alto; contiene 300 libras o 12 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Brasero de metal',
        price: '1 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG',
        notes: '0,5 pies de ancho; quema madera, carbón, aceite o incienso.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Caseta mediana para perro',
        price: '3 gp',
        quantityFormula: '1d4-2',
        source: '—',
        notes: 'Capaz de albergar a un perro o a una criatura Mediana.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Horno de carbón',
        price: '8 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Puede quemar 1 libra de carbón al día para generar calor.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Alfombra pequeña',
        price: '1 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG',
        notes: '3 pies por 5 pies; colorida, con un patrón agradable.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Taburete',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '1 pie de ancho y 3/4 pies de alto; asiento para 1 criatura Mediana.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Mesa pequeña',
        price: '3 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '3 pies por 5 pies y 2,5 pies de alto.',
        shopTypeId: 6,
        merchantQualityId: 2
    },
    {
        name: 'Banco de trabajo',
        price: '7 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '3 pies por 6 pies y 3 pies de alto; incluye soportes para colgar herramientas.',
        shopTypeId: 6,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Armario ropero',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '4 pies por 1,5 pies y 6 pies de alto; contiene 900 libras o 36 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Soporte para armadura',
        price: '5 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Fabricado para colgar una armadura completa.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Cama doble',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '6 pies por 5 pies y 2,5 pies de alto; duermen 2 criaturas Medianas.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Literas',
        price: '8 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '6 pies por 3 pies y 6 pies de alto; duermen 2 criaturas Medianas.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Brasero de metal',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '1,5 pies de ancho; quema madera, carbón, aceite o incienso.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Banco de madera',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '10 pies por 1 pie y 1,5 pies de alto; asiento para 5 criaturas Medianas.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Gabinete o alacena',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '2 pies por 1 pie y 3 pies de alto; contiene 150 libras o 6 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Barril hogshead',
        price: '4 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '1,5 pies de ancho y 3 pies de alto; contiene 65 galones o 6 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Barril tierce',
        price: '2 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG',
        notes: '1,25 pies de ancho y 2,5 pies de alto; contiene 40 galones o 4 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Silla acolchada',
        price: '1 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG',
        notes: 'Algo cómoda; asiento para 1 criatura Mediana.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Cofre grande',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '6 pies por 3 pies y 2 pies de alto; contiene 900 libras o 36 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Jarra o cántaro',
        price: '2 cp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Contiene 1 galón.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Cuadro mediano',
        price: '10 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Ejemplo: representa a una gnoma y su abeja gigante mascota.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Colcha',
        price: '8 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecha por encargo. 8 pies por 6 pies; acogedora y colorida.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Alfombra mediana',
        price: '6 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '5 pies por 10 pies; resulta cálida, cómoda y acogedora.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Biombo',
        price: '5 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Hecho de papel y madera; da privacidad, pero no demasiada.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Santuario pequeño',
        price: '8 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Un pequeño espacio para dejar ofrendas o realizar plegarias rápidas.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Estatuilla de metal o piedra',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Una pequeña figura de un dios o persona, tallada con hermoso detalle.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Mesa grande',
        price: '6 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '4 pies por 10 pies y 2,5 pies de alto.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Mesa redonda',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '15 pies de ancho y 2,5 pies de alto.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Colgador de armas',
        price: '4 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Exhibe una o dos armas y/o un escudo en la pared.',
        shopTypeId: 6,
        merchantQualityId: 3
    },
    {
        name: 'Armero de pared',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Funcional, no hermoso; contiene hasta 5 armas.',
        shopTypeId: 6,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Altar grande',
        price: '20 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Contiene símbolos sagrados y espacio para rituales.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Estandarte o bandera',
        price: '30 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Hecho por encargo. 3 pies por 10 pies; incluye diseño personalizado.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Bañera ornamentada',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Ejemplo: acero trabajado con grifos con cabeza de dragón.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Cama con dosel',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '8 pies por 6 pies; rellena de plumón de oso lechuza.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Candelabro',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: '1 pie de alto; sostiene entre 3 y 5 velas.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Barril butt',
        price: '8 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '2 pies de ancho y 4 pies de alto; contiene 125 galones o 12 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Barril pipe',
        price: '6 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '1,75 pies de ancho y 3,5 pies de alto; contiene 105 galones o 10 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Sillón',
        price: '12 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'De cuero, bien acolchado y extremadamente cómodo.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Diván',
        price: '10 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '8 pies por 2,5 pies y 1,5 pies de alto; asiento para entre 1 y 3 criaturas Medianas.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Sofá',
        price: '18 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: '8 pies por 3 pies y 3,5 pies de alto; asiento para 3 criaturas Medianas.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Escritorio ornamentado',
        price: '15 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Ejemplo: enredaderas intrincadas talladas en madera lisa.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Fuente',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecha por encargo. 6 pies por 6 pies y 4 pies de alto; de mármol o material similar.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Fresco grande',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Ejemplo: la Ciudad de Latón, enmarcada por un mar de fuego.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Cojín bajo',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '1 pie por 1 pie y 1,5 pies de alto; ayuda a una criatura a sentarse con comodidad.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Lámpara mágica',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Se enciende y se apaga con dos palmadas.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Espejo',
        price: '75 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: '3 pies de ancho y 8 pies de alto; pese a todo, sigues siendo tú.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Mosaico grande',
        price: '600 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Hecho por encargo. Ejemplo: elementales de agua rompiendo contra una costa.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Cuadro enorme',
        price: '550 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Hecho por encargo. Ejemplo: la representación de un artista de la Guerra Sangrienta.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Cuadro grande',
        price: '50 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Ejemplo: una dragonborn cortesana y su consorte.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Pedestal de piedra',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '3 pies de alto; ayuda a exhibir un objeto, planta u obra de arte.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Alfombra grande',
        price: '12 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: '10 pies por 50 pies; realmente da unidad a la habitación.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Estatua de metal o piedra',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Hecha por encargo. Ejemplo: estatua de latón de la diosa Selûne.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Mesa larga',
        price: '14 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '6 pies por 25 pies y 2,5 pies de alto.',
        shopTypeId: 6,
        merchantQualityId: 4
    },
    {
        name: 'Tapiz',
        price: '250 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Ejemplo: aventureros frustrando un mal ancestral.',
        shopTypeId: 6,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Barril tun',
        price: '16 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: '3 pies de ancho y 6 pies de alto; contiene 250 galones o 25 pies cúbicos.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Trono',
        price: '750 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Magnífico, esculpido o tallado, con cojines lujosos.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Candelabro colgante enorme',
        price: '1,500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecho por encargo. Ejemplo: cristal astral entrelazado con mithral.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Caja de música de oro',
        price: '2,500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Reproduce 10 canciones; una obra maestra de arte y artesanía.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Espejo atrapavidas',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Cuadro antiguo, obra maestra',
        price: '2,500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Una obra de arte legendaria e histórica.',
        shopTypeId: 6,
        merchantQualityId: 5
    },
    {
        name: 'Estatua preciosa',
        price: '2,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Hecha por encargo. Ejemplo: un enorme dragón de adamantina.',
        shopTypeId: 6,
        merchantQualityId: 5
    }
];

module.exports = furnitureAndInteriorDecorItems;