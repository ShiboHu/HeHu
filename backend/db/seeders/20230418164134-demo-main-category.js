'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Main_Categories';
    return queryInterface.bulkInsert(options, [
      { 
        name: 'Clothing & Accessories'
      },
      { 
        name: 'Electronics'
      }   
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Main_Categories');
  }
};
