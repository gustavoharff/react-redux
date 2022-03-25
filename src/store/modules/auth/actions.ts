import { AuthTypes, User } from './types'

type SignInRequest = {
  email: string
  password: string
}

export function signInRequest({ email, password }: SignInRequest) {
  return {
    type: AuthTypes.SIGN_IN_REQUEST,
    payload: {
      email,
      password
    }
  }
}

export function signInSuccess(user: User) {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: {
      user
    }
  }
}

export function signInFailure() {
  return {
    type: AuthTypes.SIGN_IN_FAILURE
  }
}
