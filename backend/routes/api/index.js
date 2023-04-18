const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const itemsRouter = require('./items.js');
const cartsRouter = require('./carts.js');

const { restoreUser } = require("../../utils/auth.js");

  
router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/items', itemsRouter);
router.use('/carts', cartsRouter);

module.exports = router;
