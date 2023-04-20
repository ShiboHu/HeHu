const express = require('express');
const router = express.Router();

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item, sequelize} = require('../../db/models');



//get all items
router.get('/', async (req, res) => {
    const allItems = await Item.findAll();
  
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


//update item
router.put('/:itemId', async(req, res) => { 
    const {
        name, 
        description, 
        price, 
        image, 
        stocks, 
        subcategoryId
       } = req.body;

    const item = await Item.findByPk(req.params.itemId)

    if(!item){ 
        res.status(404)
        return res.json({ 
            message: 'Item not found',
            statusCode: 404
        })
    }

    const updatedItem = await item.update({ 
        name, 
        description,
        price,
        image,
        stocks,
        subcategoryId
    }) 

    return res.json(updatedItem)
})


//Delete item
router.delete('/:itemId', async (req, res) => { 
    const item = await Item.findByPk(req.params.itemId);

    if(!item){
        res.status(404)
        return res.json({ 
            message: 'Item not found',
            statusCode: 404
        })
    }

    await item.destroy();

    res.json({ 
        message: 'Successfully deleted',
        statusCode: 200
    })
})


//get item of the current user
router.get('/item/current', async (req, res) => { 
    const item = await Item.findAll({ 
        where: { 
            sellerId: req.user.id
        }
    })

    if(!item){ 
        res.status(400)
        return res.json({
            message: 'You dont have any items',
            statusCode: 400
        })
    }

    return res.json(item)
})


module.exports = router;
 
