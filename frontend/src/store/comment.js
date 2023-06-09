import { csrfFetch } from "./csrf"

const CURRENT_COMMENTS = 'comments/CURRENT'
const DELETE_COMMENTS = 'comments/DELETE'
const UPDATE_COMMENTS = 'comments/UPDATE'
const CREATE_COMMENTS = 'comments/CREATE'


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

const updateComment = (payload) => { 
    return { 
        type: UPDATE_COMMENTS,
        payload
    }
}

const createComment = (payload) => { 
    return { 
        type: CREATE_COMMENTS,
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

export const deleteAcomment = (commentId) => async dispatch => { 
    const res = await csrfFetch(`/api/comments/${commentId}`,{ 
        method: 'DELETE'
    })

    if(res.ok){ 
        dispatch(deleteComment(commentId))
    }
    return res 
}

export const updateAComment = (payload,commentId) => async dispatch => { 
    const res =await csrfFetch(`/api/comments/${commentId}`, { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(res.ok){ 
        const data = await res.json();
        dispatch(updateComment(data))
    }
    return res
}
export const createAComment = (payload,storyId) => async dispatch => { 
    const {comment, image, rating} = payload;
    const formData = new FormData();
    formData.append('comment', comment)
    formData.append('rating', rating)

    if(image) formData.append('image', image);

    const res =await csrfFetch(`/api/comments/${storyId}`, { 
        method: 'POST',
        body: formData
    })

    if(res.ok){ 
        const data = await res.json();
        dispatch(createComment(data))
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
        case UPDATE_COMMENTS:
            return { 
                ...state,
                comments: state.comments.map(comment => { 
                    if(comment.id === action.payload.id){ 
                        return action.payload
                    }else { 
                        return comment
                    }
                })
            }
        case CREATE_COMMENTS:
            return { 
                ...state, 
                comments: [...state.comments, action.payload]
            }
        default:
            return state;
    }
}


export default commentReducer
