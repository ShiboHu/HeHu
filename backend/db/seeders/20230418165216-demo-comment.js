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
        userId: 1,
        image: faker.image.food(),
        itemId: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        userId: 2,
        image: faker.image.food(),
        itemId: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        userId: 1,
        image: faker.image.food(),
        itemId: 2,
        comment: faker.lorem.sentence(),
        rating: 4
      },
      { 
        userId: 1,
        image: faker.image.food(),
        itemId: 2,
        comment: faker.lorem.sentence(),
        rating: 4
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments');
  }
};
