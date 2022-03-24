import { CartTypes, Product } from './types'

export function addProductToCartRequest(product: Product) {
  return {
    type: CartTypes.ADD_REQUEST,
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: CartTypes.ADD_SUCCESS,
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: CartTypes.ADD_FAILURE,
    payload: {
      productId
    }
  }
}
