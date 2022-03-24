import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { api } from '../services/api'
import { addProductToCart } from '../store/modules/cart/actions'

import type { Product } from '../store/modules/cart/types'

export function Catalog() {
  const dispatch = useDispatch()

  const [catalog, setCatalog] = useState<Product[]>([])

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  const handleAddProductToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product))
    },
    [dispatch]
  )

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span>{' '}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
