const express = require('express');
const router = express.Router();

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item } = require('../../db/models');


//get all main_cateogries;
router.get('/', async (req, res) => { 
    const allMain = await Main_Category.findAll({ 
        attributes: ['id', 'name'],
     });

    return res.json(allMain);
 })


module.exports = router;
