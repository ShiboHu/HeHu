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
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: faker.image.imageUrl(),
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
