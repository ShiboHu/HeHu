import { csrfFetch } from "./csrf"
import { getSingleItem } from "./item"

const GET_ALLLIKE = 'likes/ALL'
const CREATE_LIKE = 'likes/CREATE'
const DELETE_LIKE = 'likes/DELETE'
const SINGLE_LIKE = 'likes/SINGLE'
const REFRESH_LIKE = 'likes/REFRESH'

const getalllike = (payload) => { 
    return { 
        type: GET_ALLLIKE,
        payload
    }
}

const createalike = (payload) => { 
    return { 
        type: CREATE_LIKE,
        payload
    }
}

const deletealike = (itemId) => { 
    return { 
        type: DELETE_LIKE,
        itemId
    }
}

const singlelike = (payload) => { 
    return { 
        type: SINGLE_LIKE,
        payload
    }
}

export const getAllLikes = () => async dispatch => { 
    const res = await csrfFetch('/api/likes/current');

    if(res.ok){ 
        const data = await res.json();
        dispatch(getalllike(data))
    }

    return res
}

export const createALike = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/likes/${itemId}`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            itemId: itemId
        })
    })

    if(res.ok){ 
        const data = await res.json()
        dispatch(createalike(data))
    }
    return res
}

export const deleteALike = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/likes/${itemId}`, { 
        method: 'DELETE'
    })
    
    if(res.ok){ 
        const data = await res.json()
        dispatch(deletealike(itemId))
    }
    return res
}

export const getSingleLike = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/likes/${itemId}`)

    if(res.ok){ 
        const data = await res.json()
        dispatch(singlelike(data))
    }

    return res
}



const initialState = {likes: [], like: {}};
const likeReducer = (state = initialState, action) => { 
    switch(action.type){ 
        case GET_ALLLIKE:
            return { 
                ...state,
                likes: action.payload
            }
        case CREATE_LIKE:
            return { 
                ...state,
                likes: [...state.likes, action.payload],
          
            }
        case DELETE_LIKE:
            return { 
                ...state,
                likes: state.likes.filter(like => like.id !== action.itemId),
                
            }
        case SINGLE_LIKE:
            return { 
                ...state, 
                like: action.payload
            }
        case REFRESH_LIKE: { 
            return{ 
                ...state, 
                like: {}
            }
        }
        default: 
            return state
    }
}

export default likeReducer;
