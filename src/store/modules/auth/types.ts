export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE'
}

export type User = {
  name: string
  email: string
  password: string
}

export type AuthState = {
  user: User | null
}

export interface SignInSucessAction {
  type: AuthTypes.SIGN_IN_SUCCESS
  payload: {
    user: User
  }
}

export interface SignInFailureAction {
  type: AuthTypes.SIGN_IN_FAILURE
  payload: undefined
}

export type AuthAction = SignInSucessAction | SignInFailureAction
