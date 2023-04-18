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
        user_id: 1,
        item_id: 1,
      },
      { 
        user_id: 1,
        item_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Carts';
    return queryInterface.bulkDelete(options);
  }
};
