import { createStore } from 'redux'
import { TOKEN_KEY_IN_LS } from '../const_variables/const_variables'
import { checkTokenInLS } from './initialState'
import { rootReducer } from './reduser/rootReduser'

export const store = createStore(rootReducer, checkTokenInLS())

store.subscribe(() => {
  localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(store.getState().token))
})

store.subscribe(() => console.log(store.getState()))
