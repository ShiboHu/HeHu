import { csrfFetch } from "./csrf"

const CURRENT_COMMENTS = 'comments/CURRENT'


const currentComment = (payload) => { 
    return { 
        type: CURRENT_COMMENTS,
        payload
    }
}


export const getCurrentUserComment = () => async dispatch => { 
    const res = await csrfFetch('/api/comments/current')

    if(res.ok){ 
        const data = await res.json();
        dispatch(currentComment(data))
    }

    return res
}



const initialState = {comments: []}
const commentReducer = (state = initialState, action) => {
    switch(action.type){ 
        case CURRENT_COMMENTS: 
            return { 
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }
}


export default commentReducer
