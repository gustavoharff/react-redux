import { Reducer } from 'redux'
import { AuthAction, AuthState, AuthTypes } from './types'

const user = localStorage.getItem('user')

const INITIAL_STATE: AuthState = {
  user: user ? JSON.parse(user) : null
}

const auth: Reducer<AuthState, AuthAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      localStorage.setItem('user', JSON.stringify(action.payload.user))

      return {
        user: action.payload.user
      }
    }
    case AuthTypes.SIGN_IN_FAILURE: {
      alert('Falha no login, verifique seus dados')

      return {
        user: null
      }
    }
    default: {
      return state
    }
  }
}

export { auth }
