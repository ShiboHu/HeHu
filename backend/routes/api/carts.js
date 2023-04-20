const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item } = require('../../db/models');


//get the cart and all item in the cart
router.get('/current', async (req, res) => {
  const cart = await Cart.findOne({
      where: {
          userId: req.user.id
      },
  });

  if(!cart){ 
      return res.json({ 
          message: 'Cart not found'
      });
  }

  const cartItems = await Cart_Item.findAll({ 
      where: { 
          cartId: cart.id
      },
      include: Item
  });

  if(cartItems.length === 0){ 
      return res.json({ 
          message: 'Add items to cart'
      });
  }

  const items = cartItems.map((cartItem) => {
      const { id, name, price, image } = cartItem.Item;
      const { quantity } = cartItem;
      return {
          id,
          name,
          price,
          image,
          quantity
      };
  });

  return res.json(items);
});
 

//add items to cart
router.post('/:itemId', async (req, res) => { 
  const { itemId, quantity } = req.body

  const cart = await Cart.findOne({ 
    where: { 
      userId: req.user.id
    }
  })

  if(!cart){ 
    cart = await Cart.create({ 
      userId: req.user.id 
    })
  }

  const cartItem = await Cart_Item.findOne({ 
    where: { 
      cartId: cart.id,
      itemId: itemId
    }
  })

  if(cartItem){ 
    cartItem.dataValues.quantity += 1;
    return res.json(cartItem)
  } 

  if(!cartItem){
    const newItem = await Cart_Item.create({ 
       cartId: cart.id,
       itemId,
        quantity
      })
      return res.json(newItem) 
   }
})




module.exports = router
