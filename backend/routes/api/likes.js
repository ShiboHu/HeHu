const express = require('express'); 
const router = express.Router();

const { Item, User, Comment, Like } = require('../../db/models');



//get likes of current user
router.get('/current', async (req, res) => { 
    const likes = await Like.findAll({ 
        where: { 
            userId: req.user.id
        },
        include: {
            model: Item,
            attributes:['image', 'name','description']
        }
    })

    if(!likes){ 
        return res.json({ 
            message: 'You dont have any likes'
        })
    }

    return res.json(likes)

})

//find like for current user on a current item, to create like
router.get('/:itemId', async (req, res) => { 
    const likes = await Like.findOne({ 
        where: { 
            userId: req.user.id,
            itemId: req.params.itemId
        }
    })

    if(!likes){ 
        return res.json({
            message: 'Not liked'
        })
    }else { 
        return res.json(likes)
    }
})



//create a like
router.post('/:itemId', async (req, res) => {
    const like = await Like.findOne({ 
        where: { 
            userId: req.user.id,
            itemId: +req.params.itemId
        }
    })

    if(like){ 
        return res.json({ 
            message: 'Your already liked'
        })
    }

    const newLike = await Like.create({ 
        userId: req.user.id,
        itemId: req.params.itemId
    })

    return res.json(newLike)
})


//delete a like
router.delete('/:itemId', async (req, res) => { 
    const like = await Like.findOne({ 
        where: { 
            userId: req.user.id,
            itemId: req.params.itemId
        }
    })

    if(!like){ 
        return res.json({ 
            message: 'Your already liked'
        })
    }

    await like.destroy();

    return res.json({ 
        message: 'Successfully Deleted'
    })
})




module.exports = router;
