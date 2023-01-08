import { TOKEN_KEY_IN_LS } from '../const_variables/const_variables'

export const initialState = {
  token: '',
  cart: [],
}

export const checkTokenInLS = () => {
  const checkToken = localStorage.getItem(TOKEN_KEY_IN_LS)
  if (checkToken) {
    return {
      ...initialState,
      token: JSON.parse(checkToken),
    }
  }
  return initialState
}
