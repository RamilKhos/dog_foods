import { createStore } from 'redux'
import { PRODUCTS_IN_CART, TOKEN_KEY_IN_LS } from '../const_variables/const_variables'
import { checkTokenInLS } from './initialState'
import { rootReducer } from './reduser/rootReduser'

export const store = createStore(rootReducer, checkTokenInLS())

store.subscribe(() => {
  localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(store.getState().token))
})

store.subscribe(() => console.log(store.getState()))
store.subscribe(() => localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(store.getState().cart)))
