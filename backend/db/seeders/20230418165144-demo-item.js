'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const image =  async () => { 
  const newImage = await fetch('https://fakestoreapi.com/products/1')

  return 
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Items';
    return queryInterface.bulkInsert(options, [
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/enhanced_images/0691c36e1b46fd856e206c05217798c7_enhanced.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/df41754d8209908226a5bb6f92d6668c.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3c85072504f2217dc6f6361e9af5c8ba.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/fde3a0479b2dff52f7c243cd56a67441.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4d3785e820eefee59a09bd1884d6678f.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/enhanced_images/0691c36e1b46fd856e206c05217798c7_enhanced.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/117d51e3fe5acf3bd60737f9e6f56316.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3086c7cb6be25ed1bd2df03149a70591.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d14c6c0000/13fd824b-7c9e-4c38-8e29-ca84caa456c5_1339x1785.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e5ad915ce92302936d446cf68646d4f.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/74f03c23d405344d65c9fe8dd0b0f515.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/381a8fea5aa6e22c99a512a5efc69500.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/open/2022-11-15/1668483505243-b35acbda09644df084ac1f566ccdd43d-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c1ae7fc53fbf615769c3297d9a610c7c.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5dae67aba98df22193c36f1fbaff28f4.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 1
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/42350fd015101f3c13e989df0958a8e3.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/26e2c5d757eb433ede3874c9605a0321.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1c0d913b3c4141f53679a000d0eb2bfb.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/da2335f75a4a9ea71e2500a0e5e943bb.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/152ddf00aa09ec2aed33142616230fc2.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/127c4c9a5fa93d8d8c5497a36afb030e.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/950683746d82629d73015c15d964a9dd.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9bf47e3e928ee9e07ab8376875cde971.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/2f5b80af96c9db1367bf7d1d87fd515a.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1c5830182707b20761acb4aeb1d2403b.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4a66c6d0938a4cd96f926f8dcf343f89.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f066571033f4f8520109921b53bb058d.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/aaf188dbeaadd00e944fd306ada416ab.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bbcbff4481acbe63165bca668b6f1ed0.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:3}),
        subcategoryId: 2
      },
 
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
