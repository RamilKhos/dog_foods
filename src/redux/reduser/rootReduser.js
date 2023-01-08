import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer/cartReducer'
import { tokenReducer } from './tokenReducer/tokenReducer'

export const rootReducer = combineReducers({
  token: tokenReducer,
  cart: cartReducer,
})
