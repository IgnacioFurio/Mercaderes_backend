const songsAndInstrumentsItems = [
    // Atroz
    {
        name: 'Partitura terrible',
        price: '1 cp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por copia. Cantidad en copias. Discordante; por algún motivo tiene un compás de 11/8.',
        shopTypeId: 15,
        merchantQualityId: 1
    },
    {
        name: 'Thelarr o silbato de caña',
        price: '1 cp',
        quantityFormula: '1d4 x 3',
        source: 'SCAG',
        notes: 'Instrumento; increíblemente simple, cortado de una sola caña.',
        shopTypeId: 15,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Campana',
        price: '1 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Tambor o tambor de mano',
        price: '6 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Instrumento; cuero sobre un armazón de madera.',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Cuerno o cuerno largo',
        price: '3 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Instrumento; bueno para tocar unas pocas notas muy fuertes.',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Tinta',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Precio por botella. Cantidad en botellas.',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Pluma de tinta',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Papel',
        price: '2 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Chirimía',
        price: '2 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Instrumento; viento madera largo y de lengüeta, con agujeros.',
        shopTypeId: 15,
        merchantQualityId: 2
    },
    {
        name: 'Partitura derivativa',
        price: '5 cp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por copia. Cantidad en copias. Tiene tachado el nombre de una canción popular y escrito otro encima.',
        shopTypeId: 15,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Gaita',
        price: '30 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Instrumento; una bolsa para aire con tubos sobresalientes.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Chalumeau',
        price: '15 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Instrumento; viento madera de lengüeta, diseño funcional.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Platillos',
        price: '20 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Precio por conjunto. Cantidad en conjuntos. Instrumento; conjunto de dos discos metálicos con correas.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Flauta o cuerno sonoro',
        price: '2 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Instrumento; viento madera sin lengüeta, de metal o madera.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Lira',
        price: '30 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Instrumento; pequeño, de mano y parecido a un arpa.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Flauta de pan o zampoña',
        price: '12 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: 'Instrumento; tubos de madera unidos de diferentes longitudes.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Partitura pegadiza',
        price: '5 sp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por copia. Cantidad en copias. Tarareas sin querer unos fragmentos familiares.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Cuerdas',
        price: '4 cp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. Buenas para encordar un instrumento de cuerda.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Timbal o tantan',
        price: '13 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Instrumento; aro de madera con discos metálicos.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Token',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: 'SCAG',
        notes: 'Instrumento; campanas favorecidas por culturas subterráneas.',
        shopTypeId: 15,
        merchantQualityId: 3
    },
    {
        name: 'Wargong',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'SCAG',
        notes: 'Instrumento; gran disco metálico colgante, normalmente un escudo.',
        shopTypeId: 15,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Adufe',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Instrumento; tambor de marco, cuadrado y con sonido vibrante.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Dulcémele',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Instrumento; plano, con cuerdas pulsadas, arqueadas o golpeadas.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Glaur',
        price: '30 gp',
        quantityFormula: '1d4 x 2',
        source: 'SCAG',
        notes: 'Instrumento; cuerno curvado, con válvulas y de latón.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Glockenspiel',
        price: '35 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Instrumento; barras metálicas golpeadas con mazos.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Gloon',
        price: '30 gp',
        quantityFormula: '1d4 x 2',
        source: 'SCAG',
        notes: 'Instrumento; cuerno curvado, sin válvulas y de tono melancólico.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Gran piano',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Instrumento; demasiado grande para moverlo con facilidad.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Arpa de madera exótica',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Instrumento; tallada e incrustada con marfil y gemas de circón.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Clavecín',
        price: '350 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Instrumento; demasiado grande para moverlo con facilidad.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Cuerno de alarma silenciosa',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Instrumento de ilusiones',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Puede ser cualquier tipo de instrumento.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Instrumento de escritura',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Puede ser cualquier tipo de instrumento.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Instrumento de los bardos, laúd de Doss',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Instrumento de los bardos, bandore de Fochlucan',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Instrumento de los bardos, cittern de Mac-Fuirmidh',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Laúd o yarting',
        price: '35 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Instrumento; con cuerdas pulsadas y mástil largo.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Pipas de embrujo',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Pipas de las cloacas',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Rabel',
        price: '32 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Instrumento; muy largo y estrecho, con cuerdas frotadas.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Tambor del ritmo, +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo para bardos; recupera Inspiración Bárdica con una acción.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Partitura clásica',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por copia. Cantidad en copias. Una canción que todo el mundo conoce y muchos cantan.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Partitura inspirada',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por copia. Cantidad en copias. Una canción nueva, emocionante y destinada a la grandeza.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Violín',
        price: '30 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Instrumento; de arco, con trastes y cuerpo hueco.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Varita de dirección',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 4
    },
    {
        name: 'Zulkoon',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'SCAG',
        notes: 'Instrumento; órgano complejo de sonido siniestro.',
        shopTypeId: 15,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Rama campana',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo druida o brujo; detecta la presencia de criaturas.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Campanilla de apertura',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Silbato de águila',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TYP',
        notes: 'Solo 1, para siempre. Obtiene velocidad de vuelo igual al doble de su velocidad mientras lo sopla.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Saxofón común',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Instrumento; viento metal de lengüeta, cubierto de teclas.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Instrumento de los bardos, mandolina Canaith',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Instrumento de los bardos, lira Cli',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Lira de construcción',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo bardo; contiene conjuros y protege estructuras.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Partitura épica',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1 copia, para siempre. Una canción verdaderamente revolucionaria, que cambiará todo.',
        shopTypeId: 15,
        merchantQualityId: 5
    },
    {
        name: 'Lira canto de sirena',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'MOT',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 15,
        merchantQualityId: 5
    }
];

module.exports = songsAndInstrumentsItems;