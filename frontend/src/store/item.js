import { csrfFetch } from "./csrf"

const ALL_ITEMS = 'items/ALL'
const CREATE_ITEM = 'items/CREATE'
const GET_SINGLEITEM = 'items/SINGLE'
const GET_CURRENTUSERITEMS = 'items/CURRENTUSER'
const UPDATE_ITEM = 'items/UPDATE'
const DELETE_ITEM = 'items/DELETE'
const REFRESH_ITEM = 'items/REFRESH'


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

const currentuserItem = (payload) => {
    return { 
        type: GET_CURRENTUSERITEMS,
        payload
    }
}

const updateItem = (payload) => { 
    return { 
        type: UPDATE_ITEM,
        payload
    }
}

const deleteItem = (itemId) => {
    return {
      type: DELETE_ITEM,
      payload: itemId,
    };
  };

 export const refreshItems = () => { 
    return { 
        type: REFRESH_ITEM
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

export const deleteSingleItem = (itemId) => async (dispatch) => {
    const res = await csrfFetch(`/api/items/${itemId}`, {
      method: "DELETE",
    });
  
    if (res.ok) {
      dispatch(deleteItem(itemId));
      dispatch(getCurrentUserItems());
    }
    return res;
  };

export const getCurrentUserItems = () => async dispatch => { 
    const res = await csrfFetch(`/api/items/item/current`)

    if(res.ok){ 
        const data = await res.json()
        dispatch(currentuserItem(data))
    }
    return res 
}

export const updateUserItem = (payload, itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/items/${itemId}`, { 
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(payload)
    })

    if(res.ok){ 
        const data = await res.json();
        dispatch(updateItem(data))
        dispatch(getCurrentUserItems())
    }
    return res
}


const initialState = {items: [], item: {}, currentItem: []}
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
                item: action.payload
            }
        case GET_CURRENTUSERITEMS:
            return { 
                ...state, 
                currentItem: action.payload
            }
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(item => {
                  if (item.id === action.payload.id) {
                    return action.payload;
                  } else {
                    return item;
                  }
                })
              };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case REFRESH_ITEM:
            return { 
                ...state, 
                item: {}
            }
        default: 
            return state
    }
}

export default itemReducer;
