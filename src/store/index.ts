import { createStore } from 'redux'

import { rootReducer } from './modules/root-reducer'

const store = createStore(rootReducer)

export { store }
