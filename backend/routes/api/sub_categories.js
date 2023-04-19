const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item } = require('../../db/models');



//get all sub_cateogries;
router.get('/', async (req, res) => { 
    const allSub = await Sub_Category.findAll({ attributes: ['id', 'name'] });

    return res.json(allSub);
})


module.exports = router;
