/* eslint-disable quote-props */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable no-shadow */
import React from 'react'
import {
  BASE_URL, CONTENT_TYPE, GROUP_ID, USER_INFO_KEY_IN_LS,
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
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/v2/${GROUP_ID}/users/me`, {
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo).token}`,
      },
    })
  }

  // Получить все продукты, не используется!!!
  // В useMainContainer находится актуальный запрос с поиском
  showAllProduct() {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    if (userInfo) {
      return fetch(
        `${this.BASE_URL}/products`,
        { headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` } },
      )
    }
    return null
  }

  // Получить товар по id
  getProductById(id) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/${id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` } },
    )
  }

  // Удалить товар по id
  deleteProductById(id) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/${id}`,
      {
        method: 'DELETE',
        headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` },
      },
    )
  }

  // Получить выбранные товары по id в корзине
  getProductsById(array) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    const requests = array.map((obj) => fetch(
      `${this.BASE_URL}/products/${obj.id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` } },
    ))
    return Promise.all(requests)
  }

  like(id) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/likes/${id}`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` },
    })
  }

  deleteLike(id) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/likes/${id}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` },
    })
  }

  // Добавить продукт
  addProduct(pictures, name, price, discount, stock, wight, description) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch('https://api.react-learning.ru/products', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo).token}`,
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        available: true,
        pictures,
        name,
        price,
        discount,
        stock,
        wight,
        description,
      }),
    })
  }

  // Получить отзывы к товару по id
  getReviewProductById(id) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/review/${id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` } },
    )
  }

  addReview(id, rating, text) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/review/${id}`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo).token}`,
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        rating,
        text,
      }),
    })
  }

  // Удалить отзыв
  deleteRewiew(idProduct, idReview) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/review/${idProduct}/${idReview}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` },
    })
  }
}

export const api = new API(BASE_URL, CONTENT_TYPE, GROUP_ID)
