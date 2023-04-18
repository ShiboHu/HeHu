'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Likes';
    return queryInterface.bulkInsert(options, [
      { 
        user_id: 1,
        item_id: 1,
      },
      { 
        user_id: 1,
        item_id: 2,
      },
      { 
        user_id: 2,
        item_id: 1,
      },
      { 
        user_id: 3,
        item_id: 1,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Likes';
    return queryInterface.bulkDelete(options);
  }
};
