'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Cart_Items';
    return queryInterface.bulkInsert(options, [
      { 
        cartId: 1,
        itemId: 1,
        quantity: 2
      },
      { 
        cartId: 1,
        itemId: 2,
        quantity: 5
      },
      { 
        cartId: 1,
        itemId: 3,
        quantity: 2
      },
      { 
        cartId: 2,
        itemId: 1,
        quantity: undefined
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cart_Items');
  }
};
