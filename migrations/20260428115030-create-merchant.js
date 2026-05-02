'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Merchants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      species: {
        type: Sequelize.STRING,
        allowNull: false,
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
      region: {
        type: Sequelize.STRING,
        allowNull: false,
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
      cashAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      attitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      personalityTrait: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      ideal: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      bond: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      flaw: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      gimmick: {
        type: Sequelize.TEXT,
        allowNull: true
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
    await queryInterface.dropTable('Merchants');
  }
};