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
        purchased: false
      },
      { 
        userId: 2,
        purchased: false
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts');
  }
};
