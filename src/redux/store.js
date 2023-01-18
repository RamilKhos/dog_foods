import { configureStore } from '@reduxjs/toolkit'
import { PRODUCTS_IN_CART, TOKEN_KEY_IN_LS } from '../const_variables/const_variables'
import { cartReducer } from './slices/cartSlice/cartSlice'
import { tokenReducer } from './slices/tokenSlice/tokenSlice'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    cart: cartReducer,
  },
})

store.subscribe(() => { localStorage.getItem(TOKEN_KEY_IN_LS) })

store.subscribe(() => {
  localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(store.getState().token.token))
})

store.subscribe(() => localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(store.getState().cart)))

store.subscribe(() => console.log(store.getState()))
