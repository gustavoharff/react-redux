export enum CartTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  ADD_FAILURE = '@cart/ADD_FAILURE'
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
