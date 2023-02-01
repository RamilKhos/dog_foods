/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS_IN_FAVOURITE } from '../../../const_variables/const_variables'

const checkProductsInFavourites = localStorage.getItem(PRODUCTS_IN_FAVOURITE)
const initialState = checkProductsInFavourites ? JSON.parse(checkProductsInFavourites) : []

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {

    addItemToFavourites: (state, action) => {
      state.push(action.payload)
    },

    deleteItemFromFavourites: (state, action) => {
      return state.filter((elem) => elem.id !== action.payload)
    },
  },
})

export const { addItemToFavourites, deleteItemFromFavourites } = favouritesSlice.actions
export const favouritesReducer = favouritesSlice.reducer
