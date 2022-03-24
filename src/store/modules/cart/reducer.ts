import { Reducer } from 'redux'
import produce from 'immer'

import { CartState } from './types'

const INITIAL_STATE: CartState = {
  items: []
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD': {
        const { product } = action.payload

        draft.items.push({
          product,
          quantity: 1
        })

        break
      }
      default: {
        return draft
      }
    }
  })
}

export { cart }
