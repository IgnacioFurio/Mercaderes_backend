'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ShopTypes', [
      {
        name: 'Alcohol y refrescos',
        description: 'Tabernas, bodegas, puestos de bebida, licores, cervezas, vinos y refrescos locales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animales',
        description: 'Venta de animales comunes, mascotas, bestias de carga y criaturas útiles para viajeros.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Libros y mapas mundanos',
        description: 'Libros, mapas, cartas de navegación, documentos, diarios y material escrito no mágico.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flores y semillas',
        description: 'Flores, semillas, plantas decorativas, cultivos raros y productos botánicos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comida y productos animales',
        description: 'Alimentos, carne, pescado, productos lácteos, huevos, pieles, grasa, huesos y otros productos animales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Muebles y decoración interior',
        description: 'Mobiliario, tapices, alfombras, lámparas, utensilios domésticos y decoración para viviendas o salones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alta moda',
        description: 'Ropa de lujo, prendas nobles, accesorios elegantes, perfumes, telas finas y vestimenta de prestigio.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joyería y gemas',
        description: 'Joyas, gemas, metales preciosos, anillos, collares, ornamentos y objetos de valor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baratijas',
        description: 'Curiosidades, pequeños objetos extraños, recuerdos, amuletos menores y mercancía de poco valor aparente.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peletería y cuero',
        description: 'Pieles, cuero trabajado, correas, bolsos, prendas de cuero, arreos y materiales curtidos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artilugios mecánicos',
        description: 'Dispositivos mecánicos, mecanismos, relojería, piezas móviles, prototipos y pequeñas invenciones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Armaduras medias y pesadas',
        description: 'Armaduras intermedias, armaduras pesadas, escudos, piezas defensivas y servicios de reparación.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pociones, venenos y hierbas',
        description: 'Pociones, venenos, remedios, hierbas medicinales, ingredientes alquímicos y sustancias peligrosas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ídolos religiosos y bendiciones',
        description: 'Símbolos sagrados, reliquias menores, amuletos religiosos, servicios rituales y bendiciones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canciones e instrumentos',
        description: 'Instrumentos musicales, partituras, canciones, servicios de interpretación y objetos relacionados con bardos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pergaminos de conjuro y tomos',
        description: 'Pergaminos mágicos, tomos arcanos, grimorios, textos de estudio y servicios de copia mágica.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tatuajes',
        description: 'Tatuajes decorativos, rituales, simbólicos o mágicos, tintas especiales y servicios de tatuador.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suministros de ladrón',
        description: 'Herramientas de infiltración, ganzúas, disfraces, venenos menores, equipo de sigilo y mercancía clandestina.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Herramientas',
        description: 'Herramientas de oficio, kits especializados, útiles de artesano, instrumentos de trabajo y material técnico.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vehículos y transporte',
        description: 'Carros, carretas, embarcaciones, servicios de viaje, monturas de transporte y equipo relacionado.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Armas',
        description: 'Armas simples, marciales, munición, equipo ofensivo, armas especiales y servicios de mantenimiento.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brujería',
        description: 'Ingredientes extraños, supersticiones, amuletos, fetiches, maldiciones, rituales y mercancía inquietante.',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Comerciantes legendarios
      {
        name: 'Viajero astral',
        description: 'Comerciante legendario asociado a viajes planares, objetos extraplanares y mercancía imposible.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Encantamientos',
        description: 'Comerciante legendario especializado en mejoras mágicas, encantamientos y servicios arcanos excepcionales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tratos feéricos',
        description: 'Comerciante legendario de pactos feéricos, favores, promesas, dones caprichosos y precios ambiguos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Objetos mágicos',
        description: 'Comerciante legendario especializado en objetos mágicos raros, únicos o de gran valor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Criaturas mágicas',
        description: 'Comerciante legendario de criaturas mágicas, huevos, bestias exóticas y servicios relacionados.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nigromancia',
        description: 'Comerciante legendario de reliquias funerarias, servicios oscuros, cadáveres, huesos y magia necromántica.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cosas necesarias',
        description: 'Comerciante legendario que ofrece exactamente aquello que alguien necesita, aunque el precio rara vez sea solo oro.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Perdido en el tiempo',
        description: 'Comerciante legendario de objetos anacrónicos, reliquias de eras olvidadas y mercancía fuera de su época.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ShopTypes', null, {});
  }
};