/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    getIdProduct: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (id) => ({
        payload: {
          id,
          count: 1,
          isSelected: true,
        },
      }),
    },

    incrementCountProduct: (state, action) => {
      const index = state.findIndex((product) => product._id === action.payload)
      if (index !== -1) {
        state[index].count += 1
      }
    },

    decrementCountProduct: (state, action) => {
      const index = state.findIndex((product) => product._id === action.payload)
      if (index !== -1) {
        state[index].count -= 1
      }
    },

    addDataProductsInCart: (state, action) => {
      state.map((element) => {
        action.payload.filter((elem) => {
          if (element.id === elem._id) {
            return Object.assign(element, elem)
          }
          return elem
        })
        return element
      })
    },

    deleteProductFromCart: (state, action) => {
      return state.filter((product) => {
        return product.id !== action.payload
      })
    },

    selectedProductInCart: (state, action) => {
      state.map((product) => {
        if (product.id === action.payload) {
          console.log('Совпадение')
          product.isSelected = !product.isSelected
        }
        return product
      })
    },

    selectedProductsInCart: (state, action) => {
      state.map((product) => {
        return product.isSelected = action.payload
      })
    },
  },
})

export const {
  getIdProduct, incrementCountProduct, decrementCountProduct,
  addDataProductsInCart, deleteProductFromCart, selectedProductInCart, selectedProductsInCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
