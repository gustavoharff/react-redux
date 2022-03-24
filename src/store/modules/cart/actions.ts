import type { Product } from './types'

export function addProductToCartRequest(product: Product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: '@cart/ADD_FAILURE',
    payload: {
      productId
    }
  }
}
