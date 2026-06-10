const thievingSuppliesItems = [
    // Atroz
    {
        name: 'Libro, "Cómo robar"',
        price: '25 gp',
        quantityFormula: '1',
        source: 'PHB',
        notes: 'Solo 1 copia, para siempre. El exterior está cerrado con llave, CD 15, y el interior está en blanco.',
        shopTypeId: 18,
        merchantQualityId: 1
    },
    {
        name: 'Pértiga de 10 pies',
        price: '5 cp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 1
    },
    {
        name: 'Saco',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Contiene hasta 1 pie cúbico o 30 libras.',
        shopTypeId: 18,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Cerbatana',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1 perforante; recarga, a distancia 25/100.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Bala de honda',
        price: '4 cp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en balas.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Tiza',
        price: '1 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por pieza. Cantidad en piezas. Viene en varios colores; útil para marcar señales.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Útiles de escalada',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Daga',
        price: '2 gp',
        quantityFormula: '1d4 x 4',
        source: 'PHB',
        notes: '1d4 perforante; sutil, ligera, arrojadiza 20/60.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Dreamlily, droga',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'ERLW',
        notes: 'Precio por dosis. Cantidad en dosis. Muy adictiva; reduce significativamente el dolor.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Garfio de escalada',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Escalera de 10 pies',
        price: '1 sp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Agujas de cerbatana',
        price: '4 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en agujas.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Cuerda de cáñamo',
        price: '1 gp',
        quantityFormula: '1d4 x 50',
        source: 'PHB',
        notes: 'Precio por 50 pies. Cantidad en tramos de 50 pies.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Honda',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d4 contundente; a distancia 30/120.',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Herramientas de ladrón',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 2
    },
    {
        name: 'Antorcha',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Flecha',
        price: '1 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en flechas.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Rodamientos de bolas',
        price: '1 gp',
        quantityFormula: '1d4 x 2000',
        source: 'PHB',
        notes: 'Precio por bolsa de 1.000. Cantidad en rodamientos.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Virote de ballesta',
        price: '1 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por 20. Cantidad en virotes.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Palanca',
        price: '2 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Abrojos',
        price: '1 gp',
        quantityFormula: '1d4 x 40',
        source: 'PHB',
        notes: 'Precio por bolsa de 20. Cantidad en bolsas.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Ballesta de mano',
        price: '75 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d6 perforante; ligera, recarga, a distancia 30/120.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Juego de dados',
        price: '1 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'También disponible con peso falso, por 4 sp.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Kit de disfraz',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Kit de falsificación',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Juego de naipes',
        price: '5 sp',
        quantityFormula: '1d4 x 3',
        source: 'PHB',
        notes: 'También disponible marcado, por 2 gp.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Veneno básico',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por vial. Cantidad en viales. Veneno de herida; puede infligir 1d4 de daño de veneno.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Kit de envenenador',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Ariete portátil',
        price: '4 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Estoque',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d8 perforante; sutil.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Arco corto',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '1d6 perforante; a distancia 80/320, a dos manos.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Espada corta',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '1d6 perforante; sutil, ligera.',
        shopTypeId: 18,
        merchantQualityId: 3
    },
    {
        name: 'Silbato de señales',
        price: '5 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Bolsa de contención',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Contiene 64 pies cúbicos o 500 libras; siempre pesa 15 libras.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Botas de huellas falsas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1 juego, para siempre. Hace que tus huellas parezcan las de otro humanoide.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Dados de charlatán',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE',
        notes: 'Puedes controlar lo que aparece al tirar dados.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Capa de muchas modas',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre. Puede hacerse parecer cualquier capa.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Baraja de ilusiones',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Conjura una ilusión aleatoria en un punto elegido.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Veneno drow',
        price: '200 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Veneno de herida; puede dejar inconsciente al objetivo.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Esencia de éter',
        price: '300 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Inhalado; puede dejar inconsciente a las criaturas afectadas.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Botella de humo eterno',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Ficha pluma',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'ERLW',
        notes: 'Permite caer con seguridad una vez; después pierde su magia.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de disfraz',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE',
        notes: 'Solo 1, para siempre. Permite lanzar disfrazarse a voluntad.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Daga de chatarra',
        price: '100 gp',
        quantityFormula: '1',
        source: 'TYP',
        notes: 'Solo 1, para siempre. Añade +1 al ataque y daño, pero se rompe con un 1 natural.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Llave misteriosa',
        price: '50 gp',
        quantityFormula: '1d4-2',
        source: 'XGE',
        notes: 'Tiene un 5% de probabilidad de abrir cualquier cerradura y luego desaparece.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Pértiga plegable',
        price: '100 gp',
        quantityFormula: '1d4-2',
        source: 'XGE',
        notes: 'Puede contraerse a 1 pie o expandirse hasta 10 pies.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Poción de trepar',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'DMG',
        notes: 'Otorga velocidad trepadora durante 1 hora.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Veneno de serpiente',
        price: '200 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Veneno de herida; puede infligir 3d6 de daño de veneno.',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Catalejo',
        price: '1,000 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: '',
        shopTypeId: 18,
        merchantQualityId: 4
    },
    {
        name: 'Suero de la verdad',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Ingerido; el objetivo no puede mentir conscientemente.',
        shopTypeId: 18,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Amuleto de prueba contra detección y localización',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Concede inmunidad a adivinación y escudriñamiento.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Botas de zancadas y saltos',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1 juego, para siempre.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Brazal de dagas voladoras',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'WDH',
        notes: 'Solo 1, para siempre. Conjura una cantidad infinita de dagas mágicas.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Brazales de arquería',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1 juego, para siempre. Otorga competencia con arcos y +2 al daño con arcos.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Capa élfica',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Daga de punto ciego',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'WDMM',
        notes: 'Solo 1, para siempre. Otorga vista ciega hasta 30 pies.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Daga de veneno',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. +1 al ataque y daño; puede convertir una herida envenenada.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Guantes de ladrón',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Cuerda de trepar',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre. Puede animarse para ayudarte a trepar automáticamente.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Murmuros de espías',
        price: '500 gp',
        quantityFormula: '1d4+1',
        source: 'GGR',
        notes: 'Permite comunicación silenciosa y compartir audición.',
        shopTypeId: 18,
        merchantQualityId: 5
    },
    {
        name: 'Veneno de guiverno',
        price: '1,200 gp',
        quantityFormula: '1d4-2',
        source: 'DMG',
        notes: 'Precio por dosis. Cantidad en dosis. Veneno de herida; puede infligir 7d6 de daño de veneno.',
        shopTypeId: 18,
        merchantQualityId: 5
    }
];

module.exports = thievingSuppliesItems;