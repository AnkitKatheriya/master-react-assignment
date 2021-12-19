import { combineReducers } from 'redux'

import bookListReducer from './booklist.reducer'

const rootReducer = combineReducers({
    booklist: bookListReducer
})

export default rootReducer