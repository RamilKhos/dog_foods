/* eslint-disable react/sort-comp */
/* eslint-disable no-shadow */
import React from 'react'
import {
  BASE_URL, CONTENT_TYPE, GROUP_ID, TOKEN_KEY_IN_LS,
} from './const_variables/const_variables'

class API extends React.Component {
  constructor(BASE_URL, CONTENT_TYPE, GROUP_ID) {
    super()
    this.BASE_URL = BASE_URL
    this.CONTENT_TYPE = CONTENT_TYPE
    this.GROUP_ID = GROUP_ID
  }

  //   Регистрация
  signUp(inputEmail, inputPassword) {
    return fetch(`${this.BASE_URL}/signup`, {
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
  }

  //   Авторизация
  sigIn(inputEmail, inputPassword) {
    return fetch(`${this.BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword,
      }),
    })
  }

  //   Информация о пользователе
  getInfoAboutUser() {
    const token = localStorage.getItem(TOKEN_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/v2/${GROUP_ID}/users/me`, {
      headers: {
        authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
  }

  // Показать все продукты
  showAllProduct() {
    const token = localStorage.getItem(TOKEN_KEY_IN_LS)
    if (token) {
      return fetch(
        `${this.BASE_URL}/products`,
        { headers: { authorization: `Bearer ${JSON.parse(token)}` } },
      )
    }
    return null
  }

  // Получить товар по id
  getProductById(id) {
    const token = localStorage.getItem(TOKEN_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/${id}`,
      { headers: { authorization: `Bearer ${JSON.parse(token)}` } },
    )
  }

  // Получить выбранные товары по id в корзине
  getProductsById(array) {
    const token = localStorage.getItem(TOKEN_KEY_IN_LS)
    const requests = array.map((obj) => fetch(
      `${this.BASE_URL}/products/${obj.id}`,
      { headers: { authorization: `Bearer ${JSON.parse(token)}` } },
    ))
    return Promise.all(requests)
  }
}

export const api = new API(BASE_URL, CONTENT_TYPE, GROUP_ID)
