'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.ShopType, {
        foreignKey: "shopTypeId",
        as: "shopType",
      });

      Item.belongsTo(models.MerchantQuality, {
        foreignKey: "merchantQualityId",
        as: "quality",
      });

      Item.hasMany(models.MerchantInventory, {
        foreignKey: "itemId",
        as: "inventoryEntries",
      });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    quantityFormula: DataTypes.STRING,
    source: DataTypes.STRING,
    notes: DataTypes.TEXT,
    shopTypeId: DataTypes.INTEGER,
    merchantQualityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};