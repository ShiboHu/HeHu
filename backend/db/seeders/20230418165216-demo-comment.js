'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      { 
        user_id: 1,
        image: faker.image.food(),
        item_id: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        user_id: 2,
        image: faker.image.food(),
        item_id: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        user_id: 1,
        image: faker.image.food(),
        item_id: 2,
        comment: faker.lorem.sentence(),
        rating: 4
      },
      { 
        user_id: 1,
        image: faker.image.food(),
        item_id: 2,
        comment: faker.lorem.sentence(),
        rating: 4
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options);
  }
};
