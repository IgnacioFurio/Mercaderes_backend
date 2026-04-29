'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Merchants', 'personalityTrait', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('Merchants', 'ideal', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('Merchants', 'bond', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('Merchants', 'flaw', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('Merchants', 'gimmick', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Merchants', 'gimmick');
    await queryInterface.removeColumn('Merchants', 'flaw');
    await queryInterface.removeColumn('Merchants', 'bond');
    await queryInterface.removeColumn('Merchants', 'ideal');
    await queryInterface.removeColumn('Merchants', 'personalityTrait');
  }
};
