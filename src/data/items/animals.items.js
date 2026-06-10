const animalsItems = [
  // Atroz
  {
    name: 'Perro salvaje',
    price: '25 gp',
    quantityFormula: '1d4-1',
    source: 'TA',
    notes: 'Indómito, de alguna forma.',
    shopTypeId: 2,
    merchantQualityId: 1
  },
  {
    name: 'Loro muerto',
    price: '1 cp',
    quantityFormula: '1',
    source: '—',
    notes: 'Fallecido. Solo 1, para siempre.',
    shopTypeId: 2,
    merchantQualityId: 1
  },

  // Pobre
  {
    name: 'Murciélago',
    price: '2 cp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Gato',
    price: '2 sp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Pollo',
    price: '2 cp',
    quantityFormula: '1d4 x 2',
    source: 'PHB',
    notes: 'Puede ser un gallo.',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Pienso para animales',
    price: '5 cp / día',
    quantityFormula: '1d4',
    source: 'PHB',
    notes: 'Cantidad para 30 días.',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Rana',
    price: '1 cp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Puede ser un sapo.',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Cabra',
    price: '2 gp',
    quantityFormula: '1d4 x 2',
    source: 'MM',
    notes: 'Puede ser una oveja o una cabra montés.',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Lagarto',
    price: '1 cp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Cerdo',
    price: '3 gp',
    quantityFormula: '1d4 x 2',
    source: 'PHB',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Rata',
    price: '1 cp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 2
  },
  {
    name: 'Bestias variadas VD 0',
    price: '2 cp - 1 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Pueden estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 2
  },

  // Común
  {
    name: 'Tejón',
    price: '5 sp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Indómito.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Vaca',
    price: '10 gp',
    quantityFormula: '1d4 x 2',
    source: 'VGM',
    notes: 'Puede ser un toro o un buey.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Caballo de tiro',
    price: '50 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Fastieh',
    price: '75 gp',
    quantityFormula: '1d4-1',
    source: 'ERLW',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Liebre',
    price: '2 gp',
    quantityFormula: '1d4',
    source: 'IDRF',
    notes: 'Puede ser un conejo.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Mula',
    price: '8 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: 'Puede ser un burro.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Buey',
    price: '15 gp',
    quantityFormula: '1d4',
    source: 'VGM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Poni',
    price: '30 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Cuervo',
    price: '10 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Puede ser una corneja.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Comadreja',
    price: '5 sp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Puede ser un zorro, mapache o zarigüeya.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Bestias variadas VD 1/8',
    price: '1 gp - 10 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Pueden estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 3
  },
  {
    name: 'Bestias variadas VD 1/4',
    price: '5 gp - 25 gp',
    quantityFormula: '1d4-1',
    source: '—',
    notes: 'Pueden estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 3
  },

  // Buena
  {
    name: 'Pico de hacha',
    price: '50 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: 'Ave no voladora grande que a veces se usa como montura.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Babuino',
    price: '25 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede ser un mono.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Jabalí',
    price: '50 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Indómito.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Camello',
    price: '50 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Ciervo',
    price: '50 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Águila',
    price: '20 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Alce',
    price: '100 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede ser un alce americano.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Halcón',
    price: '15 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede ser un halcón.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Hiena',
    price: '125 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede estar sin domesticar; puede ser un chacal.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Mastín',
    price: '50 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: 'Puede ser un perro de trineo; adulto o cachorro.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Búho',
    price: '20 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Caballo de monta',
    price: '75 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Farol de rastreo',
    price: '100 gp',
    quantityFormula: '1',
    source: 'IDRF',
    notes: 'Se ilumina cuando está cerca de un tipo de criatura específico aleatorio. Solo 1, para siempre.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Loro vivo',
    price: '20 gp',
    quantityFormula: '1d4-1',
    source: '—',
    notes: 'Puede ser un pavo real.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Pantera',
    price: '150 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Indómita.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Bastón de llamadas de ave',
    price: '100 gp',
    quantityFormula: '1',
    source: 'XGE',
    notes: 'Solo 1, para siempre.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Tigre',
    price: '200 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Indómito; puede ser un caracal, león o leopardo de las nieves.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Caballo de guerra',
    price: '400 gp',
    quantityFormula: '1d4',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Lobo',
    price: '50 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Puede estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 4
  },
  {
    name: 'Bestias variadas VD 1/2',
    price: '20 gp - 50 gp',
    quantityFormula: '1d4-1',
    source: '—',
    notes: 'Pueden estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 4
  },

  // Excelente
  {
    name: 'Simio',
    price: '500 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Puede estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Oso negro',
    price: '500 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Indómito; adulto o crías.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Oso pardo',
    price: '800 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Indómito; adulto o crías.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Cocodrilo',
    price: '500 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Indómito; puede ser un caimán.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Lobo terrible',
    price: '800 gp',
    quantityFormula: '1d4-1',
    source: 'MM',
    notes: 'Indómito.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Elefante',
    price: '1,200 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Mamut',
    price: '2,500 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Rinoceronte',
    price: '1,200 gp',
    quantityFormula: '1d4-2',
    source: 'MM',
    notes: 'Indómito.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Anillo de influencia animal',
    price: '5,000 gp',
    quantityFormula: '1',
    source: 'DMG',
    notes: 'Solo 1, para siempre.',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Cebra',
    price: '400 gp',
    quantityFormula: '1d4-1',
    source: 'TA',
    notes: '',
    shopTypeId: 2,
    merchantQualityId: 5
  },
  {
    name: 'Bestias variadas VD 1',
    price: '50 gp - 300 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Pueden estar sin domesticar.',
    shopTypeId: 2,
    merchantQualityId: 5
  }
];

module.exports = animalsItems;