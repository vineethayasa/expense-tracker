'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
    static getExpense() {
      return this.findAll();
    }
    static addExpense({expense_date,expense_head,expense_amount,userId }) {
      return this.create({ expense_date,expense_head,expense_amount,userId});
    }
  }
  Expense.init({
    expense_date: DataTypes.DATEONLY,
    expense_amount: DataTypes.FLOAT,
    expense_head: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};