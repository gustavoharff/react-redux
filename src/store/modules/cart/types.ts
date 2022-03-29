export enum CartTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  ADD_FAILURE = '@cart/ADD_FAILURE',
  REMOVE_SUCCESS = '@cart/REMOVE_SUCCESS'
}

export type Product = {
  id: number
  title: string
  price: number
}

export type Item = {
  product: Product
  quantity: number
}

export interface CartState {
  items: Item[]
  failedStockCheck: number[]
}

export type AddProductToCartSuccessAction = {
  type: CartTypes.ADD_SUCCESS
  payload: {
    product: Product
  }
}

export type AddProductToCartFailureAction = {
  type: CartTypes.ADD_FAILURE
  payload: {
    productId: number
  }
}

export type DecrementProductQuantityToCartAction = {
  type: CartTypes.REMOVE_SUCCESS
  payload: {
    productId: number
  }
}

export type CartAction =
  | AddProductToCartSuccessAction
  | AddProductToCartFailureAction
  | DecrementProductQuantityToCartAction
