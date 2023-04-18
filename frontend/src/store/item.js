import { csrfFetch } from "./csrf"

const ALL_ITEMS = 'items/ALL'


const allItems = (payload) => { 
    return { 
        type: ALL_ITEMS,
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



const initialState = {items: []}
const itemReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case ALL_ITEMS: 
            return { 
                ...state,
                items: action.payload
            }

        default: 
            return state
    }
}

export default itemReducer;
