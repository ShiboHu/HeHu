'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Sub_Categories';
    return queryInterface.bulkInsert(options, [
      { 
        name: 'Hoodies',
        maincategoryId: 1
      },
      { 
        name: 'Sweat Shirt',
        maincategoryId: 1
      },
      { 
        name: 'Phone',
        maincategoryId: 2
      },
      { 
        name: 'Tees',
        maincategoryId: 1
      },
      { 
        name: 'Lawn Care',
        maincategoryId: 3
      },
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sub_Categories');
  }
};
