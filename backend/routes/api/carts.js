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

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.Item.price * curr.quantity, 0);

  return res.json({ items, totalPrice });
});
 

//add items to cart
router.post('/:itemId', async (req, res) => {
  const {itemId, quantity } = req.body

    let cart = await Cart.findOne({
      where: {
        userId: req.user.id
      }
    });

    if(!cart){ 
      cart = await Cart.create({ 
        userId: req.user.id
      })
    }

    const cartItem = await Cart_Item.create({ 
      itemId,
      cartId: cart.id,
      quantity
    })

    return res.json(cartItem)
});

  
  
  
  
  
  module.exports = router
  