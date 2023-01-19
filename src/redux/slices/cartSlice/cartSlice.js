/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS_IN_CART } from '../../../const_variables/const_variables'

const checkCartInLS = () => {
  const check = localStorage.getItem(PRODUCTS_IN_CART)
  if (check) {
    return JSON.parse(check)
  }
  return []
}

const initialState = checkCartInLS()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addItem: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (id) => ({
        payload: {
          id,
          isSelected: true,
          count: 1,
        },
      }),
    },

    incrementCountProduct: (state, action) => {
      state.map((product) => {
        product.id === action.payload ? product.count += 1 : product
      })
    },

    decrementCountProduct: (state, action) => {
      state.map((product) => {
        product.id === action.payload ? product.count -= 1 : product
      })
    },

    selectedProductInCart: (state, action) => {
      state.map((product) => {
        product.id === action.payload ? product.isSelected = !product.isSelected : product
      })
    },

    selectedProductsInCart: (state, action) => {
      state.forEach((product) => { product.isSelected = action.payload })
    },

    deleteProductFromCart: (state, action) => state.filter(
      (product) => (product.id !== action.payload),
    ),

    deleteSelectedProductFromCart: (state) => state.filter((product) => !product.isSelected),
  },
})

export const {
  incrementCountProduct, decrementCountProduct,
  addItem, deleteProductFromCart, deleteSelectedProductFromCart, selectedProductInCart,
  selectedProductsInCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
