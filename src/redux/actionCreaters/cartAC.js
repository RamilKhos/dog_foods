import {
  ADD_DATA_PRODUCTS_IN_CART, DECREMENT_COUNT_PRODUCT, DELETE_PRODUCT_FROM_CART, GET_ID_PRODUCT,
  INCREMENT_COUNT_PRODUCT,
  SELECTED_PRODUCTS_IN_CART,
  SELECTED_PRODUCT_IN_CART,
} from '../types/types'

export const getIdProduct = (id) => ({
  type: GET_ID_PRODUCT,
  payload: {
    id,
    count: 1,
    selected: true,
  },
})

export const incrementCountProduct = (id) => ({
  type: INCREMENT_COUNT_PRODUCT,
  payload: id,
})

export const decrementCountProduct = (id) => ({
  type: DECREMENT_COUNT_PRODUCT,
  payload: id,
})

export const addDataProductsInCart = (products) => ({
  type: ADD_DATA_PRODUCTS_IN_CART,
  payload: products,
})

export const deleteProductsFromCart = (id) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: id,
})

export const selectedProductInCart = (id) => ({
  type: SELECTED_PRODUCT_IN_CART,
  payload: id,
})

export const selectedProductsInCart = (checked) => ({
  type: SELECTED_PRODUCTS_IN_CART,
  payload: checked,
})
