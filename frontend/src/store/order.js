import { allCartItem } from "./cart_item";
import { csrfFetch } from "./csrf"

const GET_ALLORDER = 'orders/ALL';
const NEW_ORDER = 'orders/NEW';
const GET_SINGLEORDER = 'orders/SINGLE';


const getallorder = (payload) => { 
    return { 
        type: GET_ALLORDER,
        payload
    }
}

const neworder = (payload) => { 
    return { 
        type: NEW_ORDER,
        payload
    }
}

const singleorder = (payload) => { 
    return { 
        type: GET_SINGLEORDER,
        payload
    }
}



export const getAllOrders = () => async dispatch => { 
    const res = await csrfFetch('/api/orders/current');

    if(res.ok){ 
        const data = await res.json();
        dispatch(getallorder(data))
    }

    return res
}

export const getsingleOrder = (orderId) => async dispatch => { 
    const res = await csrfFetch(`/api/orders/${orderId}`)

    if(res.ok){ 
        const data =await res.json()
        dispatch(singleorder(data))
    }

    return res
}

export const createNewOrder = (orderId) => async dispatch => { 
    const res =await csrfFetch(`/api/orders/${orderId}`, { 
        method: 'POST',
    })

    if(res.ok){ 
        const data = await res.json()
        dispatch(neworder(data))
        dispatch(allCartItem())
    }

    return res
}



const initialState = {orders: [], order: {}};
const orderReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case GET_ALLORDER: 
            return { 
                ...state, 
                orders: action.payload
            }
        case GET_SINGLEORDER:
            return { 
                ...state, 
                order: action.payload
            }
        case NEW_ORDER:
            return { 
                ...state, 
                orders: [...state.orders, action.payload]
            }
        default: 
            return state
    }
} 


export default orderReducer
