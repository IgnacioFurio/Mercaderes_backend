'use strict';
const items = require('../src/data/items/index.js');
const { parseCurrencyToCopper } = require("../dist/utils/currency.core");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    const itemsWithDates = items.map((item) => ({
      ...item,
      basePriceCp: parseCurrencyToCopper(item.price),
      createdAt: now,
      updatedAt: now
    }));

    await queryInterface.bulkInsert('Items', itemsWithDates);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
