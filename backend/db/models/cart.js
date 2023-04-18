'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      Cart.belongsTo(models.User, {foreignKey: 'userId'})
      Cart.belongsToMany(models.Item, {through: models.Cart_Item})
      Cart.hasMany(models.Cart_Item, {foreignKey: 'cartId'})

    }
  }
  Cart.init({
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemId: { 
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    quantity:{ 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
