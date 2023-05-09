const express = require('express'); 
const router = express.Router(); 

const { Item } = require('../../db/models')
const { Op } = require('sequelize')

router.get('/:keyword', async (req, res) => {
    const lowerWord = req.params.keyword.toLowerCase();
  
    const filteredItems = await Item.findAll({
      where: {
        name: {
          [Op.like]: `%${lowerWord}%`
        }
      },
    });
    
    if(!filteredItems.length){ 
        return res.json({ 
            message: 'No items found'
        })
    }
    
    return res.json(filteredItems);
  });



module.exports = router
