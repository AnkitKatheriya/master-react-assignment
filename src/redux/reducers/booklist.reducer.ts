import { AnyAction } from "redux"

import { actionTypes } from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: '',
    data: []
}

const bookListReducer = (state = initialState, action: AnyAction) => {
    switch(action.type){
        case actionTypes.FETCH_BOOK_LIST: 
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_BOOK_LIST_SUCESS: 
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case actionTypes.FETCH_BOOK_LIST_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
    
}

export default bookListReducer