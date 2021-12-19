import { combineReducers } from 'redux'

import bookListReducer from './booklist.reducer'

const reducers = combineReducers({
    booklist: bookListReducer
})

export default reducers