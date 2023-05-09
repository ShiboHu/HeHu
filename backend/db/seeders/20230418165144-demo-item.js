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
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3da376288709f529a4b58f05ac2dc324.jpg?imageView2/2/w/800/q/70/format/webp',
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
        name: 'jewelery' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ae8a6228b12231026c796b749044f9bf.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelery' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3128e19ab25b8a47e7ad19aa22e845cd.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelery' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/1d14c6c0898/7bcc6b70-08c7-48c8-b834-090902ec4da5_1200x1200.jpeg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelery' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b69112de9f16a286560eb79af3ee1e0b.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
      { 
        name: 'jewelery' + faker.random.numeric(3),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2), 
        image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/dc3400bb78203b752721b6d155400335.jpg?imageView2/2/w/800/q/70/format/webp',
        stocks: faker.random.numeric(3),
        sellerId: faker.datatype.number({min:1, max:10}),
        subcategoryId: 6
      },
 
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items');
  }
};
