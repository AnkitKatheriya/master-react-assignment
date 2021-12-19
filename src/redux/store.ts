import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares as Middleware[])))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch