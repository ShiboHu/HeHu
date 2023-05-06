import { csrfFetch } from "./csrf"

const SET_ALL = 'all/MAINCATEGORY'


const setmain = (payload) => { 
    return { 
        type: SET_ALL,
        payload
    }
}



export const getAllMainCategory = () => async dispatch => { 
    const res = await csrfFetch('/api/maincategories');

    if(res.ok){
        const data = await res.json();
        dispatch(setmain(data))
    }
    return res
}



const initialState = {mainCategory: []}
const mainCategoryReducer  = (state = initialState, action) => { 
    switch(action.type){
        case SET_ALL:
            return { 
                ...state,
                mainCategory: action.payload
            }
        default: 
            return state
    }
}

export default mainCategoryReducer;
