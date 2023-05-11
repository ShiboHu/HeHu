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


 router.get('/:mainId', async (req, res) => {
    const allSub = await Sub_Category.findAll({
      where: {
        maincategoryId: req.params.mainId
      },
      include: {
        model: Item
      }
    })
  
    const itemData = await Promise.all(
      allSub.map(async (sub) => {
        const itemPromises = sub.dataValues.Items.map(async (item) => {
          const comments = await Comment.findAll({
            where: {
              itemId: item.id
            }
          })
  
          const avgRating =
            comments.reduce((acc, comment) => acc + comment.rating, 0) /
              comments.length || 0
  
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image,
            price: item.price,
            stocks: item.stocks,
            commentLength: comments.length,
            avgRating
          }
        })
  
        const items = await Promise.all(itemPromises)
        return items
        
      })
    )
  
    return res.json(itemData)
  })
  

module.exports = router;
