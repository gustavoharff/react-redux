import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AuthState } from './modules/auth/types'

import { CartState } from './modules/cart/types'

import { rootReducer } from './modules/root-reducer'
import rootSaga from './modules/root-saga'

export interface State {
  cart: CartState
  auth: AuthState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export { store }
