import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInRequest } from '../store/modules/auth/actions'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  function handleSignIn(event: FormEvent) {
    event.preventDefault()

    dispatch(signInRequest({ email, password }))
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}
