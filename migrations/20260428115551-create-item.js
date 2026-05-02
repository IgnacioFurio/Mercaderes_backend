'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      basePriceCp: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantityFormula: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      shopTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ShopTypes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      merchantQualityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "MerchantQualities",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};