import { csrfFetch } from "./csrf"

const GET_CARTITEMS = 'cartItems/All'
const ADD_CARTITEMS = 'cartItems/ADD'
const DELETE_CARTITEMS = 'cartItems/DELETE'
const UPDATE_CARTITEMS = 'cartItems/UPDATE'


const getItem = (payload) => { 
    return { 
        type: GET_CARTITEMS, 
        payload
    }
}

const addItem = (itemId) => { 
    return { 
        type: ADD_CARTITEMS,
        payload: itemId
    }
}

const deleteItem = (itemId) => { 
    return { 
        type: DELETE_CARTITEMS, 
        payload: itemId
    }
}

const updateItem = (payload) => { 
    return { 
        type: UPDATE_CARTITEMS,
        payload
    }
}


export const allCartItem = () => async dispatch => { 
    const res = await csrfFetch('/api/cart-items/current');

    if(res.ok){ 
        const data = await res.json()
        dispatch(getItem(data)) 
    }
    return res
} 

export const addCartItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart-items/${itemId}`, { 
        method: 'POST',
        body: JSON.stringify({
            itemId
        })
    })

    if(res.ok){ 
        const data = await res.json()
        dispatch(addItem(data))
    }
    return res 
}

export const deleteCartItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart-items/${itemId}`, { 
        method: 'DELETE'
    })

    if(res.ok){ 
        dispatch(deleteItem(itemId))

    }
    return res
}

export const updateCartItem = (payload, itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart-items/${itemId}`, { 
        method: 'PUT',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(res.ok){ 
        const data = await res.json();
        dispatch(updateItem(data))
        dispatch(allCartItem())
    }
    return res
}


const initialState = { cart_items: []}
const cartItemReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case GET_CARTITEMS:
            return { 
                ...state, 
                cart_items: action.payload
            }
        case ADD_CARTITEMS:
            return { 
                ...state, 
                cart_items: state.cart_items
            }
        case DELETE_CARTITEMS:
            return { 
                ...state, 
                cart_items: state.cart_items
            }
        case UPDATE_CARTITEMS: 
            return { 
                ...state, 
                cart_items: state.cart_items
            }
        default: 
            return state
    }
}


export default cartItemReducer;
