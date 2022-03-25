import { useSelector } from 'react-redux'

import { State } from '../store'
import { Item } from '../store/modules/cart/types'
import { CartItem } from './CartItem'

export function Cart() {
  const items = useSelector<State, Item[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </tbody>
    </table>
  )
}
