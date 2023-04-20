"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async(queryInterface, Sequelize) => {
    options.tableName = 'Comments'
    return queryInterface.createTable(options, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Items',

        },
        onDelete: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Users',
        }
      },
      rating: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    options.tableName = 'Comments'
    await queryInterface.dropTable(options);
  }
};
