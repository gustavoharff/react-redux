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
}