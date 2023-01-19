import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PRODUCT_QUERY_KEY } from '../../const_variables/const_variables'
import { api } from '../../API'
import { addItem } from '../../redux/slices/cartSlice/cartSlice'

export const useProductDetailPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const cart = useSelector((store) => store.cart)
  const checkProductInCart = cart.some((elem) => elem.id === id)

  const getProduckQueryKey = () => [PRODUCT_QUERY_KEY, id]

  const { data: product, isError, isLoading } = useQuery({
    queryKey: getProduckQueryKey(id),
    queryFn: () => api.getProductById(id)
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
  })

  const addProductInCart = () => {
    dispatch(addItem(id))
  }

  return {
    checkProductInCart,
    product,
    isError,
    isLoading,
    addProductInCart,
  }
}
