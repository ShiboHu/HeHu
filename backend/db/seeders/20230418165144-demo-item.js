'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}




module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Items';
    const fakeproduct = async () => {
      const products = [];
    
      for (let i = 0; i < 15; i++) {
        const fetch = await import('node-fetch').then(m => m.default);
        const response = await fetch(`https://fakestoreapi.com/products/${i}`);
    
        try {
          const data = await response.json();
          products.push(data);
        } catch (error) {
          console.error(`Error parsing JSON for product ${i}:`, error);
        }
      }
    
      return products;
    };
    const products = await fakeproduct();
    return queryInterface.bulkInsert(options, [
      { 
        name: faker.lorem.word(),
        description: products[0].description,
        price: faker.random.numeric(2), 
        image: products[0].image,
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
