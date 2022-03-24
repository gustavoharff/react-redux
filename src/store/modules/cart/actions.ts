import type { Product } from './types'

export function addProductToCart(product: Product) {
  return {
    type: '@cart/ADD',
    payload: {
      product
    }
  }
}
