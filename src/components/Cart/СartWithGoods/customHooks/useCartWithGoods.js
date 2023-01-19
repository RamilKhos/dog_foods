import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../../../API'
import { PRODUCTS_TO_CART } from '../../../../const_variables/const_variables'
import { deleteSelectedProductFromCart, selectedProductsInCart } from '../../../../redux/slices/cartSlice/cartSlice'

const getQueryKeyProduct = (id) => PRODUCTS_TO_CART.concat(id)

export const useCartWithGoods = () => {
  const dispatch = useDispatch()

  const cart = useSelector((store) => store.cart)

  const checkboxAllSelectedHandler = (checked) => dispatch(selectedProductsInCart(checked))
  const deleteSelectedProducts = () => dispatch(deleteSelectedProductFromCart())

  const checkSelectedProducts = cart.every((elem) => elem.isSelected)
  const checkSelectedProduct = cart.some((elem) => elem.isSelected)

  const { data: products, isError, isLoading } = useQuery({
    queryKey: getQueryKeyProduct(cart.map((product) => product.id)),
    queryFn: () => api.getProductsById(cart)
      .then((response) => Promise.all(response.map((product) => product.json()))),
  })

  return {
    products,
    isError,
    isLoading,
    checkboxAllSelectedHandler,
    checkSelectedProducts,
    checkSelectedProduct,
    deleteSelectedProducts,
  }
}
