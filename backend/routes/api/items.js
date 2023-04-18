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


module.exports = router;
 
