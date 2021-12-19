//import { getBooklistUrl } from '../urls'
import {
    loadBooklist,
    loadBooklistSuccess,
    loadBooklistFail
} from '../actions/actionTypes'
import { Dispatch } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

const bookListThunk = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    //dispatch(loadBooklist())
    //await fetch('http://localhost:3001/booklist')
})

export default bookListThunk