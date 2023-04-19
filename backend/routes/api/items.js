const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item } = require('../../db/models');



//get all items
router.get('/', async (req, res) => { 
    const allItems = await Item.findAll({ 
        include: Comment,
        attributes: {
            include: [
                [Sequelize.literal('(SELECT AVG(rating) FROM Comments WHERE Comments.itemId = Item.id)'), 'avgRating']
              ]
        },
    });

    return res.json(allItems);
})


//get items by id
router.get('/:itemId', async (req, res) => { 
    const item = await Item.findOne({ 
        where: { 
            id: req.params.itemId
        },
        include:{ 
            model: User,
            attributes: ['username', 'id']
        }
    })

    if(!item){ 
        res.status(404);
        return res.json({ 
            message: 'Item not found',
            statusCode: 404
        })
    }
    

    return res.json(item);
});


//current user create item
router.post('/', async (req, res) => { 
    const {
           name, 
           description, 
           price, 
           image, 
           stocks, 
           subcategoryId
          } = req.body;

    const newItem = await Item.create({ 
        name,
        sellerId: req.user.id,
        description, 
        price, 
        image, 
        stocks, 
        subcategoryId  
    })

    res.status(201);
    return res.json(newItem);

})
module.exports = router;
 
