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
      Like.belongsTo(models.User, {foreignKey: 'user_id'})
      Like.belongsTo(models.Item, {foreignKey: 'item_id'})
    }
  }
  Like.init({
    item_id: { 
      type:DataTypes.INTEGER,
      allowNull: false 
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
