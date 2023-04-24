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
      Item.belongsTo(models.Sub_Category, {foreignKey: 'subcategoryId'})
      Item.belongsTo(models.User, {foreignKey: 'sellerId'})
      Item.hasMany(models.Comment, {foreignKey: 'itemId', onDelete: 'CASCADE',  hooks: true})
      Item.hasMany(models.Like, {foreignKey: 'itemId', onDelete: 'CASCADE',  hooks: true})
      Item.belongsToMany(models.Cart, {through: models.Cart_Item, foreignKey:'itemId'})
    }
  }
  Item.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    sellerId : { 
      type: DataTypes.INTEGER,
      allowNull: false,
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
    subcategoryId:{ 
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
