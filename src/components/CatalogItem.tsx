import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../store'

import { addProductToCartRequest } from '../store/modules/cart/actions'
import { Product } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: Product
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<State, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch])

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red'}}>Falta de estoque</span>}
    </article>
  )
}
