const witchcraftItems = [
    // Atroz
    {
        name: 'Huesos',
        price: '5 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por set. Cantidad en sets. Buenos para sopa, y quizá incluso para nigromancia.',
        shopTypeId: 22,
        merchantQualityId: 1
    },
    {
        name: 'Escoba mundana',
        price: '5 cp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Huele intensamente a paja.',
        shopTypeId: 22,
        merchantQualityId: 1
    },
    {
        name: 'Vela',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Viene en una gran variedad de colores.',
        shopTypeId: 22,
        merchantQualityId: 1
    },
    {
        name: 'Daga ritual',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Diseño simple; tiene un extraño sigilo grabado en la hoja.',
        shopTypeId: 22,
        merchantQualityId: 1
    },
    {
        name: 'Olla de hierro',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Contiene 1 galón.',
        shopTypeId: 22,
        merchantQualityId: 1
    },
    {
        name: 'Muérdago',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por 5 ramitas. Cantidad en ramitas. Foco druídico; fresco y venenoso.',
        shopTypeId: 22,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Libro de cocina',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Lleno de recetas que suenan deliciosas.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Caramelo',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: '—',
        notes: 'Precio por pieza. Cantidad en piezas. Dulce y delicioso, sin valor nutricional.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Bolsa de componentes',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Tiene pequeños bolsillos interiores para varios componentes.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Utensilios de cocina',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Cristal',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Foco arcano; trozo brillante de cuarzo o similar.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Hongos',
        price: '3 cp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Setas de ostra, rebozuelos o similares; 1/4 de día de comida.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Kit de sanador',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Kit de herboristería',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Hierbas comunes',
        price: '5 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ej.: menta, salvia; usadas con frecuencia en pociones comunes.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Comida modesta',
        price: '3 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Un caldo sustancioso con verduras reales; 1 día de comida.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Carne',
        price: '3 sp',
        quantityFormula: '1d4 x 15',
        source: 'PHB',
        notes: 'Precio por pieza. Cantidad en piezas. Ternera, pollo, venado o similar; 1/2 día de comida.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Balanza de mercader',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Tarta grande',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Dulce o salada; 4 días de comida.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Tarta individual',
        price: '1 gp',
        quantityFormula: '1d4 x 4',
        source: '—',
        notes: 'Dulce o salada; 1 día de comida.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Conjuro: Curar heridas',
        price: '10 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Lanzado a nivel 1; cura a 1 criatura 1d8 + 3 puntos de golpe.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Té blackroot tal',
        price: '1 sp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabor amargo a canela, servido caliente con miel.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Té blackthorn',
        price: '1 sp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Tisana sabrosa y terrosa que calma el estómago revuelto.',
        shopTypeId: 22,
        merchantQualityId: 2
    },
    {
        name: 'Té yellowleaf',
        price: '1 sp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Robusto y amarillo pálido; puede quitar manchas de la ropa.',
        shopTypeId: 22,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Suministros de alquimista',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Antitoxina',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por vial. Cantidad en viales.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Grimorio arcano +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo mago; mejora Recuperación Arcana.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Sangre de asesino',
        price: '150 gp',
        quantityFormula: '1d4+1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Ingerido; puede infligir 1d12 de daño por veneno.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Vial pozo de sangre +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo hechicero; recupera puntos de hechicería con dados de golpe.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Libro de astrología',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Una colección completa de signos estelares y sus significados.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Bestiario',
        price: '125 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Trata sobre un tipo específico de criatura hallada en la zona.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Libro de herboristería',
        price: '5 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Describe la práctica de recolectar y procesar hierbas.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Libro de flora local',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Imágenes y descripciones de plantas locales comunes.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Libro de medicina',
        price: '100 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Contiene remedios mundanos para muchas dolencias comunes.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Hierbas poco comunes',
        price: '5 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ej.: cola de caballo, consuelda; para pociones poco comunes.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Perfume de embrujo',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'XGE',
        notes: 'Ventaja en pruebas de Carisma contra humanoides de VD 1 o menor durante 1 hora.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Veneno básico',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por vial. Cantidad en viales. Lesión; puede infligir 1d4 de daño por veneno.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Kit de envenenador',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Poción de crecimiento',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Creces como con agrandar/reducir durante 1d4 horas.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Poción de curación',
        price: '50 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Recupera 2d4 + 2 puntos de golpe.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Raíz ryath',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'TA',
        notes: 'Otorga 2d4 puntos de golpe temporales; si comes más de una, quedas envenenado.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: Restauración menor',
        price: '40 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Cura ceguera, sordera, parálisis o envenenamiento.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Libro de conjuros',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Vacío; adecuado para contener conjuros.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Muñeca parlante',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Puede configurarse para decir hasta 6 frases cortas.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Baraja de tarokka',
        price: '10 gp',
        quantityFormula: '1d4-1',
        source: 'CS',
        notes: 'Se usa para leer la fortuna; solo una vistani puede hacer una lectura verdadera.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Té gaeth’ad',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Espeso y salobre; puede ser ligeramente psicoactivo.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Té jethur',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Púrpura y sabroso; cura la embriaguez durante 2 horas.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Té milinal',
        price: '3 cp',
        quantityFormula: '1d4 x 10',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Té púrpura con sabor a regaliz, servido frío.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Té nararoot',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabe a regaliz; evita el embarazo durante 2 semanas.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Juego de té',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Perfecto para ceremonias tradicionales del té.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Varita',
        price: '10 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'Foco arcano; hecha de una única rama retorcida.',
        shopTypeId: 22,
        merchantQualityId: 3
    },
    {
        name: 'Wildroot',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'TA',
        notes: 'Cura la condición envenenado.',
        shopTypeId: 22,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Rama campana',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo druida o brujo; detecta la presencia de criaturas.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Libro de fauna exótica',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Tiene imágenes y descripciones de muchos animales extraños.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Libro de flora exótica',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Detalla muchas hierbas y plantas raras y misteriosas.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Escoba voladora',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Velocidad de vuelo de 50 ft., o 30 ft. si carga más de 200 lb.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Caldero de abundancia',
        price: '500 gp',
        quantityFormula: '1',
        source: 'ERLW',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Veneno drow',
        price: '200 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Lesión; puede dejar inconsciente al objetivo.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Elixir de salud',
        price: '2500 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Cura enfermedad, ceguera, sordera, parálisis y envenenamiento.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Figurilla de poder maravilloso: cuervo de plata',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Hierbas raras',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ej.: devilroot, embertear; para pociones raras.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Malicia',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Inhalado; puede cegar a las criaturas afectadas.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Manto de la naturaleza',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo druida o explorador.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Poción de curación superior',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: 'Recupera 4d4 + 4 puntos de golpe.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: Restauración mayor',
        price: '450 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Reduce agotamiento y elimina encantado, petrificado, una maldición o reducciones de puntuaciones o máximos.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: Reencarnar',
        price: '2250 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Devuelve a una criatura a la vida como una raza aleatoria.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Té Beorunna’s cure-all',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. La primera vez que recuperas PG en 1 hora, ganas 2d4 PG extra.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Té cazsil',
        price: '3 gp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Evita dejar embarazada a otra criatura durante 2 semanas.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Té feverbalm',
        price: '7 sp',
        quantityFormula: '1d4',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Sabor anestesiante; suprime efectos de locura durante 1 hora.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Té mallow',
        price: '7 gp',
        quantityFormula: '1d4 x 2',
        source: 'TT',
        notes: 'Precio por taza. Cantidad en tazas. Semi-dulce; ayuda a dormir y vuelve inefectivos los sueños.',
        shopTypeId: 22,
        merchantQualityId: 4
    },
    {
        name: 'Té tormentuous',
        price: '20 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por taza. Cantidad en tazas. Las hojas se pulverizan y se infusionan en té.',
        shopTypeId: 22,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Caldero de renacimiento',
        price: '5000 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Solo druida o brujo.',
        shopTypeId: 22,
        merchantQualityId: 5
    },
    {
        name: 'Bola de cristal',
        price: '50000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Lanza el conjuro escudriñamiento.',
        shopTypeId: 22,
        merchantQualityId: 5
    },
    {
        name: 'Hierbas muy raras',
        price: '500 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ej.: starspine, voidweave; para pociones muy raras.',
        shopTypeId: 22,
        merchantQualityId: 5
    },
    {
        name: 'Poción de longevidad',
        price: '25000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Reduce tu edad en 1d6 + 6 años normalmente.',
        shopTypeId: 22,
        merchantQualityId: 5
    },
    {
        name: 'Poción de curación suprema',
        price: '25000 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Recupera 10d4 + 20 puntos de golpe.',
        shopTypeId: 22,
        merchantQualityId: 5
    },
    {
        name: 'Conjuro: Despertar',
        price: '2250 gp',
        quantityFormula: '3',
        source: 'PHB',
        notes: 'Cantidad en conjuros diarios. Hace que una bestia o planta gane inteligencia y sea capaz de hablar.',
        shopTypeId: 22,
        merchantQualityId: 5
    }
];

module.exports = witchcraftItems;