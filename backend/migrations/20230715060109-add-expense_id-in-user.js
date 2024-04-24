'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Expenses', 'userId', {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint('Expenses', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Expenses', 'userId');
  },
};