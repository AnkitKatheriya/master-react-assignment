import { clientWrapper } from '../../helper'
import {
    loadBooklist,
    loadBooklistSuccess,
    loadBooklistFail
} from '../actions/actionTypes'

const bookListThunk = () => async (dispatch) => {
    dispatch(loadBooklist())
    try {
        const response = await  clientWrapper.get('http://localhost:3001/booklist')
        await dispatch(loadBooklistSuccess(response))
    }catch(error) {
        await dispatch(loadBooklistFail(error.message))
    }
}

export default bookListThunk