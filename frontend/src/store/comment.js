import { csrfFetch } from "./csrf"

const CURRENT_COMMENTS = 'comments/CURRENT'
const DELETE_COMMENTS = 'comments/DELETE'


const currentComment = (payload) => { 
    return { 
        type: CURRENT_COMMENTS,
        payload
    }
}

const deleteComment = (commentId) => { 
    return { 
        type: DELETE_COMMENTS,
        payload: commentId
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

export const deleteAcomment = (commentId) => async dispatch => { 
    const res = await csrfFetch(`/api/comments/${commentId}`,{ 
        method: 'DELETE'
    })

    if(res.ok){ 
        dispatch(deleteComment(commentId))
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
        case DELETE_COMMENTS:
            return { 
                ...state, 
                comments: state.comments.filter((comment) => comment.id !== action.payload)
            }
        default:
            return state;
    }
}


export default commentReducer
