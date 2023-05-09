import { csrfFetch } from "./csrf"

const SET_ALL = 'all/SEARCH'


const search = (payload) => { 
    return { 
        type: SET_ALL,
        payload
    }
}


export const searchFilter = (keyword) => async dispatch => { 
    const res = await csrfFetch(`/api/search/${keyword}`)

    if(res.ok){ 
        const data = await res.json();
        dispatch(search(data))
    }
    return res
}


const searchReducer = (state = {}, action) => { 
    switch(action.type){ 
        case SET_ALL:
            let newState = {...state};
            newState.filtered = action.payload
            return newState;
        
        default: 
            return state
    }
}


export default searchReducer;
