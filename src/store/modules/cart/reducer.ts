import { Reducer } from 'redux'
import produce from 'immer'

import { CartState, CartTypes } from './types'

const INITIAL_STATE: CartState = {
  items: [],
  failedStockCheck: []
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CartTypes.ADD_SUCCESS: {
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
      case CartTypes.ADD_FAILURE: {
        const { productId } = action.payload

        const failedStockCheckProductIdIndex = draft.failedStockCheck.findIndex(
          id => id === productId
        )

        if (failedStockCheckProductIdIndex < 0) {
          draft.failedStockCheck.push(action.payload.productId)
        }

        break
      }
      case CartTypes.REMOVE_SUCCESS: {
        const { productId } = action.payload

        const productIndex = draft.items.findIndex(
          item => item.product.id === productId
        )

        if (draft.items[productIndex].quantity > 1) {
          draft.items[productIndex].quantity -= 1
        } else {
          draft.items.splice(productIndex, 1)
        }

        const failedStockCheckProductIdIndex = draft.failedStockCheck.findIndex(
          id => id === productId
        )

        if (failedStockCheckProductIdIndex >= 0) {
          draft.failedStockCheck.splice(failedStockCheckProductIdIndex, 1)
        }
      }
      default: {
        return draft
      }
    }
  })
}

export { cart }
