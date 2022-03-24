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

        const productIndex = draft.items.findIndex(
          item => item.product.id === product.id
        )

        if (productIndex >= 0) {
          draft.items[productIndex].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break
      }
      default: {
        return draft
      }
    }
  })
}

export { cart }
