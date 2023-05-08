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
        image: 'https://cdn.shopify.com/s/files/1/0190/1390/products/U501994-CTT-ABL_Organic_Cotton_Terry_Hoodie_Air_Blue_073_XhqH7gG_1800x.jpg?v=1675263910'
      },
      { 
        name: 'T-shirts',
        maincategoryId: 1,
        image: 'https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg'
      },
      { 
        name: 'Pants',
        maincategoryId: 1,
        image: 'https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg'
      },
      { 
        name: 'Dresses',
        maincategoryId: 1,
        image: 'https://ae01.alicdn.com/kf/H84b30d84986a4fb9ba779c2c0eb7b639w/5-Designs-Burgundy-Evening-Dresses-Long-Elegant-Spaghetti-Celebrity-Dresses-Women-Sexy-Prom-Dresses-Crystals-Vestidos.jpg_640x640.jpg'
      },
      { 
        name: 'Hats',
        maincategoryId: 1,
        image: 'https://www.byrdie.com/thmb/sBKAT2BYjG7XPHE2MIXwp92LoFc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byrdie-best-trucker-hats-tout-2c2455fad4484cb79224f9f985d6a75a.jpg'
      },
      { 
        name: 'Jewlry',
        maincategoryId: 1,
        image: 'https://cache.net-a-porter.com/content/images/story-head-content-15thAugust2022-1660549922781.jpeg/w1900_q65.jpeg'
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
