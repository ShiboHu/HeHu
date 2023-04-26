const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');

const { Item, User, Comment,} = require('../../db/models');
const { singleFileUpload, singleMulterUpload } = require('../../awsS3');



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
        },
        include: { 
            model: Comment,
            attributes: ['userId', 'rating', 'comment', 'image'],
            include: { 
                model: User,
                attributes: ['username']
            }
        }
    })

    if(!item){ 
        res.status(404);
        return res.json({ 
            message: 'Item not found',
            statusCode: 404
        })
    }
    

    const sum = item.Comments.reduce((acc, comment) => acc + comment.rating, 0);
    const avgRating = sum / item.Comments.length;

    const itemWithAvgRating = {
        ...item.toJSON(),
        avgRating,
    };

    return res.json(itemWithAvgRating);
});


//current user create item
router.post('/', requireAuth, singleMulterUpload('image'), async (req, res) => { 
    const {
           name, 
           description, 
           price, 
           stocks, 
           subcategoryId
          } = req.body;

    const image = req.file ? 
          await singleFileUpload({file: req.file, public: true}): 
          null

    const newItem = await Item.create({ 
        name,
        sellerId: req.user.id,
        description, 
        price,  
        stocks, 
        image,
        subcategoryId  
    })

    res.status(201);
    return res.json(newItem);
})


//update item
router.put('/:itemId', requireAuth, async(req, res) => { 
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
router.delete('/:itemId', requireAuth, async (req, res) => { 
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
router.get('/item/current',requireAuth, async (req, res) => { 
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
 
