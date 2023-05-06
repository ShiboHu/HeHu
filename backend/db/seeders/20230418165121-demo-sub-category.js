'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Sub_Categories';
    return queryInterface.bulkInsert(options, [
      { 
        name: 'Hoodies',
        maincategoryId: 1,
        image: '../../images/hoodie.jpg'
      },
      { 
        name: 'T-shirts',
        maincategoryId: 1,
        image: '../images/tshirt.jpg'
      },
      { 
        name: 'Pants',
        maincategoryId: 1,
        image: '.././images/pants.jpg'
      },
      { 
        name: 'Dresses',
        maincategoryId: 1,
        image: './images/dresses.jpg'
      },
      { 
        name: 'Hats',
        maincategoryId: 1,
        image: '../images/hat.jpg'
      },
      { 
        name: 'Jewlry',
        maincategoryId: 1,
        image: '/images/jew.jpg'
      },
      { 
        name: 'Phone',
        maincategoryId: 2,
        image: 'https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg'
      },
      { 
        name: 'Labtop',
        maincategoryId: 2,
        image: 'https://img.freepik.com/premium-vector/labtop-monitor-mouse-isometric-vector-mockup_650923-64.jpg?w=2000'
      },
      { 
        name: 'PC',
        maincategoryId: 2,
        image: 'https://www.datocms-assets.com/34299/1678229956-playertwo-hero-white.png?auto=format&fit=max&w=1200'
      },
      { 
        name: 'Gaming',
        maincategoryId: 2,
        image: 'https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?crop=1.00xw:0.753xh;0,0.0831xh&resize=1200:*'
      },
      { 
        name: 'Headphones',
        maincategoryId: 2,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3Y2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420157712'
      },
      { 
        name: 'TV',
        maincategoryId: 2,
        image: 'https://www.esferize.com/wp-content/uploads/2021/11/metaball_3d-retro-tv-2.jpg'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sub_Categories');
  }
};
