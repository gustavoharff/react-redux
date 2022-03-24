import { createStore } from 'redux'

import { CartState } from './modules/cart/types'

import { rootReducer } from './modules/root-reducer'

export interface State {
  cart: CartState
}

const store = createStore(rootReducer)

export { store }
