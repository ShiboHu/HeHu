const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { Item, Sub_Category, Like, User, Main_Category, Cart, Comment, Cart_Item } = require('../../db/models');


//get the cart and all item in the cart
router.get('/', async (req, res) => {
    const cart = await Cart.findOne({
       where: {
         userId: req.user.id,
         },
       include: {
          model: Item,
          attributes: ['image', 'price', 'id'],
          through: { // set through option to null to exclude Cart_Item attribute
          attributes: ['quantity'],
           },
          },
    });

     let totalPrice = 0;
     cart.Items.forEach(item => { 
       totalPrice += item.price
     })

    cart.totalPrice = totalPrice;
     
    return res.json({
      id: cart.id,
      userId: cart.userId,
      createdAt: cart.createdAt,
      updatedAt: cart.updatedAt,
      Items: cart.Items,
      totalPrice: cart.totalPrice // Add totalPrice field here
    });
});

  
//add items to the cart
router.post('/:cartId', async (req, res) => { 
  const { itemId, quantity } = req.body

     const cart = await Cart.findOne({ 
       where: { 
         userId: req.user.id
       }
     });


     //if no cart create new cart
     if(!cart){ 
        cart = await Cart.create({ 
         userId: req.user.id
       })
     }

     const addItem = await Cart_Item.create({ 
        cartId : cart.id,
        itemId: itemId,
        quantity: quantity
     })

     
      res.status(201)
      return res.json(addItem)

})



module.exports = router
