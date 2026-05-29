const potionsPoisonsAndHerbsItems = [
    // Atroz
    {
        name: 'Botella de cristal',
        price: '2 gp',
        quantityFormula: '1d4 x 25',
        source: 'PHB 150',
        notes: 'Precio por botella. Vacía; contiene hasta 1½ pintas.',
        shopTypeId: 13,
        merchantQualityId: 1
    },
    {
        name: 'Frasco',
        price: '1 cp',
        quantityFormula: '1d4 x 50',
        source: 'PHB 150',
        notes: 'Precio por frasco. Vacío; contiene hasta 1 pinta.',
        shopTypeId: 13,
        merchantQualityId: 1
    },
    {
        name: 'Vial',
        price: '1 gp',
        quantityFormula: '1d4 x 50',
        source: 'PHB 150',
        notes: 'Precio por vial. Vacío; contiene hasta 4 onzas.',
        shopTypeId: 13,
        merchantQualityId: 1
    },
    {
        name: 'Agua',
        price: '1 cp',
        quantityFormula: '1d4 x 100',
        source: '—',
        notes: 'Precio por taza. Cantidad en tazas. Base efectiva para la mayoría de pociones.',
        shopTypeId: 13,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Sangre de dragón, droga',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'ERLW 244',
        notes: 'Precio por dosis. Cantidad en dosis. Muy adictiva; mejora la aptitud mágica.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Dreamlily, droga',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'ERLW 244',
        notes: 'Precio por dosis. Cantidad en dosis. Muy adictiva; reduce significativamente el dolor.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Kit de herborista',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Hierbas comunes',
        price: '5 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ejemplo: menta, salvia; usadas a menudo en pociones comunes.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Balanza de mercader',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Veneno básico',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por vial. Cantidad en viales. Veneno de herida; puede infligir 1d4 de daño de veneno.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Poción de trepar',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 187',
        notes: 'Otorga velocidad trepadora durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Poción de curación',
        price: '50 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Restaura 2d4 + 2 puntos de golpe.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Té sandberry',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Áspero, amargo y ácido; muy hidratante.',
        shopTypeId: 13,
        merchantQualityId: 2
    },
    {
        name: 'Té talktuth',
        price: '5 cp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabor metálico y color gris pizarra; gusto adquirido.',
        shopTypeId: 13,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Fuego de alquimista',
        price: '50 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Ácido',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Precio por vial. Cantidad en viales.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Suministros de alquimista',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Antitoxina',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por vial. Cantidad en viales.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Sangre de asesino',
        price: '150 gp',
        quantityFormula: '1d4+1',
        source: 'DMG 257',
        notes: 'Precio por dosis. Cantidad en dosis. Ingerido; puede infligir 1d12 de daño de veneno.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Kit de sanador',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Hierbas poco comunes',
        price: '5 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ejemplo: cola de caballo, consuelda; usadas en pociones poco comunes.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Aceite de resbalamiento',
        price: '250 gp',
        quantityFormula: '1d4+2',
        source: 'DMG 184',
        notes: 'Otorga libertad de movimiento o grasa.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Perfume',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por vial. Cantidad en viales. Un tenue aroma floral para narices exigentes.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Filtro de amor',
        price: '250 gp',
        quantityFormula: '1d4+1',
        source: 'DMG 184',
        notes: 'Encanta a quien lo bebe durante hasta 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Kit de envenenador',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Poción de aliento de fuego',
        price: '250 gp',
        quantityFormula: '1d4+2',
        source: 'DMG 187',
        notes: 'Permite exhalar fuego, infligiendo 4d6 de daño de fuego.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Poción de curación mayor',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 187',
        notes: 'Restaura 4d4 + 4 puntos de golpe.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Poción de crecimiento',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 187',
        notes: 'Permite crecer como con el conjuro agrandar/reducir durante 1d4 horas.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Poción de resistencia',
        price: '250 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG 188',
        notes: 'De tipo aleatorio; otorga resistencia a un tipo de daño durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Poción de respirar bajo el agua',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 188',
        notes: 'Permite respirar bajo el agua durante hasta 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Raíz de ryath',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'TA 205',
        notes: 'Otorga 2d4 puntos de golpe temporales; si se obtiene un 1, envenena.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té blueleaf',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Dulce y mentolado; suprime náuseas y disentería.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té chalthorn',
        price: '2 sp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Seco y terroso; impide saborear comida especiada.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té elkammat',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Leñoso, amargo y con sabor a nuez; beberlo fomenta la positividad.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té gaeth’ad',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Espeso y salobre; puede ser ligeramente psicoactivo.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té mourningberry',
        price: '5 gp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Depresor suave; relajante y calmante.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té nararoot',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Evita el embarazo durante 2 semanas.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Té vauge',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Herbáceo y ligeramente salado, de sabor suave.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Suero de la verdad',
        price: '150 gp',
        quantityFormula: '1d4+1',
        source: 'DMG 258',
        notes: 'Precio por dosis. Cantidad en dosis. Ingerido; el objetivo no puede mentir conscientemente.',
        shopTypeId: 13,
        merchantQualityId: 3
    },
    {
        name: 'Raíz wildroot',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'TA 205',
        notes: 'Cura la condición de envenenado.',
        shopTypeId: 13,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Jarra de alquimia',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 150',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Suministros de cervecero',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Veneno drow',
        price: '200 gp',
        quantityFormula: '1d4',
        source: 'DMG 258',
        notes: 'Precio por dosis. Cantidad en dosis. Veneno de herida; puede dejar inconsciente al objetivo.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Elixir de salud',
        price: '2,500 gp',
        quantityFormula: '1d4',
        source: 'DMG 168',
        notes: 'Cura enfermedad, ceguera, sordera, parálisis y veneno.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de soplador de vidrio',
        price: '30 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Hierbas raras',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ejemplo: raíz del demonio, embertear; usadas en pociones raras.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Perfume de embrujo',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Ventaja en pruebas de Carisma contra humanoides con CR 1 o inferior durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de clarividencia',
        price: '2,500 gp',
        quantityFormula: '1d4',
        source: 'DMG 187',
        notes: 'Otorga el efecto del conjuro clarividencia.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de disminución',
        price: '2,500 gp',
        quantityFormula: '1d4',
        source: 'DMG 187',
        notes: 'Permite encogerse como con el conjuro agrandar/reducir.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de heroísmo',
        price: '2,500 gp',
        quantityFormula: '1d4',
        source: 'DMG 188',
        notes: 'Otorga bendición y 10 puntos de golpe temporales.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de leer la mente',
        price: '2,500 gp',
        quantityFormula: '1d4',
        source: 'DMG 188',
        notes: 'Otorga el efecto del conjuro detectar pensamientos.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de fuerza de gigante de piedra',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 187',
        notes: 'La puntuación de Fuerza se convierte en 23 durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Poción de curación superior',
        price: '2,500 gp',
        quantityFormula: '1d4+1',
        source: 'DMG 187',
        notes: 'Restaura 8d4 + 8 puntos de golpe.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Veneno de serpiente',
        price: '200 gp',
        quantityFormula: '1d4',
        source: 'DMG 258',
        notes: 'Precio por dosis. Cantidad en dosis. Veneno de herida; puede infligir 3d6 de daño de veneno.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té beorunna’s cure-all',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. La primera vez que recuperas PG en 1 hora, ganas 2d4 PG adicionales.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té cassil',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Evita crear o volver a quedar embarazada durante 2 semanas.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té earth dragon’s eye',
        price: '6 cp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Té negro; aumenta la velocidad de movimiento en 5 pies durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té feverbalm',
        price: '7 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabor adormecedor; suprime efectos de locura durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té long jing',
        price: '5 gp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Té verde; otorga resistencia al daño de veneno durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té meirish',
        price: '7 gp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Cítrico de mango; popular entre los ricos.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té mother’s leaf',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabor a hierba y salvia; ayuda a recuperarse de una enfermedad.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té pale jade',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Té blanco; ligero, aéreo y de aroma suave.',
        shopTypeId: 13,
        merchantQualityId: 4
    },
    {
        name: 'Té wild ginger',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Picante y dulce; asienta el estómago.',
        shopTypeId: 13,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Compendio alquímico',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE 119',
        notes: 'Solo 1, para siempre. Solo para magos; transforma objetos.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Vapores de othur quemado',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 258',
        notes: 'Precio por dosis. Cantidad en dosis. Inhalado; puede infligir daño persistente de veneno.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Hierbas muy raras',
        price: '500 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ejemplo: especia astral, vivoleaf; usadas en pociones muy raras.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Mucosidad de Kyrzin',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'ERLW 278',
        notes: 'Solo 1, para siempre. Otorga aliento ácido, forma amorfa, etc.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Malicia',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 258',
        notes: 'Precio por dosis. Cantidad en dosis. Inhalado; puede causar ceguera a las criaturas afectadas.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Aceite de filo',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 184',
        notes: 'Otorga +3 al ataque y daño de un arma.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de fuerza de gigante de las nubes',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 187',
        notes: 'La puntuación de Fuerza se convierte en 27 durante 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de invisibilidad',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 188',
        notes: 'Otorga invisibilidad durante hasta 1 hora.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de invulnerabilidad',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 188',
        notes: 'Otorga resistencia a todo el daño.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de longevidad',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 188',
        notes: 'Reduce la edad en 1d6 + 6 años, normalmente.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de curación suprema',
        price: '25,000 gp',
        quantityFormula: '1d4',
        source: 'DMG 187',
        notes: 'Restaura 10d4 + 20 puntos de golpe.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Poción de vitalidad',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 188',
        notes: 'Cura agotamiento, enfermedad y veneno.',
        shopTypeId: 13,
        merchantQualityId: 5
    },
    {
        name: 'Té mallow',
        price: '7 gp',
        quantityFormula: '1d4 x 2',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Semidulce; ayuda a dormir; vuelve ineficaz el conjuro dream.',
        shopTypeId: 13,
        merchantQualityId: 5
    }
];

module.exports = potionsPoisonsAndHerbsItems;