/* eslint-disable default-param-last */
import { initialState } from '../../initialState'
import { DELETE_TOKEN, SET_TOKEN } from '../../types/types'

export const tokenReducer = (state = initialState.token, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload

    case DELETE_TOKEN:
      return action.payload

    default:
      return state
  }
}
