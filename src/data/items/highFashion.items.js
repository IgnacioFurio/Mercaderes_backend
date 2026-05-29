const highFashionItems = [
    // Atroz
    {
        name: 'Saco, ponible',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Casi impermeable.',
        shopTypeId: 7,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Gorra de cuero',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Una forma resistente, aunque fea, de mantener la cabeza seca.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Gorro, cofia',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un gorro femenino.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Gorro de dormir',
        price: '4 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un gorro largo y cónico para una fría noche de invierno.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Tela, lona',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 157',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas. Tela resistente; de colores variados.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Ropa común',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Gastada y remendada, hecha con materiales bastos.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Ropa, túnicas',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Sencillas, lisas y limpias, con muchos bolsillos.',
        shopTypeId: 7,
        merchantQualityId: 2
    },
    {
        name: 'Ropa de viajero',
        price: '2 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Duradera y bien hecha, pero no exactamente elegante.',
        shopTypeId: 7,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Brazalete pequeño de oro',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG 134',
        notes: 'Brilla hermosamente a la luz del sol.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Capa para clima frío',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Forrada con pieles suaves; ideal para condiciones gélidas.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Capa de disfraz',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Perfecta para grandes florituras.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Tela, algodón',
        price: '5 sp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 157',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas. Resistente, pero transpira fácilmente; de colores variados.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Ropa para clima frío',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'IDRF 20',
        notes: 'Con capas para mantener el calor; ideal para condiciones gélidas.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Ropa de disfraz',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Un disfraz bien confeccionado para juglar, bailarín o actor.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Vestiduras',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 151',
        notes: 'Un atuendo ceremonial para un miembro de una fe específica.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de zapatero',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Gafas',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Para una visión menos que perfecta.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Parche de cuero',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Adecuado para un pirata, pícaro o vendedor misterioso.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Sombrero hongo',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un sombrero redondeado con ala corta.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Pañuelo de seda',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 134',
        notes: 'Suave y con bordado personalizado.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Capucha',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Máscara, bandana',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Útil para ocultar tu identidad, por todo tipo de razones.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Máscara de madera tallada',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Con forma de animal o arquetipo, ideal para fiestas.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Perfume',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por vial. Cantidad en viales. Un tenue aroma floral para narices exigentes.',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de tejedor',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 3
    },
    {
        name: 'Peluca',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Hermosa o austera, buena para ocultar la calvicie.',
        shopTypeId: 7,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Botas de huellas falsas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 136',
        notes: 'Solo 1, para siempre. Hace que tus huellas parezcan las de otro humanoide.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Lazo o pajarita',
        price: '12 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Tela suave, lisa o con estampados festivos.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Brazalete grande de oro',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Detallado con patrones increíblemente elaborados.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Capa elegante',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Cortada por expertos y confeccionada pensando en la nobleza.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Capa de ondeo',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 136',
        notes: 'Solo 1, para siempre. Acción adicional: la capa ondea dramáticamente.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Capa de muchas modas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 136',
        notes: 'Solo 1, para siempre. Puede hacerse parecer cualquier capa.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Tela, lino',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 157',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas. Adecuada para ropa de todo tipo; de muchos colores.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Tela, seda',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 157',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas. Sedosa y suave; de muchos colores.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Ropa, paño de oro',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 134',
        notes: 'Adecuada para un sumo sacerdote o una persona de posición distinguida.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Vestimentas',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Ropa de moda',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Poco práctica, pero a la vanguardia de la moda moderna.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Ropa fina',
        price: '15 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Ropa refinada, muy a la moda.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Ropa, túnicas de seda',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Bordadas con oro; adecuadas para un archimago.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Ropa de remendar',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE 137',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Capucha',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Una prenda que cubre el rostro, popular entre vigilantes y asesinos.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Glamentrama común',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'ERLW 277',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Gafas protectoras',
        price: '10 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Cuero y cristal, perfectas para mantener los ojos a salvo.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de aventurero',
        price: '15 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Un sombrero de ala ancha preferido por exploradores.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Boina',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un sombrero circular sencillo, básico entre artistas.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero fez',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Usado por distinguidos individuos en tierras áridas.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de hechicería',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 137',
        notes: 'Solo 1, para siempre. Solo para magos; intenta lanzar trucos adicionales.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de capitán de mar',
        price: '20 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Un gorro náutico que impone respeto.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de copa',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un símbolo icónico del refinamiento moderno.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero ushanka',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Un gorro cálido, ideal para condiciones gélidas.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Máscara de terciopelo negro',
        price: '25 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 134',
        notes: 'Cosida con hilo de plata; ideal para un baile.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Máscara de dominó',
        price: '15 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Elegante y misteriosa, pero aun así bastante atractiva.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Perfume de embrujo',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Ventaja en pruebas de Carisma contra humanoides con CR 1 o inferior durante 1 hora.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Cuerda de seda',
        price: '10 gp',
        quantityFormula: '1d4 x 50',
        source: 'PHB 150',
        notes: 'Precio por 50 pies. Cantidad en tramos de 50 pies. Ligera y fácil de trepar.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Gafas sombreadas',
        price: '350 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Niega la desventaja de la sensibilidad a la luz solar.',
        shopTypeId: 7,
        merchantQualityId: 4
    },
    {
        name: 'Tejido cambiante',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'ERLW 279',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Tobillera enjoyada',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Brilla y reluce como mil estrellas diminutas.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Botas de las tierras invernales',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 156',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Brazalete grande de platino',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Engastado con un inmenso zafiro reluciente.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Broche de plata y oro',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Estampado con pétalos de lilas increíblemente delicados.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Capa superior',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Encantada: siempre es la capa más fina de la sala.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Ropa superior',
        price: '1,500 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Encantada: siempre es la ropa más fina de la sala.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Juego de peines, oro de dragón',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Dos peines, con granates rojo sangre como ojos de dragón.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Glamentrama poco común',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'ERLW 277',
        notes: '',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Sombrero superior',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Encantado: siempre es el sombrero más fino de la sala.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Túnica de colores centelleantes',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG 192',
        notes: 'Solo 1, para siempre. Emite colores resplandecientes que aturden criaturas.',
        shopTypeId: 7,
        merchantQualityId: 5
    },
    {
        name: 'Zapatillas de trepar cual arácnido',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 200',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 7,
        merchantQualityId: 5
    }
];

module.exports = highFashionItems;