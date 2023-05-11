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
        name: 'Laptop',
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
      { 
        name: 'Action',
        maincategoryId: 3,
        image: 'https://www.rollingstone.com/wp-content/uploads/2021/06/ACTION-FMOIVES_WEB-1.jpg'
      },
      { 
        name: 'Horror',
        maincategoryId: 3,
        image: 'https://www.themarysue.com/wp-content/uploads/2022/06/scream-5-promo-poster.jpg?resize=1200%2C675'
      },
      { 
        name: 'Funny',
        maincategoryId: 3,
        image: 'https://dictionaryblog.cambridge.org/wp-content/uploads/2019/11/funny.jpg'
      },
      { 
        name: 'Inspirational ',
        maincategoryId: 3,
        image: 'https://www.teachwire.net/wp-content/uploads/2019/04/Drama-games.jpg'
      },
      { 
        name: 'Adventure',
        maincategoryId: 3,
        image: 'https://thecinemaholic.com/wp-content/uploads/2017/08/jurassic-fallen-kingdom-trailer-1-970.jpg'
      },
      { 
        name: 'Science fiction',
        maincategoryId: 3,
        image: 'https://cdn.britannica.com/09/92009-050-122EC720/Enterprise-from-Star-Trek-III-The-Search.jpg'
      },
      { 
        name: 'Groceries ',
        maincategoryId: 4,
        image: 'https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg'
      },
      { 
        name: 'Burgers',
        maincategoryId: 4,
        image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'
      },
      { 
        name: 'Pizza',
        maincategoryId: 4,
        image: 'https://popmenucloud.com/cdn-cgi/image/width=640,height=640,format=png,fit=scale-down/yndcmrjo/f863f9ac-54ba-4c74-8253-0297e22eda16.jpg'
      },
      { 
        name: 'Chips',
        maincategoryId: 4,
        image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/chips-2.jpg?quality=82&strip=1'
      },
      { 
        name: 'IceCream',
        maincategoryId: 4,
        image: 'https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg'
      },
      { 
        name: 'Chocolate',
        maincategoryId: 4,
        image: 'https://www.thespruceeats.com/thmb/FhHcgQni8lgV0griUeDJMTAszxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sub_Categories');
  }
};
