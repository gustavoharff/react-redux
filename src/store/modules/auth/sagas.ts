import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { signInFailure, signInRequest, signInSuccess } from './actions'
import { AuthTypes, User } from './types'

type CheckUserEmailRequest = ReturnType<typeof signInRequest>

function* checkUserEmail({ payload }: CheckUserEmailRequest) {
  const { email, password } = payload

  const response: AxiosResponse<User[]> = yield call(api.get, '/users/')

  const user = response.data.find(user => user.email === email)

  if (user && user.password === password) {
    yield put(signInSuccess(user))
  } else {
    yield put(signInFailure())
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, checkUserEmail)])
