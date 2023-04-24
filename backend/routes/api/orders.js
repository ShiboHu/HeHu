const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');


const { Order, Cart, Cart_Item, Item} = require('../../db/models');




// creating a new order
router.post('/:cartId', requireAuth, async(req, res) => { 
    const newOrder = await Order.create({ 
        cartId: req.params.cartId
    })

    if(newOrder){ 
        const cart = await Cart.findByPk(req.params.cartId);

        if(!cart){ 
            return res.json({ 
                message: 'Cart does not exists, Ordered failed'
            })
        }

        await cart.update({ 
            purchased: true
        })
    }

    return res.json(newOrder)

})


//find all orders 
router.get('/current', requireAuth, async(req,res) => { 
    const orders = await Order.findAll()

    if(!orders){ 
        return res.json({ 
            message: 'No orders yet'
        })
    }

    return res.json(orders)
})


//find all specfic order
router.get('/:orderId', requireAuth, async(req, res) => { 
    const order = await Order.findOne({ 
        where: { 
            id: req.params.orderId 
        }
    })

    const cartItems = await Cart_Item.findAll({ 
        where: { 
            cartId: order.dataValues.cartId
        },
        include: { 
            model: Item
        }
    })

    return res.json({ 
        order,
        cartItems
    })
})




module.exports = router;
