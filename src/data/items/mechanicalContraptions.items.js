const mechanicalContraptionsItems = [
    // Atroz
    {
        name: 'Pelota y copa',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Una prueba de Destreza CD 10 atrapa la pelota en la copa.',
        shopTypeId: 11,
        merchantQualityId: 1
    },
    {
        name: 'Aro y palo',
        price: '2 cp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Un pasatiempo de una época más sencilla.',
        shopTypeId: 11,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Ábaco',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Rodamientos de bolas',
        price: '1 gp',
        quantityFormula: '1d4 x 2000',
        source: 'PHB 150',
        notes: 'Precio por bolsa de 1.000. Cantidad en rodamientos.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Polea y aparejo',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Cadena',
        price: '5 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: 'Precio por 10 pies. Cantidad en tramos de 10 pies.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Engranajes',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por puñado. Cantidad en puñados.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Móvil de madera',
        price: '9 cp',
        quantityFormula: '1d4',
        source: 'CS 118',
        notes: 'Murciélagos, pájaros o dragones; las alas se agitan al girar.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Muñecas rusas de madera',
        price: '9 cp',
        quantityFormula: '1d4 x 2',
        source: 'CS 118',
        notes: 'Pintadas para parecer plebeyos o animales.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Aceite',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 11,
        merchantQualityId: 2
    },
    {
        name: 'Marioneta de madera',
        price: '9 cp',
        quantityFormula: '1d4 x 2',
        source: 'CS 118',
        notes: 'Parece una figura histórica o mitológica.',
        shopTypeId: 11,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Caja ladradora',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'WDH 47',
        notes: 'Cuerda: ladra al detectar vibración durante 8 horas.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Órgano de barril',
        price: '30 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Instrumento musical; gira la manivela para tocar.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Virote de ballesta',
        price: '1 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Estuche para virotes de ballesta',
        price: '1 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Contiene hasta 20 virotes.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Bomba',
        price: '150 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 267',
        notes: 'Puede no existir en ambientaciones sin pólvora.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Perro mecánico',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'SKT 44',
        notes: 'Cuerda: te sigue durante 12 horas.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Dragonchess mecánico',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Cuerda: juega dragonchess contra ti durante 2 horas.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Ballesta de mano',
        price: '75 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 149',
        notes: '1d6 perforante; ligera, recarga, a distancia 30/120.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Ballesta ligera',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 149',
        notes: '1d8 perforante; recarga, a dos manos, a distancia 80/320.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Ojo de repuesto',
        price: '100 gp',
        quantityFormula: '1d4',
        source: 'XGE 137',
        notes: 'Reemplaza un ojo perdido.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Cuerno de pólvora',
        price: '35 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 267',
        notes: 'Puede no existir en ambientaciones sin pólvora.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Trampa de caza',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Una prueba de Destreza CD 13 evita sufrir 1d4 de daño perforante y quedar atrapado.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Candado',
        price: '10 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Llave incluida.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Grilletes',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Llave incluida.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Pipa de fósforos',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: 'WDH 47',
        notes: 'Se enciende mágicamente cuando se usa.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Carrusel musical',
        price: '9 sp',
        quantityFormula: '1d4',
        source: 'CS 118',
        notes: 'Se sostiene con ambas manos, se le da cuerda y toca música.',
        shopTypeId: 11,
        merchantQualityId: 3
    },
    {
        name: 'Prótesis de extremidad',
        price: '100 gp',
        quantityFormula: '1d4',
        source: 'ERLW 278',
        notes: 'Reemplaza una extremidad perdida.',
        shopTypeId: 11,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Herramienta multiusos +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE 119',
        notes: 'Solo 1, para siempre. Solo para artífices; cambia a cualquier herramienta y permite lanzar truco.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Paracaídas de mochila',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'WDH 47',
        notes: 'Puede llevar a salvo una caída de 60 pies; 10 minutos para volver a guardarlo.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Amuleto mecánico',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 137',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Dragón mecánico',
        price: '75 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Cuerda: ruge y exhala fuego durante 1 minuto.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Orrery mecánico',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Un modelo complejo y abstracto del multiverso.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Montura mecánica',
        price: '250 gp',
        quantityFormula: '1d4-2',
        source: 'MM 336',
        notes: 'Igual que un caballo de monta; no necesita comer, dormir ni respirar; inmune al veneno.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Pájaro cantor mecánico',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Cuerda: canta durante 3 canciones; no se mueve.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Ballesta pesada',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 149',
        notes: '1d10 perforante; pesada, recarga, a dos manos, a distancia 100/400.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Ballesta ligera, repetición',
        price: '150 gp',
        quantityFormula: '1d4-1',
        source: 'OA 224',
        notes: '1d8 perforante; a dos manos, a distancia 40/160; tiene 6 disparos y puede recargarse con una acción.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Dinamita',
        price: '200 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 267',
        notes: 'Precio por cartucho. Cantidad en cartuchos. Puede no existir en ambientaciones sin pólvora.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Gafas de visión nocturna',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 172',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Pólvora',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 267',
        notes: 'Puede no existir en ambientaciones sin pólvora.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Yelmo de respiración subacuática',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'GS 229',
        notes: 'Permite respirar bajo el agua; concede velocidad de nado de 60 pies y ventaja en pruebas de nadar.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Candado de engaño',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'XGE 138',
        notes: 'La prueba de Destreza para abrirlo tiene desventaja.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Aceite de resbalamiento',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 184',
        notes: 'Precio por frasco. Cantidad en frascos.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Orbe de movimiento',
        price: '100 gp',
        quantityFormula: '1',
        source: 'WDMM 174',
        notes: 'Solo 1, para siempre. Acción: hace que el orbe empiece o deje de moverse indefinidamente.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Reloj de bolsillo',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Cuerda: marca la hora del día de forma fiable durante 24 horas.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Casco propulsor',
        price: '250 gp',
        quantityFormula: '1',
        source: 'WDMM 251',
        notes: 'Solo 1, para siempre. Acción: se activa, pero hay un 50% de probabilidad de romperse.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Piroconvergente',
        price: '500 gp',
        quantityFormula: '1',
        source: 'GGR 180',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Granada enredadora',
        price: '250 gp',
        quantityFormula: '1d4-2',
        source: 'WDMM 244',
        notes: 'Se lanza hasta 60 pies; explota; criaturas en 10 pies hacen salvación de Destreza CD 15. Si fallan quedan apresadas hasta 1 hora. CD para escapar: 20.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Cubo térmico',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'IDRF 316',
        notes: 'Irradia calor seco en un radio de 15 pies.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de ladrón',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Herramientas de manitas',
        price: '50 gp',
        quantityFormula: '1d4+1',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Cucaracha mecánica',
        price: '10 gp',
        quantityFormula: '1d4 x 10',
        source: 'XGE 139',
        notes: 'Una criatura golpeada debe superar una salvación de Fuerza CD 10 o quedar derribada.',
        shopTypeId: 11,
        merchantQualityId: 4
    },
    {
        name: 'Varita de pirotecnia',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 140',
        notes: 'Solo 1, para siempre. Dispara fuegos artificiales.',
        shopTypeId: 11,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Cañón arcano',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'ERLW 276',
        notes: 'Solo 1, para siempre. Puede hacer un ataque de puñetazo cohete a distancia.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Bastón de explosiones',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'WDMM 310',
        notes: 'Solo 1, para siempre. Lanza cadena de relámpagos a voluntad.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Orrery celestial',
        price: '1,000 gp',
        quantityFormula: '1',
        source: '—',
        notes: 'Solo 1, para siempre. Un modelo mecánico intrincado del multiverso, lo bastante pequeño para sostenerlo con dos manos.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Trineo cohete mecánico',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Cuerda: viaja 60 pies por ronda en la dirección hacia la que mira durante 1 minuto; no puede dirigirse; transporta 2 criaturas.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Dodecaedro de perdición',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'WDMM 284',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Bandas de hierro de Bilarro',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 177',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Manual de gólems de hierro',
        price: '25,000 gp',
        quantityFormula: '1',
        source: 'DMG 180',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Espejo de acero de mizium',
        price: '5,000 sp',
        quantityFormula: '1',
        source: 'GGR 179',
        notes: 'Solo 1, para siempre. Hecho de mithral; en lugares distintos de Rávnica.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Caja de música de oro',
        price: '2,500 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 135',
        notes: 'Reproduce 10 canciones; una obra maestra de arte y artesanía.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Profesor orbe',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'WDMM 284',
        notes: 'Solo 1, para siempre. Es consciente, tiene Inteligencia 18, es erudito por personalidad y sabe 4 materias esotéricas; +6 a esas pruebas.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Conjuro: convocar constructo',
        price: '200 gp',
        quantityFormula: '3',
        source: 'TCE 111',
        notes: 'Cantidad en usos diarios. Puede lanzar convocar constructo 3 veces al día.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Varita de relámpagos',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 211',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 11,
        merchantQualityId: 5
    },
    {
        name: 'Cargador alado',
        price: '500 gp',
        quantityFormula: '1d4-2',
        source: 'PA 223',
        notes: 'En lugar de recargas, usa una correa larga.',
        shopTypeId: 11,
        merchantQualityId: 5
    }
];

module.exports = mechanicalContraptionsItems;