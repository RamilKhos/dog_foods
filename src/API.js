/* eslint-disable no-shadow */
import React from 'react'
import { BASE_URL, CONTENT_TYPE, TOKEN_KEY_IN_LS } from './const_variables/const_variables'

class API extends React.Component {
  constructor(BASE_URL, CONTENT_TYPE) {
    super()
    this.BASE_URL = BASE_URL
    this.CONTENT_TYPE = CONTENT_TYPE
  }

  async sigUp(inputEmail, inputPassword) {
    try {
      const response = await fetch(`${this.BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': this.CONTENT_TYPE,
        },
        body: JSON.stringify({
          email: inputEmail,
          group: 'sm8',
          password: inputPassword,
        }),
      })
      if (response.ok) return response.json()
      throw response
    } catch (error) {
      console.error('Error(registration) fetching data: ', error)
    }
    return null
  }

  async sigIn(inputEmail, inputPassword) {
    try {
      const response = await fetch(`${this.BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': CONTENT_TYPE,
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      })
      if (response.ok) return response.json()
      throw response
    } catch (error) {
      console.error('Error(login) fetching data: ', error)
    }
    return null
  }

  async showAllProduct() {
    try {
      const responseGetAll = await fetch(`${this.BASE_URL}/products`, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN_KEY_IN_LS))}`,
        },
      })
      if (responseGetAll.ok) return responseGetAll.json()
      throw responseGetAll
    } catch (error) {
      console.error('Error(showAllProduct) fetching data: ', error)
    }
    return null
  }
}

export const api = new API(BASE_URL, CONTENT_TYPE)
