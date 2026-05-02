'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MerchantQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MerchantQuality.hasMany(models.Merchant, {
        foreignKey: "merchantQualityId",
        as: "merchants",
      });

      MerchantQuality.hasMany(models.Item, {
        foreignKey: "merchantQualityId",
        as: "items",
      });
    }
  }
  MerchantQuality.init({
    name: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    cashFormula: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MerchantQuality',
  });
  return MerchantQuality;
};