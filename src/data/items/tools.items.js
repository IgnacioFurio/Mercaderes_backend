const toolsItems = [
    // Atroz
    {
        name: 'Cubo',
        price: '5 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Contiene 3 galones o 1/2 pie cúbico.',
        shopTypeId: 19,
        merchantQualityId: 1
    },
    {
        name: 'Pala',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Cesta',
        price: '4 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: '1 pie de ancho y 1 pie de alto; contiene 40 libras o 2 pies cúbicos.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Polea y aparejo',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Vela',
        price: '1 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB 150',
        notes: 'Viene en varios colores.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Tiza',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Precio por pieza. Cantidad en piezas. Viene en varios colores.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Daga',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB 149',
        notes: '1d4 perforante; sutil, ligera, arrojadiza 20/60.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Aparejos de pesca',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Martillo',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Martillo ligero',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: '1d4 contundente; ligera, arrojadiza 20/60.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Escalera de 10 pies',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Lámpara',
        price: '1 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Pico de minero',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Tablón de madera',
        price: '1 cp',
        quantityFormula: '1d4 x 15',
        source: '—',
        notes: 'Precio por tablón. Cantidad en tablones. Mide 2 pulgadas por 4 pulgadas por 5 pies cada uno.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Pico',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Pértiga de 10 pies',
        price: '5 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Olla de hierro',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Contiene 1 galón.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Cuerda de cáñamo',
        price: '1 gp',
        quantityFormula: '1d4 x 50',
        source: 'PHB 150',
        notes: 'Precio por 50 pies. Cantidad en tramos de 50 pies.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Hoz',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: '1d4 cortante; ligera.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Clavos de hierro',
        price: '1 gp',
        quantityFormula: '1d4 x 40',
        source: 'PHB 150',
        notes: 'Precio por 10. Cantidad en clavos.',
        shopTypeId: 19,
        merchantQualityId: 2
    },
    {
        name: 'Antorcha',
        price: '5 sp',
        quantityFormula: '1d4 x 4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Ábaco',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Rodamientos de bolas',
        price: '1 gp',
        quantityFormula: '1d4 x 2000',
        source: 'PHB 150',
        notes: 'Precio por bolsa de 1.000. Cantidad en rodamientos.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de carpintero',
        price: '8 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Cadena',
        price: '5 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: 'Precio por 10 pies. Cantidad en tramos de 10 pies.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de zapatero',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Utensilios de cocinero',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Palanca',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Maza',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Hacha de mano',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: '1d6 cortante; ligera, arrojadiza 20/60.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Trampa de caza',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Una prueba de Destreza CD 13 evita sufrir 1d4 de daño perforante y quedar atrapado.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Linterna ojo de buey',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Linterna con capucha',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Candado',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Llave incluida.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de albañil',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Espejo de acero',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Red',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: 'Especial, arrojadiza 5/15.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Aceite',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de alfarero',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Balanza de mercader',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de herrero',
        price: '20 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Yesquero',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Cera de sellado',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de tejedor',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de tallista',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Suministros de alquimista',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Vela de las profundidades',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 136',
        notes: 'Puede arder bajo el agua.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Cofre de preservación',
        price: '100 gp',
        quantityFormula: '1',
        source: 'WDMM 139',
        notes: 'Solo 1, para siempre. Los objetos dentro no envejecen ni se descomponen; contiene 3,75 pies cúbicos.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Trompetilla para sordera',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 137',
        notes: 'Sostenida contra la oreja; suprime la condición ensordecido.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Linterna siemprebrillante',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'ERLW 277',
        notes: 'En Eberron usa una llama continua; fuera de Eberron, funciona como una llama continua.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de soplador de vidrio',
        price: '30 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Kit de herborista',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de joyero',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Linterna de revelación',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 179',
        notes: 'Solo 1, para siempre. Revela criaturas y objetos invisibles.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Candado de engaño',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'La prueba de Destreza para abrirlo tiene desventaja.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Lupa',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de navegante',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Suministros de pintor',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Pértiga de pesca',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Se transforma entre una pértiga de 10 pies y una caña de pescar.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Pértiga plegable',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE 138',
        notes: 'Puede contraerse a 1 pie o expandirse hasta 10 pies.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Lona recogelluvia',
        price: '1 gp',
        quantityFormula: '1d4-1',
        source: 'TA 32',
        notes: 'Recoge 2 galones de agua por pulgada de lluvia; contiene 8 galones.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Cuerda de remendar',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE 138',
        notes: 'Si se corta, puede repararse mágicamente con una palabra.',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de manitas',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },
    {
        name: 'Catalejo',
        price: '1,000 gp',
        quantityFormula: '1d4-1',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 19,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Herramienta multiusos +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE 119',
        notes: 'Solo 1, para siempre. Solo para artífices; cambia a cualquier herramienta y permite lanzar trucos.',
        shopTypeId: 19,
        merchantQualityId: 5
    },
    {
        name: 'Escoba voladora',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 156',
        notes: 'Solo 1, para siempre. Velocidad de vuelo 50 pies, o 30 pies si transporta más de 200 libras.',
        shopTypeId: 19,
        merchantQualityId: 5
    },
    {
        name: 'Caja de yesca gnómica',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Puede encender cualquier llama pequeña.',
        shopTypeId: 19,
        merchantQualityId: 5
    },
    {
        name: 'Cuerda de trepar',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 197',
        notes: 'Solo 1, para siempre. Puede animarse para ayudarte a trepar automáticamente.',
        shopTypeId: 19,
        merchantQualityId: 5
    },
    {
        name: 'Cuerda de enmarañar',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 197',
        notes: 'Solo 1, para siempre. Puede animarse para enmarañar a una criatura.',
        shopTypeId: 19,
        merchantQualityId: 5
    }
];

module.exports = toolsItems;