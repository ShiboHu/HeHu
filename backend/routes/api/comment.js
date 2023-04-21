const express = require('express');
const router = express.Router();
const { Comment } = require('../../db/models');


//get comment by current user
router.get('/current', async (req, res) => { 
    const comment = await Comment.findAll({ 
        where: { 
            userId: req.user.id
        }
    })

    if(!comment){ 
        res.status(400)
        return res.json({ 
            message: 'You dont have any comments',
            statusCode: 400
        })
    }

    return res.json(comment);
})


//create comment
router.post('/:itemId', async (req, res) => { 
    const { comment, image, rating } = req.body

    let newComment = await Comment.create({ 
        comment, 
        image,
        rating, 
        itemId: req.params.itemId,
        userId: req.user.id
    })

    return res.json(newComment)
})

//delete comment
router.delete('/:commentId', async (req, res) => { 
    const comment = await Comment.findByPk(req.params.commentId);


    if(!comment){
        res.status(404)
        return res.json({ 
            message: 'Comment not found',
            statusCode: 404
        })
    }

    await comment.destroy();

    res.status(200)
    return res.json({ 
        message: 'Successful deleted',
        statusCode: 200
    })
})


//edit comment
router.put('/:commentId', async (req, res) => { 
    const { comment, image, rating} = req.body

    const commented = await Comment.findByPk(req.params.commentId);

    const updateComment = await commented.update({ 
        comment, 
        image,
        rating
    })

    res.status(200)
    return res.json(updateComment)
})

module.exports = router;
