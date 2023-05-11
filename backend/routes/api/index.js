const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const itemsRouter = require('./items.js');
const subCatRouter = require('./sub_categories.js')
const commentRouter = require('./comment.js');
const cartItemRouter = require('./cart_items.js');
const ordersRouter = require('./orders.js');
const likesRouter = require('./likes.js');
const mainCatRouter = require('./main_categories.js');
const searchRouter = require('./search.js');


const { restoreUser } = require("../../utils/auth.js");

  
router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/items', itemsRouter);
router.use('/subcategories', subCatRouter);
router.use('/comments', commentRouter);
router.use('/cart-items', cartItemRouter);
router.use('/orders', ordersRouter);
router.use('/likes', likesRouter)
router.use('/maincategories', mainCatRouter);
router.use('/search', searchRouter);



module.exports = router;
