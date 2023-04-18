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
      Item.belongsTo(models.User, {foreignKey: 'seller_id'})
      Item.hasMany(models.Comment, {foreignKey: 'item_id', onDelete: 'CASACDE'})
      Item.hasMany(models.Like, {foreignKey: 'item_id', onDelete: 'CASACDE'})
      Item.belongsTo(models.Cart, {foreignKey: 'item_id'})
      Item.belongsTo(models.Sub_Category, {foreignKey: 'subcategory_id'})
    }
  }
  Item.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    seller_id : { 
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: { 
     type: DataTypes.INTEGER,
     allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stocks: { 
     type: DataTypes.INTEGER,
     allowNull: false 
    },
    subcategory_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
