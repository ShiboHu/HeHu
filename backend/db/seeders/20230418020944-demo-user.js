'use strict';
const bcrypt = require("bcryptjs");
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    // const Op = Sequelize.Op;
    // return queryInterface.bulkDelete(options, {
    //   username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }, {});
    return queryInterface.bulkDelete('Users')
  }
};
