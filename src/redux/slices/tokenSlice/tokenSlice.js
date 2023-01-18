/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { TOKEN_KEY_IN_LS } from '../../../const_variables/const_variables'

const checkTokenInLS = localStorage.getItem(TOKEN_KEY_IN_LS)

const initialState = {
  token: checkTokenInLS ? JSON.parse(checkTokenInLS) : null,
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload
    },

    deleteToken: (state) => {
      state.token = null
    },
  },
})

export const { addToken, deleteToken } = tokenSlice.actions

export const tokenReducer = tokenSlice.reducer
