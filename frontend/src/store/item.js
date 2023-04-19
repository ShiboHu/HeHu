import { csrfFetch } from "./csrf"

const ALL_ITEMS = 'items/ALL'
const CREATE_ITEM = 'items/CREATE'
const GET_SINGLEITEM = 'items/SINGLE'


const allItems = (payload) => { 
    return { 
        type: ALL_ITEMS,
        payload
    }
}

const createitem = (payload) => { 
    return { 
        type: CREATE_ITEM,
        payload
    }
}

const singleitem = (payload) => { 
    return { 
        type: GET_SINGLEITEM,
        payload
    }
}


export const getAllItems = () => async dispatch => { 
    const res = await csrfFetch('/api/items')

    if(res.ok){ 
        const data = await res.json()
        dispatch(allItems(data))
    }

    return res
}

export const createNewItem = (payload) => async dispatch => { 
    const res = await csrfFetch('/api/items', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(res.ok){ 
        const data = await res.json();
        dispatch(createitem(data)) 
    }
    return res 
}

export const getSingleItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/items/${itemId}`);

    if(res.ok){ 
        const data = await res.json();
        dispatch(singleitem(data))
    }
    return res
}

const initialState = {items: []}
const itemReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case ALL_ITEMS: 
            return { 
                ...state,
                items: action.payload
            }
        case CREATE_ITEM:
            return { 
                ...state, 
                items: [...state.items, action.payload]
            }
        case GET_SINGLEITEM:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state
    }
}

export default itemReducer;
