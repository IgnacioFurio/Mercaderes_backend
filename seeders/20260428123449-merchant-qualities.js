'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MerchantQualities', [
      {
        name: 'Desastroso',
        rank: 1,
        description: 'Mercader de calidad pésima. Mercancía escasa, dañada, sospechosa o poco fiable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pobre',
        rank: 2,
        description: 'Mercader humilde. Stock limitado, productos básicos y poca variedad.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Común',
        rank: 3,
        description: 'Mercader fiable. Mercancía común, precios razonables y disponibilidad aceptable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buena',
        rank: 4,
        description: 'Mercader competente. Mejor variedad, productos cuidados y algunos artículos especiales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Excelente',
        rank: 5,
        description: 'Mercader excelente. Stock amplio, objetos raros, mercancía de calidad y contactos útiles.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Legendaria',
        rank: 6,
        description: 'Mercader extraordinario. Artículos únicos, tratos inusuales y acceso a mercancía excepcional.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MerchantQualities', null, {});
  }
};
