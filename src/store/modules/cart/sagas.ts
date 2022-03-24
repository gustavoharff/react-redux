import { AxiosResponse } from 'axios'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'

import type { State } from '../..'
import { api } from '../../../services/api'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess
} from './actions'
import { CartTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponse {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentStock: number = yield select((state: State) => {
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    )
  })

  const availbableStockResponse: AxiosResponse<StockResponse> = yield call(
    api.get,
    `/stock/${product.id}`
  )

  if (availbableStockResponse.data.quantity > currentStock) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([takeLatest(CartTypes.ADD_REQUEST, checkProductStock)])
