import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import itemReducer from './item';
// import cartReducer from './cart';
import subCategoryReducer from './subcategory';
import commentReducer from './comment';
import cartItemReducer from './cart_item';
import orderReducer from './order';
import likeReducer from './like';

const rootReducer = combineReducers({
  session: sessionReducer,
  items: itemReducer,
  // carts: cartReducer,
  subCategories: subCategoryReducer,
  comments: commentReducer,
  cartItems: cartItemReducer,
  orders: orderReducer,
  likes: likeReducer
});

let enhancer;


if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;
