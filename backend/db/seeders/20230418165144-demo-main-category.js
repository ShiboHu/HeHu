'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Main_Categories';
    return queryInterface.bulkInsert(options, [
      { 
        name: faker.lorem.word()
      },
      { 
        name: faker.lorem.word()
      },
      { 
        name: faker.lorem.word()
      },
      { 
        name: faker.lorem.word()
      },
      { 
        name: faker.lorem.word()
      },
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Main_Categories');
  }
};
