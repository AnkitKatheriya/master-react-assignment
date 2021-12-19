import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [thunk]

export const store = createStore(reducers, applyMiddleware(...middlewares as Middleware[]))

//export type RootState = ReturnType<typeof store.getState>

//export type AppDispatch = typeof store.dispatch