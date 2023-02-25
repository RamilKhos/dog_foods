import { configureStore } from '@reduxjs/toolkit'
import { PRODUCTS_IN_CART, PRODUCTS_IN_FAVOURITE, USER_INFO_KEY_IN_LS } from '../const_variables/const_variables'
import { cartReducer } from './slices/cartSlice/cartSlice'
import { favouritesReducer } from './slices/favouritesSlice/favouritesSlice'
import { userInfoReducer } from './slices/userInfoSlice/userInfoSlice'

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem(USER_INFO_KEY_IN_LS, JSON.stringify(store.getState().userInfo))
})

store.subscribe(() => {
  localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(store.getState().cart))
})

store.subscribe(() => {
  localStorage.setItem(PRODUCTS_IN_FAVOURITE, JSON.stringify(store.getState().favourites))
})
