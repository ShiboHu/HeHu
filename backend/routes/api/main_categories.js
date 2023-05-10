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


 router.get('/:mainId', async (req,res) => { 
    const allSub = await Sub_Category.findAll({ 
        where: { 
            maincategoryId: req.params.mainId
        },
        include: { 
            model: Item
        }
    })

    return res.json(allSub)
 })

module.exports = router;
