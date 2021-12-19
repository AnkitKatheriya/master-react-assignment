import {
    loadBooklist,
    loadBooklistSuccess,
    loadBooklistFail
} from '../actions/actionTypes'

const bookListThunk = () => async (dispatch) => {
    dispatch(loadBooklist())
    try {
        const response = await fetch('http://localhost:3001/booklist')
        const data = await response.json()
        console.log("@@@ Response is:", data)
        await dispatch(loadBooklistSuccess(data))
    }catch(error) {
        await dispatch(loadBooklistFail(error.message))
    }
}

export default bookListThunk