const alcoholAndRefreshmentItems = [
  // Atroz
  {
    name: 'Cerveza inferior',
    price: '2 cp',
    quantityFormula: '1d4 x 100',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. El sabor no abandona la boca hasta después del siguiente descanso corto.',
    shopTypeId: 1,
    merchantQualityId: 1
  },
  {
    name: 'Agua',
    price: '1 cp',
    quantityFormula: '1d4 x 100',
    source: '—',
    notes: 'Precio por vaso. Cantidad en vasos. Limpia y pura.',
    shopTypeId: 1,
    merchantQualityId: 1
  },

  // Pobre
  {
    name: 'Cerveza genérica',
    price: '4 cp',
    quantityFormula: '1d4 x 100',
    source: 'PHB 158',
    notes: 'Precio por jarra. Cantidad en jarras. Cualquier cerveza que el mercader tenga a mano.',
    shopTypeId: 1,
    merchantQualityId: 2
  },
  {
    name: 'Cerveza sin alcohol',
    price: '3 cp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Tiene algo de sabor, pero poco más.',
    shopTypeId: 1,
    merchantQualityId: 2
  },
  {
    name: 'Frasco o jarra',
    price: '2 cp',
    quantityFormula: '1d4 x 15',
    source: 'PHB 150',
    notes: 'Hecho de peltre o madera tratada.',
    shopTypeId: 1,
    merchantQualityId: 2
  },
  {
    name: 'Té de baya de arena',
    price: '5 cp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Áspero, amargo y ácido; muy hidratante.',
    shopTypeId: 1,
    merchantQualityId: 2
  },
  {
    name: 'Té talktuth',
    price: '5 cp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Sabor metálico y color gris pizarra; gusto adquirido.',
    shopTypeId: 1,
    merchantQualityId: 2
  },

  // Común
  {
    name: 'Cerveza Bitter Black',
    price: '1 sp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Stout; rica, amarga y pesada, servida helada.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Cerveza Elección de Elminster',
    price: '8 cp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cerveza oscura; sabor ahumado, nombrada como reclamo comercial.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Cerveza Arenas Doradas',
    price: '8 cp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Lager dorada con regusto cítrico.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Cerveza Norte de Iriaebor',
    price: '6 cp',
    quantityFormula: '1d4 x 100',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cerveza ámbar; áspera y amarga, un verdadero gusto adquirido.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Suministros de cervecero',
    price: '20 gp',
    quantityFormula: '1d4',
    source: 'PHB 154',
    notes: '',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Sidra Romperrodillas',
    price: '8 cp',
    quantityFormula: '1d4 x 100',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Sidra fuerte de manzana; turbia, con sabor agridulce intenso.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Zumo de fruta',
    price: '3 cp',
    quantityFormula: '1d4 x 25',
    source: '—',
    notes: 'Precio por jarra. Cantidad en vasos. De cualquier variedad.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Hidromiel común',
    price: '1 sp',
    quantityFormula: '1d4 x 100',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Vino especiado de miel, muy popular.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Leche',
    price: '1 sp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. De cabra, vaca u otro animal.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Aguardiente casero',
    price: '3 sp',
    quantityFormula: '1d4 x 5',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Desventaja en salvaciones para evitar la intoxicación.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Té avlat',
    price: '1 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Tisana picante de color cobrizo.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Té blackthorn',
    price: '1 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Tisana sabrosa y terrosa que calma el estómago revuelto.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Té gaeth’ad',
    price: '5 sp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Espeso y salobre; puede ser ligeramente psicoactivo.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Té vauge',
    price: '5 cp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Herbáceo y ligeramente salado, de sabor suave.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Té hoja amarilla',
    price: '1 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Robusto y amarillo pálido; puede quitar manchas de la ropa.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Vino de Sangre',
    price: '1 gp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto; sabor exuberante y pleno con mordida; favorito de nigromantes.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Vino común',
    price: '5 sp',
    quantityFormula: '1d4 x 5',
    source: 'PHB 158',
    notes: 'Precio por botella. Cantidad en botellas. Una de muchas variedades de vino simple y barato.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Vino de Fuego',
    price: '7 sp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto; muy fuerte y especiado, popular entre plebeyos.',
    shopTypeId: 1,
    merchantQualityId: 3
  },
  {
    name: 'Levadura',
    price: '4 cp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por libra. Cantidad en libras.',
    shopTypeId: 1,
    merchantQualityId: 3
  },

  // Buena
  {
    name: 'Cerveza Aliento de Dragón',
    price: '2 sp',
    quantityFormula: '1d4 x 25',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cerveza imperial; muy alcohólica, fuerte sabor a lúpulo.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Cerveza Lo Mejor de Luiren',
    price: '3 sp',
    quantityFormula: '1d4 x 25',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Imperial stout; cerveza mediana negra, espesa y dulce.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Cerveza Ojo del Viejo',
    price: '2 sp',
    quantityFormula: '1d4 x 25',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cerveza roja; pimienta y especias le dan un regusto punzante.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Cerveza Shadowdark',
    price: '8 cp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cerveza marrón; sabor pleno a malta, popular en muchas tabernas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Cuenta de refresco',
    price: '50 gp',
    quantityFormula: '1d4 x 2',
    source: 'XGE 136',
    notes: '',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Brandy',
    price: '5 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Brebaje desmodu',
    price: '1 sp',
    quantityFormula: '1d4 x 25',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Favorito de la Infraoscuridad; servido con un rastreador nocturno vivo.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Sidra Colina Púrpura',
    price: '2 sp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Mezcla de sidra fuerte de manzana, cereza, ciruela y grosella.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Sidra Vilhon',
    price: '2 sp',
    quantityFormula: '1d4 x 50',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Sidra fuerte caliente de manzana, cereza y pera con canela.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Chocolate caliente',
    price: '5 gp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Hidromiel tej',
    price: '3 sp',
    quantityFormula: '1d4 x 50',
    source: 'TA 32',
    notes: 'Precio por jarra. Cantidad en jarras. Hidromiel importada hecha con especias de la jungla.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Ron',
    price: '8 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Jarra de sobriedad',
    price: '100 gp',
    quantityFormula: '1',
    source: 'XGE 139',
    notes: 'Solo 1, para siempre.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té blackroot tal',
    price: '1 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Sabor amargo a canela, servido caliente con miel.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té chalthorn',
    price: '2 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Seco y calcáreo; impide saborear comida picante.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té ojo de dragón de tierra',
    price: '6 cp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Té negro; aumenta la velocidad de movimiento en 5 pies durante 1 hora.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té jethur',
    price: '3 gp',
    quantityFormula: '1d4 x 2',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Púrpura y sabroso; cura la embriaguez durante 2 horas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té long jing',
    price: '5 gp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Té verde; concede resistencia al daño de veneno durante 1 hora.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té meiriath',
    price: '7 gp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Sabor a mango y cítricos; popular entre los ricos.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té milian tal',
    price: '1 sp',
    quantityFormula: '1d4 x 10',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Té púrpura con sabor a regaliz, servido frío.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té jade pálido',
    price: '1 gp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Té blanco; ligero, aireado y fácil de beber.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té kaeth',
    price: '2 gp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por taza. Cantidad en tazas. Granos molidos con cafeína; también llamado café.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Té de jengibre salvaje',
    price: '5 sp',
    quantityFormula: '1d4 x 5',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Picante y dulce; asienta el estómago.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Juego de té',
    price: '50 gp',
    quantityFormula: '1d4',
    source: 'TT',
    notes: 'Perfecto para ceremonias tradicionales de té.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Tequila',
    price: '8 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vodka',
    price: '8 gp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Whiskey',
    price: '5 sp',
    quantityFormula: '1d4 x 4',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino Arabellan Dry',
    price: '8 gp',
    quantityFormula: '1d4 x 3',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto; muy seco, con notas de bayas y madera.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino Berduskan Dark',
    price: '15 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto, casi negro; dulce, pesado y muy alcohólico.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino fino',
    price: '10 gp',
    quantityFormula: '1d4 x 4',
    source: 'PHB 158',
    notes: 'Precio por botella. Cantidad en botellas. Una de muchas variedades de vino fino.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino Glowfire',
    price: '13 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Color chartreuse; brilla ligeramente y sabe a peras de verano.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino Especial Saerloonian',
    price: '16 gp',
    quantityFormula: '1d4',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto; bastante complejo, lleno de frambuesa y fresa.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino Topacio Saerloonian',
    price: '12 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Blanco; seco y sorprendentemente avellanado, con tonos frutales.',
    shopTypeId: 1,
    merchantQualityId: 4
  },
  {
    name: 'Vino de Invierno',
    price: '11 gp',
    quantityFormula: '1d4 x 2',
    source: '—',
    notes: 'Precio por botella. Cantidad en botellas. Tinto azul-púrpura; vino dulce y especiado de postre.',
    shopTypeId: 1,
    merchantQualityId: 4
  },

  // Excelente
  {
    name: 'Cerveza Dragón Púrpura',
    price: '5 gp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Cream ale con un rico sabor a nuez que encanta a la nobleza.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Cerveza Stout de Tanagyr',
    price: '4 gp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Imperial stout; decadentemente plena, compleja y suave.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Cerveza Elección del Thane',
    price: '25 gp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Beber una jarra hace que el vello facial crezca de forma perceptible.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Decantador de agua inagotable',
    price: '500 gp',
    quantityFormula: '1',
    source: 'DMG 161',
    notes: 'Solo 1, para siempre.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Cuerno de beber de marfil',
    price: '7,500 gp',
    quantityFormula: '1',
    source: 'DMG 135',
    notes: 'Solo 1, para siempre. Engastado con filigrana de oro; propio de un thane enano.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Aguamanil de cobre verde',
    price: '5,000 gp',
    quantityFormula: '1',
    source: 'CS 188',
    notes: 'Solo 1, para siempre. Conjura 1 galón de vino al día; convierte veneno en vino.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Hidromiel Evermead',
    price: '25 gp',
    quantityFormula: '1d4 x 10',
    source: '—',
    notes: 'Precio por jarra. Cantidad en jarras. Hidromiel élfica extremadamente rara que sabe a pura dicha.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Jarra de latón de gran calidad',
    price: '250 gp',
    quantityFormula: '1d4',
    source: 'DMG 135',
    notes: 'Contiene 1 pinta; tiene incrustación de jade en un bello patrón.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Jarra de abundancia',
    price: '5,000 gp',
    quantityFormula: '1',
    source: 'HDQ 74',
    notes: 'Solo 1, para siempre. Se llena mágicamente con 3 pintas de cerveza enana, 3 veces al día.',
    shopTypeId: 1,
    merchantQualityId: 5
  },
  {
    name: 'Té kaeth enano',
    price: '10 gp',
    quantityFormula: '1d4 x 2',
    source: 'TT',
    notes: 'Precio por taza. Cantidad en tazas. Beber una taza: inmune al sueño durante 8 horas.',
    shopTypeId: 1,
    merchantQualityId: 5
  }
];

module.exports = alcoholAndRefreshmentItems;