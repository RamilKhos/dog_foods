/* eslint-disable arrow-body-style */
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../../../API'
import { PRODUCTS_TO_CART } from '../../../../const_variables/const_variables'
import { addDataProductsInCart, selectedProductsInCart } from '../../../../redux/slices/cartSlice/cartSlice'

const getQueryKeyProduct = (id) => PRODUCTS_TO_CART.concat(id)

export const useCartWithGoods = () => {
  const dispatch = useDispatch()
  const productsToCart = useSelector((store) => store.cart)
  const checkSelectedProducts = productsToCart.every((elem) => elem.isSelected)

  const { isError, isLoading } = useQuery({
    queryKey: getQueryKeyProduct(productsToCart.map((product) => product.id)),
    queryFn: () => api.getProductsById(productsToCart)
      .then((response) => Promise.all(response.map((product) => product.json()))),
    onSuccess: (data) => {
      dispatch(addDataProductsInCart(data))
    },
  })

  const checkboxAllSelectedHandler = (checked) => dispatch(selectedProductsInCart(checked))

  return {
    isError,
    isLoading,
    dispatch,
    checkboxAllSelectedHandler,
    productsToCart,
    checkSelectedProducts,
  }
}
