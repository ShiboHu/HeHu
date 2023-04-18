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
        name: faker.lorem.word(),
        maincategory_id: 1
      },
      { 
        name: faker.lorem.word(),
        maincategory_id: 1
      },
      { 
        name: faker.lorem.word(),
        maincategory_id: 2
      },
      { 
        name: faker.lorem.word(),
        maincategory_id: 1
      },
      { 
        name: faker.lorem.word(),
        maincategory_id: 3
      },
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Sub_Categories';
    return queryInterface.bulkDelete(options);
  }
};
