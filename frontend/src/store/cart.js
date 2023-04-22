// import { csrfFetch } from "./csrf"

// const SET_CART = 'carts/SET'

// const setCart = (payload) => { 
//     return { 
//         type: SET_CART,
//         payload
//     }
// }


// export const getAllCartItem = () => async dispatch => { 
//     const res = await csrfFetch('/api/carts/current');

//     if(res.ok){ 
//         const data = await res.json()
//         dispatch(setCart(data))
//     }

//     return res
// }


// const initialState = {carts: []}
// const cartReducer = (state = initialState, action) => { 
//     switch(action.type){ 
//         case SET_CART:
//             return { 
//                 ...state,
//                 carts: action.payload
//             }
//         default:
//             return state
//     }
// }


// export default cartReducer;
