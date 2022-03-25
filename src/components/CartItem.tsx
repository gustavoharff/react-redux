import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { decrementProductQuantityToCart } from '../store/modules/cart/actions'
import { Item } from '../store/modules/cart/types'

interface CartItemProps {
  item: Item
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch()

  const handleDecrementProductQuantity = useCallback(() => {
    dispatch(decrementProductQuantityToCart(item.product.id))
  }, [dispatch])

  return (
    <tr key={item.product.id}>
      <td>{item.product.title}</td>
      <td>{item.product.price}</td>
      <td>{item.quantity}</td>
      <td>{(item.product.price * item.quantity).toFixed(2)}</td>
      <button type="button" onClick={handleDecrementProductQuantity}>
        Diminuir quantidade
      </button>
    </tr>
  )
}
