"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Users',
          key: 'id'
        }
      },
      // itemId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { 
      //     model: 'Items',
      //     key: 'id'
      //   }
      // },
      // quantity: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   defaultValue: 1
      // },
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
  async down(queryInterface, Sequelize) {
    options.tableName = 'Carts'
    await queryInterface.dropTable(options);
  }
};
