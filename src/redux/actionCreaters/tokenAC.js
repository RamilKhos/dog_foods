import { DELETE_TOKEN, SET_TOKEN } from '../types/types'

export const setTokenAC = (token) => ({
  type: SET_TOKEN,
  payload: token,
})

export const deleteTokenAC = () => ({
  type: DELETE_TOKEN,
  payload: null,
})
