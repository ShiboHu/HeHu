import { csrfFetch } from "./csrf"

const SET_ALL = 'all/SUBCATEGORY'


const setSub = (payload) => { 
    return { 
        type: SET_ALL,
        payload
    }
}



export const getAllSubCategory = () => async dispatch => { 
    const res = await csrfFetch('/api/subcategories');

    if(res.ok){
        const data = await res.json();
        dispatch(setSub(data))
    }
    return res
}



const initialState = {subCategory: []}
const subCategoryReducer = (state = initialState, action) => { 
    switch(action.type){
        case SET_ALL:
            return { 
                ...state,
                subCategory: action.payload
            }
        default: 
            return state
    }
}


export default subCategoryReducer;
