





'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laptop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  laptop.init({
    Id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    tilte: DataTypes.STRING,
    descriptin: DataTypes.STRING,
    price: DataTypes.INTEGER,
    descountPercentage: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'laptop',
  });
  return laptop;
};