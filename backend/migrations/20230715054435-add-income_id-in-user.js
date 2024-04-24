'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Incomes', 'userId', {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint('Incomes', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Incomes', 'userId');
  },
};