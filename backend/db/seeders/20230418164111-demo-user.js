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
        email: 'hushibo@gmail.com',
        username: 'hushibo123',
        hashedPassword: bcrypt.hashSync('hushibo123'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser42@user.io',
        username: 'FakeUser42',
        hashedPassword: bcrypt.hashSync('password2'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser43@user.io',
        username: 'FakeUser53',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser44@user.io',
        username: 'FakeUser54',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser45@user.io',
        username: 'FakeUser55',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser46@user.io',
        username: 'FakeUser56',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser47@user.io',
        username: 'FakeUser57',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser49@user.io',
        username: 'FakeUser59',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser72@user.io',
        username: 'FakeUser72',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
      {
        email: 'FakeUser35@user.io',
        username: 'FakeUser35',
        hashedPassword: bcrypt.hashSync('password3'),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        zipCode: 34212
      },
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
