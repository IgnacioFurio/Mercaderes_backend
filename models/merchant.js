'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.belongsTo(models.ShopType, {
        foreignKey: "shopTypeId",
        as: "shopType",
      });

      Merchant.belongsTo(models.MerchantQuality, {
        foreignKey: "merchantQualityId",
        as: "quality",
      });

      Merchant.hasMany(models.MerchantInventory, {
        foreignKey: "merchantId",
        as: "inventory",
      });
    }
  }
  Merchant.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    shopTypeId: DataTypes.INTEGER,
    region: DataTypes.STRING,
    merchantQualityId: DataTypes.INTEGER,
    cashAmount: DataTypes.INTEGER,
    attitude: DataTypes.STRING,
    personalityTrait: DataTypes.TEXT,
    ideal: DataTypes.TEXT,
    bond: DataTypes.TEXT,
    flaw: DataTypes.TEXT,
    gimmick: DataTypes.TEXT,
    notes: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};