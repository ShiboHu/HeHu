const express = require('express');
const router = express.Router();

const { 
      Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item
      } = require('../../db/models');



router.get('/', async (req, res) => { 
    const allItems = await Item.findAll({ 
       include: Cart_Item
    });

    return res.json(allItems);
})


module.exports = router;
 
