import { csrfFetch } from "./csrf"

const SET_ALL = 'all/SUBCATEGORY'
const SET_ONE = 'one/SUBCATEGORY'

const setSub = (payload) => { 
    return { 
        type: SET_ALL,
        payload
    }
}

const setOneSub = (payload) => {
    return {
        type: SET_ONE,
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

export const getOneSubCategory = (id) => async dispatch => {
    const res = await csrfFetch(`/api/subcategories/${id}`);

    if(res.ok){
        const data = await res.json();
        dispatch(setOneSub(data))
    }
    return res
}


const initialState = {subCategory: [], subCategories : []}
const subCategoryReducer = (state = initialState, action) => { 
    switch(action.type){
        case SET_ALL:
            return { 
                ...state,
                subCategory: action.payload
            }
        case SET_ONE:
            return {
                ...state,
                subCategories: action.payload
            }
        default: 
            return state
    }
}


export default subCategoryReducer;
