import { useSelector } from 'react-redux'
import { State } from '../store'
import { AuthState } from '../store/modules/auth/types'

export function Info() {
  const { user } = useSelector<State, AuthState>(state => state.auth)

  if (user) {
    return <strong>Logged as {user.email}</strong>
  }

  return <strong>Logged as anonymous</strong>
}
