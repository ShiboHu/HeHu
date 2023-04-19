'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Main_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Main_Category.hasMany(models.Sub_Category, {foreignKey: 'maincategoryId',onDelete: 'CASCADE',  hooks: true})
    }
  }
  Main_Category.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Main_Category',
  });
  return Main_Category;
};
