const spellScrollsAndTomesItems = [
    // Atroz
    {
        name: 'Pergamino de conjuro falso',
        price: '25 sp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Una prueba de Investigación CD 10 revela que es falso.',
        shopTypeId: 16,
        merchantQualityId: 1
    },

    // Pobre
    {
        name: 'Libro en blanco',
        price: '25 gp',
        quantityFormula: '1d4 x 3',
        source: 'PHB 150',
        notes: 'Apto para escribir o dibujar; no puede contener conjuros.',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Suministros de calígrafo',
        price: '10 gp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 154',
        notes: '',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Estuche para pergamino',
        price: '1 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Tinta',
        price: '10 gp',
        quantityFormula: '1d4',
        source: 'PHB 150',
        notes: 'Precio por botella. Cantidad en botellas.',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Pluma de tinta',
        price: '2 cp',
        quantityFormula: '1d4 x 2',
        source: 'PHB 150',
        notes: '',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Papel',
        price: '2 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Pergamino',
        price: '1 sp',
        quantityFormula: '1d4 x 20',
        source: 'PHB 150',
        notes: 'Precio por hoja. Cantidad en hojas.',
        shopTypeId: 16,
        merchantQualityId: 2
    },
    {
        name: 'Libro de conjuros',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: 'PHB 150',
        notes: 'Vacío; adecuado para contener conjuros.',
        shopTypeId: 16,
        merchantQualityId: 2
    },

    // Común
    {
        name: 'Libro de conjuros resistente',
        price: '100 gp',
        quantityFormula: '1d4',
        source: 'XGE 137',
        notes: 'Vacío; no se daña por fuego, agua o el paso del tiempo.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Tinta luminiscente',
        price: '50 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Precio por botella. Cantidad en botellas. Brilla tenuemente de forma indefinida; puede verse en la oscuridad.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Papel resistente',
        price: '2 gp',
        quantityFormula: '1d4 x 5',
        source: '—',
        notes: 'Precio por hoja. Cantidad en hojas. No se daña por fuego, agua o el paso del tiempo.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino ritual de nivel 1',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 1; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino ritual de nivel 2',
        price: '250 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 2; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino ritual de nivel 3',
        price: '250 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 3; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Cartera para pergaminos',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Contiene hasta 30 pergaminos en un espacio extradimensional; puede extraer un pergamino como acción adicional.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino de conjuro, truco',
        price: '50 gp',
        quantityFormula: '1d4 x 5',
        source: 'DMG 200',
        notes: 'Contiene un truco aleatorio; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino de conjuro, nivel 1',
        price: '50 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 1; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino de conjuro, nivel 2',
        price: '250 gp',
        quantityFormula: '1d4 x 4',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 2; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Pergamino de conjuro, nivel 3',
        price: '250 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 3; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: identificar',
        price: '20 gp',
        quantityFormula: '3',
        source: 'PHB 252',
        notes: 'Cantidad en conjuros diarios. Revela las propiedades de un objeto mágico.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: escritura ilusoria',
        price: '30 gp',
        quantityFormula: '3',
        source: 'PHB 252',
        notes: 'Cantidad en conjuros diarios. Escribe un mensaje codificado mágicamente.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: Abrir',
        price: '40 gp',
        quantityFormula: '3',
        source: 'PHB 254',
        notes: 'Cantidad en conjuros diarios. Abre un objeto cerrado.',
        shopTypeId: 16,
        merchantQualityId: 3
    },
    {
        name: 'Conjuro: armadura de mago',
        price: '10 gp',
        quantityFormula: '3',
        source: 'PHB 256',
        notes: 'Cantidad en conjuros diarios. La CA base del objetivo pasa a ser 13 + modificador de Destreza.',
        shopTypeId: 16,
        merchantQualityId: 3
    },

    // Buena
    {
        name: 'Grimorio arcano +1',
        price: '500 gp',
        quantityFormula: '1',
        source: 'TCE 120',
        notes: 'Solo 1, para siempre. Solo para magos; mejora Recuperación Arcana.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Papel de copiar',
        price: '50 gp',
        quantityFormula: '1d4',
        source: '—',
        notes: 'Precio por hoja. Cantidad en hojas. Al presionarlo sobre papel no mágico, se convierte permanentemente en una copia y deja de ser mágico.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Sombrero de hechicería',
        price: '100 gp',
        quantityFormula: '1',
        source: 'XGE 137',
        notes: 'Solo 1, para siempre. Solo para magos; intenta lanzar trucos adicionales.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pájaro de papel',
        price: '250 gp',
        quantityFormula: '1d4 x 2',
        source: 'WDH 191',
        notes: 'Transporta un mensaje de hasta 50 palabras a un destinatario.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Papel plegable',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Acción: puede doblarse o desplegarse para formar una réplica funcional de cualquier objeto no mágico que cueste 5 gp o menos y pueda sostenerse con una mano.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pluma de escriba',
        price: '100 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Acción: escribe o deja de escribir lo que dices durante hasta 1 hora, recogido de forma selectiva por día.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino ritual de nivel 4',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 4; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino ritual de nivel 5',
        price: '2,500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 5; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino ritual de nivel 6',
        price: '25,000 gp',
        quantityFormula: '1d4-2',
        source: '—',
        notes: 'Contiene un conjuro ritual aleatorio de nivel 6; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino de protección',
        price: '2,500 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG 199',
        notes: 'Puede usarlo cualquiera; protege contra un tipo de criatura.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino de conjuro, nivel 4',
        price: '2,500 gp',
        quantityFormula: '1d4 x 3',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 4; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino de conjuro, nivel 5',
        price: '2,500 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 5; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Pergamino de conjuro, nivel 6',
        price: '25,000 gp',
        quantityFormula: '1d4 x 2',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 6; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: leyenda',
        price: '770 gp',
        quantityFormula: '3',
        source: 'PHB 254',
        notes: 'Cantidad en conjuros diarios. Revela detalles sobre una persona, lugar u objeto importante.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: escritura celeste',
        price: '40 gp',
        quantityFormula: '3',
        source: 'XGE 165',
        notes: 'Cantidad en conjuros diarios. Aparecen hasta 10 palabras en el cielo.',
        shopTypeId: 16,
        merchantQualityId: 4
    },
    {
        name: 'Conjuro: lenguas',
        price: '90 gp',
        quantityFormula: '3',
        source: 'PHB 283',
        notes: 'Cantidad en conjuros diarios. El objetivo entiende todos los idiomas.',
        shopTypeId: 16,
        merchantQualityId: 4
    },

    // Excelente
    {
        name: 'Libro de conjuros de respaldo',
        price: '500 gp',
        quantityFormula: '1d4-1',
        source: '—',
        notes: 'Al presionarlo contra un libro de conjuros, se convierte permanentemente en una copia de ese libro y deja de ser mágico.',
        shopTypeId: 16,
        merchantQualityId: 5
    },
    {
        name: 'Tratado fulminante',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE 128',
        notes: 'Solo 1, para siempre. Solo para magos; contiene conjuros e inflige más daño de conjuro.',
        shopTypeId: 16,
        merchantQualityId: 5
    },
    {
        name: 'Grimorio corazóntejido',
        price: '5,000 gp',
        quantityFormula: '1',
        source: 'TCE 128',
        notes: 'Solo 1, para siempre. Solo para magos; contiene conjuros y potencia encantamientos.',
        shopTypeId: 16,
        merchantQualityId: 5
    },
    {
        name: 'Manual de gólems de barro',
        price: '25,000 gp',
        quantityFormula: '1',
        source: 'DMG 180',
        notes: 'Solo 1, para siempre.',
        shopTypeId: 16,
        merchantQualityId: 5
    },
    {
        name: 'Pergamino de conjuro, nivel 7',
        price: '25,000 gp',
        quantityFormula: '1d4-1',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 7; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 5
    },
    {
        name: 'Pergamino de conjuro, nivel 8',
        price: '25,000 gp',
        quantityFormula: '1d4-2',
        source: 'DMG 200',
        notes: 'Contiene un conjuro aleatorio de nivel 8; puede copiarse.',
        shopTypeId: 16,
        merchantQualityId: 5
    }
];

module.exports = spellScrollsAndTomesItems;