import { csrfFetch } from "./csrf"

const SET_CART = 'carts/SET'
const ADD_ITEM = 'carts/ADD'

const setCart = (payload) => { 
    return { 
        type: SET_CART,
        payload
    }
}

const additem = (payload) => { 
    return { 
        type: ADD_ITEM,
        payload
    }
}


export const getAllCartItem = () => async dispatch => { 
    const res = await csrfFetch('/api/carts/current');

    if(res.ok){ 
        const data = await res.json()
        dispatch(setCart(data))
    }

    return res
}

export const addItemToCart = (payload, itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/carts/${itemId}`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(res.ok){ 
        const data = await res.json()
        dispatch(additem(data))
    }

    return res
}


const initialState = {carts: []}
const cartReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case SET_CART:
            return { 
                ...state,
                carts: action.payload
            }
        case ADD_ITEM: 
            return { 
                ...state, 
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}


export default cartReducer;
