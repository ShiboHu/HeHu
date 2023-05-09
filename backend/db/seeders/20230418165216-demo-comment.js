'use strict';
const { faker } = require('@faker-js/faker');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
      { 
        userId: faker.datatype.number({min:1, max:10}),
        image: "https://farmingsmiles.com/wp-content/uploads/2017/09/photo-placeholder.jpg",
        itemId: faker.datatype.number({min:1, max:10}),
        comment: faker.lorem.sentence(),
        rating: faker.datatype.number({min:1, max:5})
      },    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments');
  }
};
