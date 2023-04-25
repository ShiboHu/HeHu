'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {foreignKey: 'userId'})
      Comment.belongsTo(models.Item, {foreignKey: 'itemId', onDelete: 'CASCADE'})
    }
  }
  Comment.init({
    comment: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    itemId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
