/* eslint-disable no-underscore-dangle */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCountProduct, deleteProductFromCart, incrementCountProduct, selectedProductInCart,
} from '../../../../redux/slices/cartSlice/cartSlice'

export const useCartWithGoodsLeftBlock = ({ product }) => {
  const dispatch = useDispatch()
  const [btnMinusState, setBtnMinusState] = useState(false)
  const [btnPlusState, setBtnPlusState] = useState(false)

  const cart = useSelector((store) => store.cart)
  const cartItem = cart.find((elem) => elem.id === product._id)

  // Плюс
  const btnPlusHandler = () => {
    if (cartItem.count === product.stock) {
      setBtnPlusState(true)
      return setBtnMinusState(false)
    }
    setBtnMinusState(false)
    return dispatch(incrementCountProduct(cartItem.id))
  }

  // Минус
  const btnMinusHandler = () => {
    if (cartItem.count === 1) {
      return setBtnMinusState(true)
    }
    setBtnPlusState(false)
    return dispatch(decrementCountProduct(cartItem.id))
  }

  // Удалить
  const btnDeleteProductHandler = () => {
    dispatch(deleteProductFromCart(product._id))
  }

  // Checkbox
  const checkboxHandler = () => {
    dispatch(selectedProductInCart(product._id))
  }

  return {
    cartItem,
    btnMinusState,
    btnPlusState,
    btnPlusHandler,
    btnMinusHandler,
    btnDeleteProductHandler,
    checkboxHandler,
  }
}
