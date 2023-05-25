import { csrfFetch } from "./csrf"

const ALL_ITEMS = 'items/ALL'
const CREATE_ITEM = 'items/CREATE'
const GET_SINGLEITEM = 'items/SINGLE'
const GET_CURRENTUSERITEMS = 'items/CURRENTUSER'
const UPDATE_ITEM = 'items/UPDATE'
const DELETE_ITEM = 'items/DELETE'
const REFRESH_ITEM = 'items/REFRESH'
const GET_SUBCATEGORYITEMS = 'items/SUBCATEGORY'
const FEATURED_ITEMS = 'items/FEATURE'

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

const featureitem = (payload) => { 
    return { 
        type: FEATURED_ITEMS,
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

const subcategoryItems = (payload) => {
     return {
         type: GET_SUBCATEGORYITEMS,
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

export const createNewItem = payload => async dispatch => { 
    const { name, description, price, image, stocks, subcategoryId } = payload
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stocks', stocks);
    formData.append('subcategoryId', subcategoryId);

    if(image) formData.append('image', image)

    const res = await csrfFetch('/api/items', { 
        method: 'POST',
        body: formData
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


export const getSubcategoryItems = (subcategoryId) => async dispatch => {
    const res = await csrfFetch(`/api/items/subcategory/${subcategoryId}`)
    
    if(res.ok){
        const data = await res.json()
        dispatch(subcategoryItems(data))
    }
    return res
}

export const getTrendingItems = () => async dispatch => { 
    const res = await csrfFetch(`/api/items/trendings/item`)

    if(res.ok){ 
        const data = await res.json();
        dispatch(featureitem(data))
    }
    return res 
}


export const getSnackTimeItems = () => async dispatch => { 
    const res = await csrfFetch(`/api/items/product/snacktime`)

    if(res.ok){ 
        const data = await res.json();
        dispatch(featureitem(data))
    }
    return res
}

export const getItemUnderOneHundred = () => async dispatch => { 
    const res = await csrfFetch(`/api/items/product/under100`)

    if(res.ok){ 
        const data = await res.json();
        dispatch(featureitem(data))
    }
    return res
}



const initialState = {items: [], item: {}, currentItem: [], featureitem: []}
const itemReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case ALL_ITEMS: 
            return { 
                ...state,
                items: action.payload,
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
        case GET_SUBCATEGORYITEMS:
            return {
                ...state,
                items: action.payload
            }
        case FEATURED_ITEMS: { 
            return { 
                ...state, 
                featureitem: action.payload
            }
        }
        default: 
            return state
    }
}

export default itemReducer;
