import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIdProduct } from '../../redux/actionCreaters/cartAC'
import { PRODUCT_QUERY_KEY } from '../../const_variables/const_variables'
import { api } from '../../API'

export const useProductDetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productsInCart = useSelector((store) => store.cart)
  const checkProductInCart = productsInCart.some((elem) => elem.id === id)

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
    dispatch(getIdProduct(id))
  }

  return {
    checkProductInCart,
    product,
    isError,
    isLoading,
    addProductInCart,
  }
}
