'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShopType.hasMany(models.Merchant, {
        foreignKey: "shopTypeId",
        as: "merchants",
      });

      ShopType.hasMany(models.Item, {
        foreignKey: "shopTypeId",
        as: "items",
      });
    }
  }
  ShopType.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ShopType',
  });
  return ShopType;
};