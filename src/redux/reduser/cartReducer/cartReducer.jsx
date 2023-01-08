/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
import { initialState } from '../../initialState'
import {
  ADD_DATA_PRODUCTS_IN_CART, DECREMENT_COUNT_PRODUCT, DELETE_PRODUCT_FROM_CART, GET_ID_PRODUCT,
  INCREMENT_COUNT_PRODUCT,
  SELECTED_PRODUCTS_IN_CART,
  SELECTED_PRODUCT_IN_CART,
} from '../../types/types'

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case GET_ID_PRODUCT:
      return [...state, action.payload]

    case INCREMENT_COUNT_PRODUCT:
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            count: obj.count + 1,
          }
        }
        return obj
      })

    case DECREMENT_COUNT_PRODUCT:
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            count: obj.count - 1,
          }
        }
        return obj
      })

    case ADD_DATA_PRODUCTS_IN_CART:
      return state.map((element) => {
        action.payload.filter((elem) => {
          if (element.id === elem._id) {
            return Object.assign(element, elem)
          }
          return elem
        })
        return element
      })

    case DELETE_PRODUCT_FROM_CART:
      return state.filter((product) => product.id !== action.payload)

    case SELECTED_PRODUCT_IN_CART:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            selected: !product.selected,
          }
        }
        return product
      })

    case SELECTED_PRODUCTS_IN_CART:
      return state.map((product) => ({ ...product, selected: action.payload }))

    default:
      return state
  }
}
