import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { addProductToCart } from '../store/modules/cart/actions'
import { Product } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: Product
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  )
}
