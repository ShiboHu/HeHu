'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Cart, {foreignKey: 'cartId'})
    }
  }
  Order.init({
    cartId: { 
     type: DataTypes.INTEGER,
     allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
