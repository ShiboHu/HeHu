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
        image: "https://media.istockphoto.com/id/1254474165/photo/tropical-leaves-abstract-green-leaves-texture-nature-background.jpg?s=612x612&w=0&k=20&c=UQ7bV5XZ5Zeg4Lj5uQlg1FOlhZfmZpJirot754UVXWU=",
        itemId: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        userId: 2,
        image: "https://media.istockphoto.com/id/1254474165/photo/tropical-leaves-abstract-green-leaves-texture-nature-background.jpg?s=612x612&w=0&k=20&c=UQ7bV5XZ5Zeg4Lj5uQlg1FOlhZfmZpJirot754UVXWU=",
        itemId: 1,
        comment: faker.lorem.sentence(),
        rating: 2
      },
      { 
        userId: 1,
        image: "https://media.istockphoto.com/id/1254474165/photo/tropical-leaves-abstract-green-leaves-texture-nature-background.jpg?s=612x612&w=0&k=20&c=UQ7bV5XZ5Zeg4Lj5uQlg1FOlhZfmZpJirot754UVXWU=",
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
