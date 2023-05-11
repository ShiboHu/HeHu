const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');

const { Cart_Item, Cart, Item } = require('../../db/models')


//get all the cart items by the current user
router.get('/current', requireAuth, async (req, res) => { 
    const cart = await Cart.findOne({ 
        where: { 
            userId: req.user.id,
            purchased: false
        },
        include: { 
            model: Item,
            through: { 
                model: Cart_Item,
                attributes: ['quantity'],
                order: [[Item, 'createdAt', 'ASC']]
            },
      
        },

    })

    if(!cart){ 
        res.status(200)
        return res.json({ 
            message: 'Current User does not having anything in cart',
            statusCode: 200
        })
    }

    const items = cart.Items.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image, 
        quantity: item.Cart_Item.quantity,
        description: item.description,
        price: item.price
      }));
  
      const totalPrice = cart.Items.reduce((acc, curr) => acc + curr.price * curr.Cart_Item.quantity, 0);
  
      return res.json({ 
        totalPrice, 
        items,
        cartId: cart.id
      });
})


//current user add newitems to cart item 
router.post('/:itemId', requireAuth, async (req, res) => { 
    let cart = await Cart.findOne({ 
        where: { 
            userId: req.user.id,
            purchased: false
        }
    })

    if(!cart){ 
        cart = await Cart.create({ 
            userId: req.user.id,
            purchased: false
        })
    }

    //if item already exists quantity++

    const item = await Cart_Item.findOne({ 
        where: { 
            cartId: cart.id,
            itemId: +req.params.itemId
        }
    })

    if(item){ 
        const quantity = item.dataValues.quantity + 1
        const editItem = await item.update({ 
            quantity: quantity
        })
        return res.json(editItem)
    }


    const newCartItem = await Cart_Item.create({ 
        cartId: cart.id,
        itemId: +req.params.itemId,
        quantity: 1
    })

    return res.json(newCartItem)
})

//delete items in the cart
router.delete('/:itemId', requireAuth, async (req, res) => { 
    const cart = await Cart.findOne({ 
        where: { 
            userId: req.user.id,
            purchased: false
        }
    })

    if(!cart){ 
        return res.json({ 
            message: 'cart not found'
        })
    }

    const cartItem = await Cart_Item.findOne({ 
        where: { 
            cartId: cart.id,
            itemId: req.params.itemId
        }
    })  

    
    if(!cartItem){ 
        res.status(404);
        return res.json({ 
            message: 'Item not in cart, not found!',
            statusCode: 404,
        })
    }

    await cartItem.destroy(); 

    return res.json({ 
        message: 'Successfully Deleted'
    })
})


/*  update quantity in cart */
router.put('/:itemId', requireAuth, async (req, res) => { 
    const { quantity } = req.body;

    const cart = await Cart.findOne({ 
        where: { 
            userId: req.user.id,
            purchased: false
        }
    })

    if(!cart){ 
        return res.json({ 
            message: 'cart not found'
        })
    }

    const cartItem = await Cart_Item.findOne({ 
        where: { 
            cartId: cart.id,
            itemId: req.params.itemId
        }
    })

    if(!cartItem){ 
        res.status(404);
        return res.json({ 
            message: 'Item not in cart, not found!',
            statusCode: 404,
        })
    }

    const editItem = await cartItem.update({ 
        quantity
    })
    
    return res.json(editItem)
    
})







module.exports = router; 
