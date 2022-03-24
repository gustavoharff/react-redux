type Product = {
  id: number
  title: string
  price: number
}

type Item = {
  product: Product
  quantity: number
}

export interface ICartState {
  items: Item[]
}