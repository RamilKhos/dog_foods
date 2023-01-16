import { PRODUCTS_IN_CART, TOKEN_KEY_IN_LS } from '../const_variables/const_variables'

export const initialState = {
  token: '',
  cart: [],
}

export const checkTokenInLS = () => {
  const checkToken = localStorage.getItem(TOKEN_KEY_IN_LS)
  const checkProducts = localStorage.getItem(PRODUCTS_IN_CART)

  if (checkToken && checkProducts) {
    return {
      ...initialState,
      token: JSON.parse(checkToken),
      cart: JSON.parse(checkProducts),
    }
  }

  if (checkProducts && !checkToken) {
    return {
      ...initialState,
      token: JSON.parse(checkToken),
    }
  }

  return initialState
}
