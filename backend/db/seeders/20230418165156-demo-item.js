'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Items';
    return queryInterface.bulkInsert(options, [
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 3
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 3
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.food(),
        stocks: faker.random.numeric(3),
        seller_id: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Items';
    return queryInterface.bulkDelete(options);
  }
};
