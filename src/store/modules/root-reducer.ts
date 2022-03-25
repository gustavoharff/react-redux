import { combineReducers } from 'redux'

import { cart } from './cart/reducer'
import { auth } from './auth/reducer'

const rootReducer = combineReducers({
  cart,
  auth
})

export { rootReducer }
