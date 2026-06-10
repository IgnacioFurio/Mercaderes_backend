const flowersAndSeedsItems = [
  // Atroz
  {
    name: 'Flores variadas muertas',
    price: '1 cp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Marchitas y ligeramente marrones.',
    shopTypeId: 4,
    merchantQualityId: 1
  },

  // Pobre
  {
    name: 'Muérdago',
    price: '1 gp',
    quantityFormula: '1d4 x 5',
    source: 'PHB',
    notes: 'Precio por ramita. Cantidad en ramitas. Foco druídico; fresco y venenoso.',
    shopTypeId: 4,
    merchantQualityId: 2
  },
  {
    name: 'Flores variadas',
    price: '1 cp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Ramo de baja calidad de flores comunes.',
    shopTypeId: 4,
    merchantQualityId: 2
  },
  {
    name: 'Semillas de cultivo',
    price: '1 cp',
    quantityFormula: '1d4 x 20',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 libras de un cultivo básico, como arroz o trigo.',
    shopTypeId: 4,
    merchantQualityId: 2
  },
  {
    name: 'Semillas de flores silvestres',
    price: '4 cp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores silvestres.',
    shopTypeId: 4,
    merchantQualityId: 2
  },
  {
    name: 'Flores silvestres',
    price: '2 cp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Ramo fresco de flores locales.',
    shopTypeId: 4,
    merchantQualityId: 2
  },

  // Común
  {
    name: 'Calabaza bisonte',
    price: '1 sp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Repele insectos de forma natural, pero no enjambres gigantes.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Flor de Bowen',
    price: '5 cp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Puede molerse para preparar un té sedante suave.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Flores finas',
    price: '4 cp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Rosas, lavanda, tulipanes o similares.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Kit de herboristería',
    price: '5 gp',
    quantityFormula: '1',
    source: 'PHB',
    notes: 'Herramienta de herborista.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Semillas de calabaza bisonte',
    price: '2 sp',
    quantityFormula: '1d4 x 4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores de calabaza bisonte.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Semillas de flor de Bowen',
    price: '1 sp',
    quantityFormula: '1d4 x 4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores de Bowen.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Semillas de flor fina',
    price: '8 cp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores finas.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Semillas de flor de nieve',
    price: '2 sp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores de nieve en condiciones árticas.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Semillas de árbol',
    price: '5 cp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 25 árboles: roble, abedul, pino o similares.',
    shopTypeId: 4,
    merchantQualityId: 3
  },
  {
    name: 'Flor de nieve',
    price: '1 sp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Flores púrpuras, rosas o amarillas vibrantes que crecen en la nieve.',
    shopTypeId: 4,
    merchantQualityId: 3
  },

  // Buena
  {
    name: 'Dathil',
    price: '10 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por unidad. Comer o beber en infusión cura la condición envenenado.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Piel de pluma',
    price: '50 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por unidad. Comer o beber en infusión cura una enfermedad.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Espina de fuego',
    price: '1 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Al tocarla, supera una prueba de Destreza CD 10 o queda envenenado durante 1 minuto.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Flor luminosa',
    price: '1 sp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Emite luz tenue en un radio de 10 pies.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Flor fénix',
    price: '1 gp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Arde como una antorcha; puede prender objetos.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de dathil',
    price: '20 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 flores dathil.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de piel de pluma',
    price: '100 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 flores de piel de pluma.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de árbol frutal',
    price: '3 sp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 25 árboles frutales: manzano, peral o similar.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de espina de fuego',
    price: '2 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores de espina de fuego.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de flor luminosa',
    price: '2 sp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores luminosas.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de flor fénix',
    price: '2 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 flores fénix.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de terazul',
    price: '50 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 flores terazul.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Semillas de hierba silbante',
    price: '2 sp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 tallos de hierba silbante.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Bastón de flores',
    price: '100 gp',
    quantityFormula: '1',
    source: 'XGE',
    notes: 'Solo 1, para siempre. Puede hacer crecer una flor no mágica específica.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Terazul',
    price: '25 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por unidad. Comer o beber en infusión: inmune al sueño durante 1d4 días. 50% de probabilidad de sufrir visiones perturbadoras.',
    shopTypeId: 4,
    merchantQualityId: 4
  },
  {
    name: 'Hierba silbante',
    price: '1 sp',
    quantityFormula: '1d4 x 4',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. Silba con fuerza al rozarla.',
    shopTypeId: 4,
    merchantQualityId: 4
  },

  // Excelente
  {
    name: 'Rosa de sangre',
    price: '500 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por unidad. Se lleva como símbolo de riqueza extrema.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Talismán de orden vegetal',
    price: '5,000 gp',
    quantityFormula: '1',
    source: 'GS',
    notes: 'Solo 1, para siempre. Permite lanzar hablar con las plantas 3 veces al día; concede ventaja en pruebas de Carisma para hablar con plantas.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Lirio dragón',
    price: '5 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por docena. Cantidad en docenas. El contacto purifica hasta 10 galones de agua una vez.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Soplido de polvo',
    price: '250 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por unidad. Puede dejar inconsciente a una criatura.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Ficha de pluma de Quaal, árbol',
    price: '2,500 gp',
    quantityFormula: '1',
    source: 'DMG',
    notes: 'Solo 1, para siempre. Conjura un árbol no mágico de 60 pies de altura.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Flor roja',
    price: '150 gp',
    quantityFormula: '1d4-1',
    source: '—',
    notes: 'Precio por unidad. Comerla concede ventaja en Destreza, Juego de Manos, durante 10 minutos.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Semillas de rosa de sangre',
    price: '1,000 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 rosas de sangre.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Semillas de lirio dragón',
    price: '10 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 60 lirios dragón en un estanque poco profundo.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Semillas de soplido de polvo',
    price: '500 gp',
    quantityFormula: '1d4-2',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 soplidos de polvo en condiciones árticas.',
    shopTypeId: 4,
    merchantQualityId: 5
  },
  {
    name: 'Semillas de flor roja',
    price: '300 gp',
    quantityFormula: '1d4-1',
    source: '—',
    notes: 'Precio por puñado. Cantidad en puñados. Crecen hasta 10 flores rojas.',
    shopTypeId: 4,
    merchantQualityId: 5
  }
];

module.exports = flowersAndSeedsItems;