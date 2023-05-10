const express = require('express'); 
const router = express.Router(); 

const { Item, Comment} = require('../../db/models')
const { Op } = require('sequelize')

router.get('/:keyword', async (req, res) => {
    const lowerWord = req.params.keyword.toLowerCase();
  
    const allItems = await Item.findAll({
      where: {
        name: {
          [Op.like]: `%${lowerWord}%`
        }
      },
    });
    
    const itemData = await Promise.all(allItems.map(async (item) => {

      const comments = await Comment.findAll({
         where:{ 
            itemId: item.id 
        } 
    });
      const avgRating = comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length || 0;
  
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price,
        stocks: item.stocks,
        commentLength:comments.length,
        avgRating,
      };
    }));
  
    return res.json(itemData);
  });



module.exports = router
