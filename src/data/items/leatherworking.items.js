const leatherworkingItems = [
    // Atroz
    {
        name: 'Cuero, curado',
        price: '5 gp',
        quantityFormula: '1d4 x 4',
        source: '—',
        notes: 'Precio por yarda cuadrada. Cantidad en yardas cuadradas.',
        shopTypeId: 10,
        merchantQualityId: 1
    },
    {
        name: 'Saco',
        price: '1 cp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Contiene hasta 1 pie cúbico o 30 libras.',
        shopTypeId: 10,
        merchantQualityId: 1
    },
    {
        name: 'Jarra de cuero',
        price: '1 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Hecha completamente de cuero.',
        shopTypeId: 10,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Bocado y brida',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Gorra de cuero',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Una forma resistente, aunque fea, de mantener la cabeza seca.',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Carne',
        price: '3 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 158',
        notes: 'Precio por trozo. Cantidad en trozos. Ternera, pollo, venado o similar; 1/2 día de comida.',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Armadura acolchada',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 145',
        notes: 'Armadura ligera. CA 11 + modificador de Destreza; desventaja en sigilo.',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Faltriquera',
        price: '5 sp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 150',
        notes: 'Contiene hasta 1/5 de pie cúbico o 6 libras.',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Silla de carga',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 2
    },
    {
        name: 'Odre',
        price: '2 sp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Mochila',
        price: '2 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para virotes de ballesta',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Contiene hasta 20 virotes.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Capa para clima frío',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Forrada con pieles suaves; ideal para condiciones gélidas.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Ropa para clima frío',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'IDRF 20',
        notes: 'Con capas para mantener el calor; ideal para condiciones gélidas.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Ropa de viajero',
        price: '2 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Duradera y bien hecha; resiste el castigo.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Capucha',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Trampa de caza',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Una prueba de Destreza CD 13 evita sufrir 1d4 de daño perforante y quedar atrapado.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Armadura de cuero',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 145',
        notes: 'Armadura ligera. CA 11 + modificador de Destreza.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de peletero',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Aceite',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Carcaj',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Contiene hasta 20 flechas.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Lona recogelluvia',
        price: '1 gp',
        quantityFormula: '1d4-1',
        source: 'TA 32',
        notes: 'Recoge 2 galones de agua por pulgada de lluvia; contiene 8 galones.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Silla de montar',
        price: '10 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Escudo',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 145',
        notes: 'Una piel o blanco de cuero; +2 a la CA.',
        shopTypeId: 10,
        merchantQualityId: 3
    },
    {
        name: 'Látigo',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: '1d4 cortante; sutil, alcance.',
        shopTypeId: 10,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Armadura +1, ligera o de pieles',
        price: '5,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 152',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto. Puede ser armadura ligera o armadura de pieles.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura resplandeciente, ligera o de pieles',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE 136',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto. Puede ser armadura ligera o armadura de pieles.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Gaita',
        price: '30 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Barda, ligera o de pieles',
        price: 'Variable',
        quantityFormula: '1d4-1',
        source: 'PHB 157',
        notes: 'Precio: 4 veces el coste de una armadura similar para humanoides.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Bolsa de contención',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 153',
        notes: 'Contiene 64 pies cúbicos o 500 libras; siempre pesa 15 libras.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Botas élficas',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 155',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Botas de huellas falsas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 136',
        notes: 'Solo 1, para siempre. Hace que tus huellas parezcan las de otro humanoide.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Botas de zancadas y saltos',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 156',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Botas de las tierras invernales',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 156',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de lanzamiento, ligera o de pieles',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE 136',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto. Puede ser armadura ligera o armadura de pieles.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Capucha',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Una prenda que cubre el rostro, popular entre vigilantes y asesinos.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Brazales de escamas de dragón, rojos',
        price: '500 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Sintonización: los ataques cuerpo a cuerpo pueden infligir daño de fuego en su lugar.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Tambor o pandero',
        price: '6 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: 'Instrumento; de cuero sobre un armazón de madera.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de aventurero',
        price: '15 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Un sombrero de cuero de ala ancha preferido por exploradores.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de pieles',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 145',
        notes: 'Armadura media. CA 12 + modificador de Destreza, máximo 2.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de marinero, ligera o de pieles',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 181',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto. Puede ser armadura ligera o armadura de pieles.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Carcaj de Ehlonna',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 189',
        notes: 'Solo 1, para siempre. Contiene mucha munición y muchas armas a distancia.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Alforjas',
        price: '4 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Silla exótica',
        price: '60 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Silla militar',
        price: '20 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: '',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de escamas',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 145',
        notes: 'Hecha usando escamas de una criatura que una vez estuvo viva.',
        shopTypeId: 10,
        merchantQualityId: 4
    },
    {
        name: 'Armadura de cuero tachonado',
        price: '45 gp',
        quantityFormula: '1d4',
        source: 'PHB 145',
        notes: 'Armadura ligera. CA 12 + modificador de Destreza.',
        shopTypeId: 10,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Armadura +2, ligera o de pieles',
        price: '50,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 152',
        notes: 'Añade el coste base de la armadura no mágica al precio del objeto. Puede ser armadura ligera o armadura de pieles.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Armadura de resistencia, ligera o de pieles',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 152',
        notes: 'Solo 1, para siempre. Variedad aleatoria; añade el coste base de la armadura no mágica al precio del objeto.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Escudo atrapaflechas',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 152',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Cinturón de los enanos',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 155',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Armadura de escamas de dragón, roja',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG 165',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Armadura de cuero glamuroso',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 172',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Mochila práctica de Heward',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 174',
        notes: 'Solo 1, para siempre. Contiene 12 pies cúbicos o 120 libras; siempre pesa 5 libras.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Silla del caballero',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 199',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Escudo +1',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 200',
        notes: 'Un escudo mágico o blanco de cuero; +3 a la CA.',
        shopTypeId: 10,
        merchantQualityId: 5
    },
    {
        name: 'Cargador alado',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'PA 223',
        notes: 'En lugar de recargas, usa una correa larga.',
        shopTypeId: 10,
        merchantQualityId: 5
    }
];

module.exports = leatherworkingItems;