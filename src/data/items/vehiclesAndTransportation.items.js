const vehiclesAndTransportationItems = [
    // Atroz
    {
        name: 'Bocado y brida',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 1
    },
    {
        name: 'Naga caballo',
        price: '5 cp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Tiene Fuerza 8, 1 PG y velocidad de movimiento de 20 pies.',
        shopTypeId: 20,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Carro',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Carruaje de alquiler, rural',
        price: '3 cp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Precio por milla. Un viaje terrestre entre pueblos o ciudades.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Carruaje de alquiler, urbano',
        price: '1 cp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Precio por viaje. Un trayecto terrestre dentro de una gran ciudad.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Pienso, animal',
        price: '5 cp',
        quantityFormula: '1d4 x 30',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Servicio de mensajería',
        price: '2 cp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Precio por milla. Lleva una carta o paquete de hasta 10 libras.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Mula',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: 'MM',
        notes: 'Puede usarse en lugar de un burro.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Buey',
        price: '15 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Poni',
        price: '30 gp',
        quantityFormula: '1d4 x 2',
        source: 'MM',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Bote de remos',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Silla de carga',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 2
    },
    {
        name: 'Trineo',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Camello',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'MM',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Canoa',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'TA',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de carpintero',
        price: '8 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de cartógrafo',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para mapa o pergamino',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Carro de guerra',
        price: '250 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Trineo de perros',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'IDRF',
        notes: 'Se mueve por nieve si lo arrastra uno o más perros.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Caballo de tiro',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'MM',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Ficha pluma',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'ERLW',
        notes: 'Permite caer con seguridad una vez; después pierde su magia.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Barcaza de quilla',
        price: '3,000 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de navegante',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Caballo de montar',
        price: '75 gp',
        quantityFormula: '1d4',
        source: 'MM',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Silla de montar',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Alforjas',
        price: '4 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Pasaje en barco, mar',
        price: '1 sp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Precio por milla. Pasaje en un barco marítimo; solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Perro de trineo',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'IDRF',
        notes: 'Puede tirar de 360 libras en un trineo de perros durante 1 hora antes de necesitar un descanso corto.',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Carromato',
        price: '35 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de tallista',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Paracaídas de mochila',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'WDH',
        notes: 'Quien lo lleva puede caer con seguridad 60 pies; tarda 10 minutos en volver a guardarse.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Carruaje',
        price: '100 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Carro volador',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'MOT',
        notes: 'Solo 1, para siempre. Vuela cuando lo arrastra una criatura voladora.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Bote plegable',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Herraduras de velocidad',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1 juego, para siempre. Aumenta la velocidad de movimiento de un caballo en 30 pies.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Drakkar',
        price: '10,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Orbe de dirección',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Acción: sabes qué dirección es el norte.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Ficha pluma de Quaal, ancla',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Congela un barco o embarcación en su lugar durante 24 horas.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Ficha pluma de Quaal, barco cisne',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Conjura un barco cisne autopropulsado que transporta 32 criaturas Medianas durante 24 horas.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Velero',
        price: '10,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Silla militar',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Pasaje en barco, aire',
        price: '5 sp',
        quantityFormula: '1',
        source: '—',
        notes: 'Precio por milla. Pasaje en un dirigible; solo si el viaje aéreo es común.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Mejora de barco, mascarón de proa',
        price: '15,000 gp',
        quantityFormula: '1',
        source: 'GS',
        notes: 'Tarda 1d4 semanas; requiere que el barco valga al menos 10.000 gp.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Mejora de barco, miscelánea',
        price: '15,000 gp',
        quantityFormula: '1',
        source: 'GS',
        notes: 'Tarda 1d4 semanas; requiere que el barco valga al menos 10.000 gp.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Mejora de barco, movimiento',
        price: '15,000 gp',
        quantityFormula: '1',
        source: 'GS',
        notes: 'Tarda 1d4 semanas; requiere que el barco valga al menos 10.000 gp.',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Catalejo',
        price: '1,000 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Caballo de guerra',
        price: '400 gp',
        quantityFormula: '1d4',
        source: 'MM',
        notes: '',
        shopTypeId: 20,
        merchantQualityId: 4
    },
    {
        name: 'Rueda de viento y agua',
        price: '500 gp',
        quantityFormula: '1',
        source: 'ERLW',
        notes: 'Solo 1, para siempre. Si no está en Eberron, no requiere Marca de la Tormenta.',
        shopTypeId: 20,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Dirigible',
        price: '20,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Solo si el viaje aéreo es común.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Alfombra voladora',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Solo 1, para siempre. El tamaño exacto de la alfombra lo determina el DM.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Galera',
        price: '30,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Herraduras de céfiro',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1 juego, para siempre. Permite a un caballo flotar y cabalgar sobre agua o lava.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Mejora de barco, casco',
        price: '15,000 gp',
        quantityFormula: '1',
        source: 'GS',
        notes: 'Tarda 1d4 semanas; requiere que el barco valga al menos 10.000 gp.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Mejora de barco, armas',
        price: '15,000 gp',
        quantityFormula: '1',
        source: 'GS',
        notes: 'Tarda 1d4 semanas; requiere que el barco valga al menos 10.000 gp.',
        shopTypeId: 20,
        merchantQualityId: 5
    },
    {
        name: 'Barco de guerra',
        price: '25,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Solo si está cerca de una masa de agua.',
        shopTypeId: 20,
        merchantQualityId: 5
    }
];

module.exports = vehiclesAndTransportationItems;