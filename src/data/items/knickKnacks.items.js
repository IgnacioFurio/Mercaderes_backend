const knickKnacksItems = [
    // Atroz
    {
        name: 'Pértiga de 10 pies',
        price: '5 cp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 1
    },
    {
        name: 'Manta',
        price: '5 sp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Polea y aparejo',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Cubo',
        price: '5 cp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Vela',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB 150',
        notes: 'Viene en varios colores.',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Tiza',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Precio por pieza. Cantidad en piezas. Viene en varios colores.',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Juego de dados',
        price: '1 sp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Frasco o jarra',
        price: '2 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Hecho de peltre o madera tratada.',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Tinta, botella',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por onza. Cantidad en onzas.',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Pluma de tinta',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Papel',
        price: '2 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Pipa de fumar',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Juego de naipes',
        price: '5 sp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Silbato de señales',
        price: '5 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Tienda de campaña para dos personas',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Yesquero',
        price: '5 sp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },
    {
        name: 'Cera de sellado',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Amuleto',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Símbolo sagrado; un collar con un símbolo de fe.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Rodamientos de bolas',
        price: '1 gp',
        quantityFormula: '1d4 x 2000',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Bocado y brida',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Carro',
        price: '15 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para mapa o pergamino',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Vacío.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Cadena',
        price: '5 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: 'Precio por 10 pies. Cantidad en tramos de 10 pies.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Útiles de escalada',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Crampones',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'IDRF 20',
        notes: 'Placas metálicas con pinchos para botas; impiden resbalar sobre hielo.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Garfio de escalada',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Reloj de arena',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Lámpara',
        price: '5 sp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Linterna ojo de buey',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Linterna con capucha',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Candado',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Llave incluida.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Cuerda de cáñamo',
        price: '1 gp',
        quantityFormula: '1d4 x 50',
        source: 'PHB 150',
        notes: 'Precio por 50 pies. Cantidad en tramos de 50 pies.',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Balanza de mercader',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 3
    },
    {
        name: 'Raquetas de nieve',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'IDRF 20',
        notes: 'Precio por par. Cantidad en pares. Evitan que quien las lleva se hunda en nieve profunda.',
        shopTypeId: 9,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Herramientas de artesano',
        price: 'Variable',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: 'Seleccionadas aleatoriamente; los precios son los indicados en el PHB.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Paracaídas de mochila',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'WDH 47',
        notes: 'Puede llevar a salvo una caída de 60 pies; 10 minutos para volver a guardarlo.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Campana',
        price: '1 gp',
        quantityFormula: '1d4+1',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Libro en blanco',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Apto para escribir o dibujar; no puede contener conjuros.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Abrojos',
        price: '1 gp',
        quantityFormula: '1d4 x 40',
        source: 'PHB 150',
        notes: 'Precio por bolsa de 20. Cantidad en bolsas de 20.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Vela de las profundidades',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 136',
        notes: 'Puede arder bajo el agua.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Cofre de preservación',
        price: '100 gp',
        quantityFormula: '1',
        source: 'WDMM 139',
        notes: 'Solo 1, para siempre. Los objetos dentro no envejecen ni se descomponen; contiene 3,75 pies cúbicos.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Piedra de limpieza',
        price: '100 gp',
        quantityFormula: '1',
        source: 'ERLW 276',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Dados de hueso grabados',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 134',
        notes: 'Un juego de dados con muchas cantidades distintas de caras.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Juego de dragonchess',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Trompetilla para sordera',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 137',
        notes: 'Sostenida contra la oreja; suprime la condición ensordecido.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Garfio de escalada',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de alimañas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 137',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Anzuelo de deleite del pescador',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'IDRF 314',
        notes: 'Solo 1, para siempre. Atrapa una de cuatro variedades de pez semimágico.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Cuerno de alarma silenciosa',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 137',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Linterna de revelación',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 179',
        notes: 'Solo 1, para siempre. Revela criaturas y objetos invisibles.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Vara inamovible',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 175',
        notes: 'Al activarse, permanece en su lugar y soporta 8.000 libras.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Lupa',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Grilletes',
        price: '2 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 150',
        notes: 'Llave incluida.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Llave misteriosa',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Tiene un 5% de probabilidad de abrir cualquier cerradura y luego desaparece.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Orbe de dirección',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 138',
        notes: 'Solo 1, para siempre. Acción: aprende qué dirección es el norte.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Pipa de monstruos de humo',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 138',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Pértiga plegable',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Puede contraerse a 1 pie o expandirse hasta 10 pies.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Bote de remos',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 119',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Piedra de buena suerte',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 205',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Muñeca parlante',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 139',
        notes: 'Solo 1, para siempre. Puede recibir instrucciones para decir hasta 6 frases cortas.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Mazo de tarokka',
        price: '10 gp',
        quantityFormula: '1d4-1',
        source: 'CS 243',
        notes: 'Usado para leer el futuro; solo un vistani puede hacerlo de verdad.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Juego de Three-Dragon Ante',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Lona recogelluvia',
        price: '1 gp',
        quantityFormula: '1d4-1',
        source: 'TA 32',
        notes: 'Recoge 2 galones de agua por pulgada de lluvia; contiene 8 galones.',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Catalejo',
        price: '1,000 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 9,
        merchantQualityId: 4
    },
    {
        name: 'Zancos ajustables',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'WDH 47',
        notes: '1 minuto para ponérselos o quitárselos; aumentan la altura en 2,5 pies.',
        shopTypeId: 9,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Juego de mesa de jade',
        price: '7,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Un juego antiguo con piezas de oro macizo; reglas incluidas.',
        shopTypeId: 9,
        merchantQualityId: 5
    },
    {
        name: 'Tapón de botella enjoyado',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Decorado con pan de oro y amatistas; para una persona noble.',
        shopTypeId: 9,
        merchantQualityId: 5
    },
    {
        name: 'Pegamento soberano',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG 200',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 5
    },
    {
        name: 'Disolvente universal',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG 200',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 9,
        merchantQualityId: 5
    }
];

module.exports = knickKnacksItems;