'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Carts';
    return queryInterface.bulkInsert(options, [
      { 
        userId: 1,
        itemId: 1,
      },
      { 
        userId: 1,
        itemId: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Carts';
    return queryInterface.bulkDelete(options);
  }
};
