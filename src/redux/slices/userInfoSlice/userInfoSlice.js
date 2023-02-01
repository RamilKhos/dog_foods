/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { USER_INFO_KEY_IN_LS } from '../../../const_variables/const_variables'

const checkUserInfoInLS = localStorage.getItem(USER_INFO_KEY_IN_LS)

const initialState = checkUserInfoInLS
  ? JSON.parse(checkUserInfoInLS)
  : { token: null, userID: null, group: null }

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUserInfo: (state, action) => state = action.payload,

    deleteUserInfo: (state) => state = { token: null, userID: null, group: null },
  },
})

export const { addUserInfo, deleteUserInfo } = userInfoSlice.actions

export const userInfoReducer = userInfoSlice.reducer
