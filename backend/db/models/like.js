'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, {foreignKey: 'userId'})
      Like.belongsTo(models.Item, {foreignKey: 'itemId', onDelete:'CASCADE'})
    }
  }
  Like.init({
    itemId: { 
      type:DataTypes.INTEGER,
      allowNull: false 
    },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
