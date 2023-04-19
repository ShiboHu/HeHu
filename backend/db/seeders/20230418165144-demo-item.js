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
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 3
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
