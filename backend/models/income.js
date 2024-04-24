'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Income.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
    static getIncome() {
      return this.findAll();
    }
    static addIncome({ Income_date,Income_head,Income_amount,userId }) {
      return this.create({ Income_date,Income_head,Income_amount,userId });
    }
  }
  Income.init({
    Income_date: DataTypes.DATEONLY,
    Income_amount: DataTypes.FLOAT,
    Income_head: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Income',
  });
  return Income;
};