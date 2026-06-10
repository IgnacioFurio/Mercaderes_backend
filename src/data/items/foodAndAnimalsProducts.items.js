const foodAndAnimalProductsItems = [
  // Atroz
    {
        name: 'Estiércol',
        price: '1 cp',
        quantityFormula: '1d4 x 25',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 1
    },
    {
        name: 'Manteca',
        price: '2 cp',
        quantityFormula: '1d4 x 25',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 1
    },
    {
        name: 'Comida, escuálida',
        price: '3 cp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Madura, rancia y del tipo incorrecto de masticable; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 1
    },
    {
        name: 'Dientes',
        price: '1 cp',
        quantityFormula: '1d4 x 30',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. De animal o, posiblemente, humanos.',
        shopTypeId: 5,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Pan',
        price: '2 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por hogaza. Cantidad en hogazas. 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Mantequilla',
        price: '3 cp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por barra. Cantidad en barras.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Queso',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por trozo. Cantidad en trozos. Muchos tipos distintos; 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Huevos',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por docena. Cantidad en docenas. De gallina, pato o similar; 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Harina',
        price: '2 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Fruta',
        price: '1 cp',
        quantityFormula: '1d4 x 20',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. Manzanas, ciruelas o similares; 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Lentejas',
        price: '2 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. 1 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Comida, pobre',
        price: '6 cp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Gachas y trozos grasientos; huele a arrepentimiento. 1 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Leche',
        price: '1 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por botella. Cantidad en botellas.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Arroz',
        price: '3 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Blanco o integral; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Verdura',
        price: '1 cp',
        quantityFormula: '1d4 x 20',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. Lechuga, puerros, col o similar; 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 2
    },
    {
        name: 'Trigo',
        price: '1 cp',
        quantityFormula: '1d4 x 25',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Huesos',
        price: '5 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por conjunto. Cantidad en conjuntos. Buenos para sopa, y quizá incluso para nigromancia.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Pescado',
        price: '6 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Salmón, arenque o similar; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Hongos',
        price: '3 cp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Setas de ostra, rebozuelos o similares; 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Miel',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Muchas variedades y sabores distintos.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Trampa de caza',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Una prueba de Destreza CD 13 evita sufrir 1d4 de daño perforante y quedar atrapado.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Comida, modesta',
        price: '3 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Un caldo sustancioso con verduras reales; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Carne',
        price: '3 sp',
        quantityFormula: '1d4 x 15',
        source: 'PHB',
        notes: 'Precio por trozo. Cantidad en trozos. Ternera, pollo, venado o similar; 1/2 día.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Ración de campaña',
        price: '2 sp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Olla de hierro',
        price: '2 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Contiene 1 galón.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Raciones',
        price: '5 sp',
        quantityFormula: '1d4 x 15',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Carne seca, galleta dura o similar; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Sal',
        price: '5 cp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Jabón',
        price: '2 cp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, anís',
        price: '5 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Dulce y fragante, con un fuerte sabor parecido al regaliz.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, albahaca',
        price: '2 gp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Penetrante y dulce; combina bien con sabores salados.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, bergamota',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Ácida y agria, con un mordisco característico.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, eneldo',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Fresco y herbáceo, con notas cítricas; bueno con pescado.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, ajo',
        price: '2 sp',
        quantityFormula: '1d4 x 10',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Intensamente penetrante; combina bien con platos salados.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, menta',
        price: '5 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Fresca, crujiente y dulce; refresca el paladar.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, romero',
        price: '8 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, salvia',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Condimento, tomillo',
        price: '2 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Especia, clavo',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Especia, comino',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Especia, jengibre',
        price: '1 gp',
        quantityFormula: '1d4 x 10',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Especia, rábano picante',
        price: '2 sp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Especia, semilla de mostaza',
        price: '8 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 3
    },
    {
        name: 'Azúcar',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras. Muchas variedades y procedencias.',
        shopTypeId: 5,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Cuenta de alimento',
        price: '50 gp',
        quantityFormula: '1d4 x 2',
        source: 'XGE',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Pan élfico',
        price: '6 sp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Precio por hogaza. Cantidad en hogazas. Agradable, ligero y nutritivo; 2 días.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Pastel',
        price: '5 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Exquisito y jugoso; 4 días.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Caramelo',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: '—',
        notes: 'Precio por pieza. Cantidad en piezas. Dulce y delicioso, sin valor nutricional.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Utensilios de cocinero',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Aparejos de pesca',
        price: '1 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Gorro de chef',
        price: '3 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Bolsa de especias útil de Heward',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Comida, cómoda',
        price: '5 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Carne ligeramente especiada con guarnición; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Comida, rica',
        price: '8 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. Un corte de carne selecto con postre; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Tortitas',
        price: '5 sp',
        quantityFormula: '1d4 x 3',
        source: '—',
        notes: 'Precio por pila. Cantidad en pilas. Cubiertas de sirope y fruta; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Tarta grande',
        price: '3 gp',
        quantityFormula: '1d4 x 2',
        source: '—',
        notes: 'Dulce o salada; 4 días.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Tarta personal',
        price: '1 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Dulce o salada; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Especias, otras',
        price: '2 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras. Pimienta, canela o similar.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Especia, azafrán',
        price: '15 gp',
        quantityFormula: '1d4',
        source: 'PHB',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 4
    },
    {
        name: 'Tortilla',
        price: '1 cp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por unidad. Cantidad en unidades. 1/4 día.',
        shopTypeId: 5,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Huesos de dragón',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por libra. Cantidad en libras.',
        shopTypeId: 5,
        merchantQualityId: 5
    },
    {
        name: 'Garrote de fémur de dragón',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'SKT',
        notes: 'Solo 1, para siempre. 3d8 contundente; a dos manos.',
        shopTypeId: 5,
        merchantQualityId: 5
    },
    {
        name: 'Cuerno de unicornio',
        price: '1,000 gp',
        quantityFormula: '1d4-2',
        source: '—',
        notes: '',
        shopTypeId: 5,
        merchantQualityId: 5
    },
    {
        name: 'Piedra ioun, sustento',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'DMG',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 5,
        merchantQualityId: 5
    },
    {
        name: 'Comida, aristocrática',
        price: '2 gp',
        quantityFormula: '1d4 x 20',
        source: 'PHB',
        notes: 'Precio por día. Cantidad en días. El corte más suculento de una bestia mágica; 1 día.',
        shopTypeId: 5,
        merchantQualityId: 5
    }
];

module.exports = foodAndAnimalProductsItems;