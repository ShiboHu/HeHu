import { csrfFetch } from "./csrf"

const SET_ALL = 'all/MAINCATEGORY'
const GET_ALLITEMBYMAIN = 'all/ITEMMAIN'

const setmain = (payload) => { 
    return { 
        type: SET_ALL,
        payload
    }
}

const getall = (payload) => { 
    return { 
        type: GET_ALLITEMBYMAIN,
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

export const getAllItemByMain = (id) => async dispatch => {
    const res = await csrfFetch(`/api/maincategories/${id}`)

    if(res.ok){
         const data = await res.json();
         dispatch(getall(data))
    }
    return res
}


const initialState = {mainCategory: [], mainCateItem : {}}
const mainCategoryReducer  = (state = initialState, action) => { 
    switch(action.type){
        case SET_ALL:
            return { 
                ...state,
                mainCategory: action.payload
            }
        case GET_ALLITEMBYMAIN: {
            return { 
                ...state,
                mainCateItem: action.payload
            }
        }
        default: 
            return state
    }
}

export default mainCategoryReducer;
