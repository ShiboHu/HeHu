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
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/df41754d8209908226a5bb6f92d6668c.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3c85072504f2217dc6f6361e9af5c8ba.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/fde3a0479b2dff52f7c243cd56a67441.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4d3785e820eefee59a09bd1884d6678f.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/enhanced_images/0691c36e1b46fd856e206c05217798c7_enhanced.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/117d51e3fe5acf3bd60737f9e6f56316.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3086c7cb6be25ed1bd2df03149a70591.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d14c6c0000/13fd824b-7c9e-4c38-8e29-ca84caa456c5_1339x1785.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e5ad915ce92302936d446cf68646d4f.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/74f03c23d405344d65c9fe8dd0b0f515.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/381a8fea5aa6e22c99a512a5efc69500.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/open/2022-11-15/1668483505243-b35acbda09644df084ac1f566ccdd43d-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c1ae7fc53fbf615769c3297d9a610c7c.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 'hoodies' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5dae67aba98df22193c36f1fbaff28f4.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 1
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/42350fd015101f3c13e989df0958a8e3.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/26e2c5d757eb433ede3874c9605a0321.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1c0d913b3c4141f53679a000d0eb2bfb.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/da2335f75a4a9ea71e2500a0e5e943bb.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/152ddf00aa09ec2aed33142616230fc2.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/127c4c9a5fa93d8d8c5497a36afb030e.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/950683746d82629d73015c15d964a9dd.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9bf47e3e928ee9e07ab8376875cde971.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/2f5b80af96c9db1367bf7d1d87fd515a.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1c5830182707b20761acb4aeb1d2403b.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4a66c6d0938a4cd96f926f8dcf343f89.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f066571033f4f8520109921b53bb058d.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/aaf188dbeaadd00e944fd306ada416ab.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 't-shirts' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bbcbff4481acbe63165bca668b6f1ed0.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 2
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d4e47ef56c937394fee8300de9d1728d.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/273c7e73bf1e2fffe90f0de0bd8f83ad.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/80c110252357dab60d4ecbe3ff35cc42.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/aad812a48393d819f9123fd8d56ac4e9.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4ab5efa1d4ea43242b9cdb218ee0c77f.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/668a5309e5bf5557dc1daa026c9db15b.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'pants' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/enhanced_images/6de9748bf0ccc0dda785e4162a8cd631_enhanced.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 3
      },
      { 
        name: 'dresses' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/open/2023-02-26/1677393847780-ca97505a4d7b4feb88f6020e6f3a8654-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 4
      },
      { 
        name: 'dresses' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d838ba32df08c16cac095cf4ec0c9886.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 4
      },
      { 
        name: 'dresses' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4c25d29e06d43ff4229cf44c064aed07.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 4
      },
      { 
        name: 'dresses' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3da376288709f529a4b58f05ac2dc324.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 4
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/e52b1d4c46c6afc5220210e7f9ad871d.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d65863ffc/214f0bc5-77a5-4281-8c74-5e71eaa59576_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d65863ffc/7f701079-59ae-455e-8445-7d37938ecda4_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d65863ffc/7f701079-59ae-455e-8445-7d37938ecda4_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d65863ffc/c2b4bfa8-4622-4830-856d-db35c4a47b1b_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1dec4a0fc0/84e820db-d62f-4e81-83a2-d1b0f65e1253_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'hat' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1dec4a0fc0/7d1bd68f-c948-4188-b057-a26a6536894b_800x800.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 5
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ae8a6228b12231026c796b749044f9bf.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3128e19ab25b8a47e7ad19aa22e845cd.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d14c6c0898/7bcc6b70-08c7-48c8-b834-090902ec4da5_1200x1200.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b69112de9f16a286560eb79af3ee1e0b.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/dc3400bb78203b752721b6d155400335.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelry' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/dc3400bb78203b752721b6d155400335.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://www.pointekonline.com/wp-content/uploads/2021/10/iphone-13-pro.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://jabko.ua/image/cache/catalog/products/2022/04/041252/iphone-13-pro-max-green-select%20(1)-1397x1397.jpg.webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pro-max-gold-2023?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1679072988850',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://www.pointekonline.com/wp-content/uploads/2021/10/iphone-13-pro.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://jabko.ua/image/cache/catalog/products/2022/04/041252/iphone-13-pro-max-green-select%20(1)-1397x1397.jpg.webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'phone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pro-max-gold-2023?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1679072988850',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 7
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/61Q1sy6nlBL.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/717Wz1EAR5L._AC_UF894,1000_QL80_.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6496/6496176_sd.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4a3jEJXCSxJ-qa2sSwaeDLznc5jotxXQcK7rNhS3qHBuiDQZIZu2pIO_sDy6jfwNl_Y0RRLGHYw&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/61Q1sy6nlBL.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/717Wz1EAR5L._AC_UF894,1000_QL80_.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6496/6496176_sd.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'labtop' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4a3jEJXCSxJ-qa2sSwaeDLznc5jotxXQcK7rNhS3qHBuiDQZIZu2pIO_sDy6jfwNl_Y0RRLGHYw&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 8
      },
      { 
        name: 'pc' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurIHEBaKHYN3sOhoN3y9oY7SPoQnsSiYl_xk9t0JE37hENHwDC0te0dKJowpgLQlwMpVBo50c2gI&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 9
      },
      { 
        name: 'pc' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurIHEBaKHYN3sOhoN3y9oY7SPoQnsSiYl_xk9t0JE37hENHwDC0te0dKJowpgLQlwMpVBo50c2gI&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 9
      },
      { 
        name: 'gaming console PS5' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://prod.assets.earlygamecdn.com/images/PS5-Slim.png?transform=banner2x_webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 10
      },
      { 
        name: 'gaming console Xbox' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 10
      },
      { 
        name: 'gaming console Nintendo' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://assets-prd.ignimgs.com/2022/08/02/nintendoswitch-1659466481397.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 10
      },
      { 
        name: 'gaming console PS4' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/6118ctEjpoL._AC_UF894,1000_QL80_.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 10
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3X2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420156213',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/61LJlnBbaZL._AC_UF894,1000_QL80_.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://cdn11.bigcommerce.com/s-k11cg5mzh9/products/326/images/109890/f700e6406b0af5dad48dfd17c1d516fecb0d8571c6b887b8a95c0571b6f1ae98__44867.1674499735.500.750.png?c=2',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3Y2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1580420157712',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://m.media-amazon.com/images/I/61TaJLNZDKL._AC_SY450_.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'headphone' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604686090000',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 11
      },
      { 
        name: 'tv' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/crystal-uhd/tu7000-series/gallery/PDP-GALLERY-TU7000-10-Front2-Titan-Gray-1600x1200.jpg?$product-details-jpg$',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 12
      },
      { 
        name: 'tv' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://media.currys.biz/i/currysprod/M10222287?$l-large$&fmt=auto',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 12
      },
      { 
        name: 'tv' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(3), 
        image: 'https://media.currys.biz/i/currysprod/M10222287?$l-large$&fmt=auto',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 12
      },
      { 
        name: 'action movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://external-preview.redd.it/RsBk-jCROKvdN5at1L3ofUHLW7NsVfTkvlxWk50RNH8.jpg?width=640&crop=smart&auto=webp&s=7a5ce0ba332eb14c0d173cef57a1343cbd831ceb',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 13
      },
      { 
        name: 'action movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i.pinimg.com/736x/c3/e2/a6/c3e2a6ebd139c71215884490e9d51cc0.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 13
      },
      { 
        name: 'action movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://assets-prd.ignimgs.com/2022/01/13/uncharted-newbutton-1642092379328.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 13
      },
      { 
        name: 'action movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/best-action-movies-men-in-black-1675268264.jpeg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 13
      },
      { 
        name: 'action movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Endgame-Vintage-Movie-Poster-Original-1-Sheet-27x41_2460ec70-8e57-4fe3-b262-9b7df22ff46c_grande.jpg?v=1671051939',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 13
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://m.media-amazon.com/images/I/81wCw2O7bhS.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.designcontest.com/blog/wp-content/uploads/2017/10/conjuring_ver2.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.filmposters.com/images/posters/13828.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://cdn.shopify.com/s/files/1/0969/9128/products/TheConjuring2-HollywoodEnglishHorrorMoviePoster_3ccbd106-c2e2-4e6d-9d87-4e2cc7a6b28d.jpg?v=1625220800',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://kiranjitchanamediahome.files.wordpress.com/2019/02/canva-monochrome-horror-movie-poster-macgp3s1byu.jpg?w=1100',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'horror movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNOhwr_NhpL02zH3DirsLk1fxrYp3THK0MDoy1R0qJDdL6wjXKuqmuhyoYjMQGO4MkDbWT0TBq-Q&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 14
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i.ebayimg.com/images/g/zk0AAOSwgwNf7Zgu/s-l500.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/despicable-me-1533222068.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/ice-age-1529429511.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.hoodmwr.com/wp-content/uploads/2022/10/image_2022-10-16_192527204.png',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i.ebayimg.com/images/g/zk0AAOSwgwNf7Zgu/s-l500.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/despicable-me-1533222068.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/ice-age-1529429511.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'funny movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.hoodmwr.com/wp-content/uploads/2022/10/image_2022-10-16_192527204.png',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 15
      },
      { 
        name: 'inspirational movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://wp.scoopwhoop.com/wp-content/uploads/2023/03/shawshank.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 16
      },
      { 
        name: 'inspirational movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSYGB9x74o0tmG-cI5a8X0gSXCwTDSHHE_Qscv6pCjxdmGpJ0pB2zOTvY8mZxAi4Vdxk66r7yn7U&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 16
      },
      { 
        name: 'inspirational movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://beebom.com/wp-content/uploads/2022/10/Forrest-Gump.jpg?w=384',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 16
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-01-08-at-2-12-55-pm-1610133207.png',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://images.saymedia-content.com/.image/t_share/MTg3OTY1NTY5MzY0OTI4Mjk4/best-adventure-movies-2000s.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://cdn-2.cinemaparadiso.co.uk/2004150355231_l.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://static.toiimg.com/photo/18708279.cms?imgsize=152994',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.listchallenges.com/f/items2020/99467a58-bc24-44f4-84ad-174b5e867596.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'adventure movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://moviesfilmsandflix.files.wordpress.com/2011/08/rise-of-the-planet-of-the-apes11.jpg?w=584',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 17
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bnje5mzywmzyxmf5bml5banbnxkftztcwotk4mtk0oqatat-v1-1589311083.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bnje5mzywmzyxmf5bml5banbnxkftztcwotk4mtk0oqatat-v1-1589311083.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://trailers.apple.com/trailers/lions_gate/moonfall/images/poster_2x.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bmjaxmzy3njcxnf5bml5banbnxkftztcwnti5otm0mwatat-v1-sy1000-cr0-0-675-1000-al-1589813655.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bmtywotewnjazml5bml5banbnxkftztcwodc5mtuwmwatat-v1-1589309872.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'Science fiction movie' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bmtywotewnjazml5bml5banbnxkftztcwodc5mtuwmwatat-v1-1589309872.jpg?resize=480:*',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 18
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.thespruceeats.com/thmb/l1_lV7wgpqRArWBwpG3jzHih_e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-are-grapes-5193263-hero-01-80564d77b6534aa8bfc34f378556e513.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/08/Orange-vegetables.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGJ7QvcdpvHkWDbktFobcRIJQ2GfvfmHLKhiO3kWX9Q&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://veggiedesserts.com/wp-content/uploads/2022/03/daikon-radish-sm.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_1200,h_800,g_auto,q_90,fl_lossy,f_jpg/org/dkki1qjokjwi3qckm.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'groceries' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://perceptioneyecare.ca/wp-content/uploads/2021/03/apr-kale-1024x683.jpeg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 19
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://ik.imagekit.io/f1tbnvfi2o/product/getimg1656503696001Chicken-Cheese-Burger.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx43A5n5x5GJ1sq39cvi5ucty08AMNJGHaIbXYV54Jg&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hsaa.hsobjects.com/h/menuitems/images/011/627/369/6ee0dd4b9b7876baf336b3b2f0ebda20-size1200.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQOPN4i2dZt3kPXgx59Im1vs_NZss0U5qC_D91KaVdw&usqp=CAU&ec=48665699',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hospibuz.com/wp-content/uploads/2022/08/Jumbo-Royale-Chicken-Burger_-Leon-Grill--scaled.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hospibuz.com/wp-content/uploads/2022/08/Jumbo-Royale-Chicken-Burger_-Leon-Grill--scaled.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'burger' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://hospibuz.com/wp-content/uploads/2022/08/Jumbo-Royale-Chicken-Burger_-Leon-Grill--scaled.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 20
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/k/h/p55-1493903624590b2908cb9b0.jpg?tr=tr:n-xlarge',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'pizza' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/k/h/p55-1493903624590b2908cb9b0.jpg?tr=tr:n-xlarge',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 21
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://m.media-amazon.com/images/I/813axPlVxBL.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://pics.walgreens.com/prodimg/597671/900.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.kroger.com/product/images/large/front/0075752804537',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://m.media-amazon.com/images/I/81mABE1sNhL.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i5.walmartimages.com/asr/6c6ec6ff-e85d-4f71-8be2-d96e1db622d5.01f32bf5b973212349032710ecde9ad5.jpeg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.kroger.com/product/images/large/front/0075752804537',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://m.media-amazon.com/images/I/81mABE1sNhL.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'chips' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i5.walmartimages.com/asr/6c6ec6ff-e85d-4f71-8be2-d96e1db622d5.01f32bf5b973212349032710ecde9ad5.jpeg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 22
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://ibexpackaging.com/wp-content/uploads/2022/06/Ice-Cream-Packaging-Boxes-5.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/03/105451463.jpeg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://images.albertsons-media.com/is/image/ABS/970057716?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.liquidprinter.com/images/ice-cream-01.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://ibexpackaging.com/wp-content/uploads/2022/06/Ice-Cream-Packaging-Boxes-5.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/03/105451463.jpeg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://images.albertsons-media.com/is/image/ABS/970057716?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'icecream' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.liquidprinter.com/images/ice-cream-01.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 23
      },
      { 
        name: 'chocolates' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://cdn.shopify.com/s/files/1/0574/3280/1445/products/ImageProxy_b3edbc88-4be4-4b58-9fdd-7705a7846e64.jpg?v=1631907265',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 24
      },
      { 
        name: 'chocolates' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://i5.walmartimages.com/asr/8a6c37ba-10b6-4086-83ff-69546b6d9763_1.cb436dc85d82bda35cafa9f7b8ec7631.png',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 24
      },
      { 
        name: 'chocolates' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://www.tastingtable.com/img/gallery/the-victorian-era-origin-of-heart-shaped-chocolate-boxes/l-intro-1675434396.jpg',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 24
      },
      { 
        name: 'chocolates' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://cdn.shopify.com/s/files/1/1120/9400/products/michel-cluizel-48-piece-chocolate-gift-box-mixed-open.png?v=1674757111',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 24
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
