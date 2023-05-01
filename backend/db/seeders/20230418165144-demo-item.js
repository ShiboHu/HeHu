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
        image: 'https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg',
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
        image: 'https://i.imgur.com/SElLvAI_d.webp?maxwidth=520&shape=thumb&fidelity=high',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://i.imgur.com/ZZ9GZR9_d.webp?maxwidth=520&shape=thumb&fidelity=high',
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 3
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://i.imgur.com/uw7qPV7_d.webp?maxwidth=520&shape=thumb&fidelity=high',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://i.imgur.com/6KT0Alf_d.webp?maxwidth=520&shape=thumb&fidelity=high',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-970-80.jpg.webp',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://scx2.b-cdn.net/gfx/news/2016/57e3d4dbd417f.jpg',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://www.thoughtco.com/thmb/RcFtoMeUNGD9uN0LSeLolDoLKY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/smallerAndromeda-56a8ccf15f9b58b7d0f544fa.jpg',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://th-thumbnailer.cdn-si-edu.com/Oa5-BDp6qcarNc9yxAvKivfU6RI=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d1/27/d127ac61-a3f3-4a26-a4f4-f855de632580/phenom-endings-space-jan14.jpg',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 1
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://www.slashgear.com/img/gallery/is-there-a-center-of-the-universe/intro-1654456299.webp',
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://images.newscientist.com/wp-content/uploads/2022/01/10172214/PRI_217554656.jpg?width=900',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://press.princeton.edu/sites/default/files/styles/hero_square/public/image/2021-09/M16SHO.jpeg?itok=JOIyg1F5',
        stocks: faker.random.numeric(3),
        sellerId: 1,
        subcategoryId: 2
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://wallpapers.com/images/featured-full/universe-qs811igzbabl1m0o.jpg',
        stocks: faker.random.numeric(3),
        sellerId: 2,
        subcategoryId: 3
      },
      { 
        name: faker.lorem.word(),
        description: faker.lorem.sentences(2),
        price: faker.random.numeric(2), 
        image: 'https://media.hearstapps.com/loop/end-of-universe-6407768dd81b7.mp4/poster.jpg',
        stocks: faker.random.numeric(3),
        sellerId: 3,
        subcategoryId: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
