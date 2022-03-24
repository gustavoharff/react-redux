import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { CartState } from './modules/cart/types'

import { rootReducer } from './modules/root-reducer'
import rootSaga from './modules/root-saga'

export interface State {
  cart: CartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

export { store }
