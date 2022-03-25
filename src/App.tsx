import { Provider } from 'react-redux'
import { Cart } from './components/Cart'

import { Catalog } from './components/Catalog'
import { Info } from './components/Info'
import { SignIn } from './components/SignIn'

import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <Info />
      <SignIn />

      <Catalog />
      <Cart />
    </Provider>
  )
}
