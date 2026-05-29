const jewelryAndGemsItems = [
    // Atroz
    {
        name: 'Geoda, falsa',
        price: '2 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'No hay cristales dentro de esta roca. Solo más roca.',
        shopTypeId: 8,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Barra de cobre',
        price: '5 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 157',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Barra de hierro',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 157',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Cuenta sencilla',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. Metal semiprecioso; para el pelo o la barba.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Cáliz de cobre',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG 134',
        notes: 'Contiene 1 copa; diseño sencillo con filigrana de plata.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Cristal',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: 'Foco arcano; un trozo brillante de cuarzo o similar.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Pendiente sencillo',
        price: '5 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Pequeño pendiente o gema de metal semiprecioso.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Gemas mundanas',
        price: '10 gp',
        quantityFormula: '1d4 x 5',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: ágata, lapislázuli, malaquita, ojo de tigre.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Guardapelo de latón',
        price: '4 sp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Se abre para contener un retrato o pequeño recuerdo.',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Pico de minero',
        price: '4 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Lupa',
        price: '100 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 2
    },
    {
        name: 'Anillo sencillo',
        price: '5 gp',
        quantityFormula: '1d4 x 4',
        source: '—',
        notes: 'Un pequeño círculo de metal semiprecioso pulido.',
        shopTypeId: 8,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Barra de plata',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Cuenta preciosa',
        price: '5 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. Plata grabada, oro o similar; para el pelo o la barba.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Brazalete pequeño de oro',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'DMG 134',
        notes: 'Brilla hermosamente a la luz del sol.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Corona de bronce',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Una corona de estudio, apta para un gobernante menor.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Gemas comunes',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: citrino, jaspe, piedra lunar, cuarzo.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Gemas poco comunes',
        price: '100 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: ámbar, amatista, granate, jade, perla.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Herramientas de joyero',
        price: '25 gp',
        quantityFormula: '1d4',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Guardapelo de oro',
        price: '25 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 134',
        notes: 'Se abre para contener un retrato o pequeño recuerdo.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Collar sencillo',
        price: '50 gp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Metal semiprecioso trenzado.',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Anillo de sello',
        price: '5 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 3
    },
    {
        name: 'Gema de conjuro, obsidiana',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'OA 223',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Barra de oro',
        price: '50 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Barra de platino',
        price: '500 gp',
        quantityFormula: '1d4',
        source: 'PHB 157',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Cuenta, gema',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Jade tallado, amatista o ámbar; para el pelo o la barba.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Jaula de pájaro de oro',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Puede albergar hasta 5 pajarillos; filigrana de electro.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Brazalete grande de oro',
        price: '250 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Detallado con patrones increíblemente elaborados.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Broche de protección',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 156',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Broche de plata y oro',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Estampado con pétalos de rosa increíblemente delicados.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Cáliz de plata',
        price: '750 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 135',
        notes: 'Grabado con símbolos lunares; engastado con piedras lunares.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Juego de peines, oro de dragón',
        price: '750 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Dos peines, con granates rojo sangre como ojos de dragón.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Corona preciosa',
        price: '750 gp',
        quantityFormula: '1d4-2',
        source: '—',
        notes: 'Elegante corona metálica con algunas gemas engastadas.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Pendiente precioso',
        price: '200 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Ostentosamente adornado con gema o metal precioso.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gema elemental cualquiera',
        price: '250 gp',
        quantityFormula: '1',
        source: 'DMG 167',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gema de brillo',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 171',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gema de visión',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 172',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gemas raras',
        price: '500 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: alejandrita, peridoto, topacio.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gemas muy raras',
        price: '1,000 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: esmeralda, ópalo, zafiro, rubí.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Medallón de pensamientos',
        price: '500 gp',
        quantityFormula: '1',
        source: 'DMG 181',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Jarra de latón, obra maestra',
        price: '250 gp',
        quantityFormula: '1d4',
        source: 'DMG 135',
        notes: 'Contiene 1 pinta; tiene incrustación de jade en un bello patrón.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Collar de plata',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 135',
        notes: 'Incluye un colgante en forma de gema.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Cristal psi',
        price: '500 gp',
        quantityFormula: '1',
        source: 'IDRF 315',
        notes: 'Solo 1, para siempre. Concede telepatía; irradia luz basada en INT.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Anillo de oro',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 135',
        notes: 'Parece hiedra entrelazada, engastado con una hematita.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Rubí del mago de guerra',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: 'XGE 138',
        notes: 'Se acopla a un arma; se usa como foco para conjuros.',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gema de conjuro, lapislázuli',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: 'OA 223',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 4
    },
    {
        name: 'Gema de conjuro, cuarzo',
        price: '5,000 gp',
        quantityFormula: '1d4-2',
        source: 'OA 223',
        notes: '',
        shopTypeId: 8,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Tobillera enjoyada',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Brilla y reluce como mil estrellas diminutas.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Brazalete grande de platino',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Engastado con un inmenso zafiro reluciente.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Cadena de oro fino',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Fijada con una luminosa perla rosa.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Cáliz enjoyado de oro',
        price: '7,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Aro de oro',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Engastado con una hilera de diminutos zafiros brillantes.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Corona enjoyada de oro',
        price: '7,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Una corona maestra apta solo para un emperador.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Cristal crónico',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'TCE 124',
        notes: 'Solo 1, para siempre. Solo para magos; contiene conjuros; ignora componentes materiales.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Cuerno de beber de marfil',
        price: '7,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Con joyas y filigrana de oro; propio de un thane enano.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Ojo enjoyado',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Tiene zafiros y piedras lunares que imitan un ojo mímico.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Gemas legendarias',
        price: '5,000 gp',
        quantityFormula: '1d4',
        source: 'DMG 134',
        notes: 'Precio por unidad. Cantidad en unidades. Ejemplos: zafiro negro, diamante, jacinto.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Collar de perlas rosas',
        price: '2,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Una hilera de perlas irregulares de color rosa.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Anillo enjoyado de platino',
        price: '7,500 gp',
        quantityFormula: '1',
        source: 'DMG 135',
        notes: 'Solo 1, para siempre. Con forma de dragón circular con ojos de rubí.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Anillo de protección',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG 191',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Anillo de telequinesis',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'DMG 193',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Gema de conjuro, ámbar',
        price: '50,000 gp',
        quantityFormula: '1',
        source: 'OA 223',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 5
    },
    {
        name: 'Gema de conjuro, piedra de sangre',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'OA 223',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 8,
        merchantQualityId: 5
    }
];

module.exports = jewelryAndGemsItems;