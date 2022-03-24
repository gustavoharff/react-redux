import { useSelector } from 'react-redux'

import { State } from '../store'
import { Item } from '../store/modules/cart/types'

export function Cart() {
  const items = useSelector<State, Item[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
