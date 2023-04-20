'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sub_Category.hasMany(models.Item, {foreignKey: 'subcategoryId'})
      Sub_Category.belongsTo(models.Main_Category, {foreignKey: 'maincategoryId'})
    }
  }
  Sub_Category.init({
    name: { 
      type: DataTypes.STRING,
    },
    maincategoryId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Sub_Category',
  });
  return Sub_Category;
};
