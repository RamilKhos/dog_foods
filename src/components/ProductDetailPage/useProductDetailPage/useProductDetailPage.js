import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PRODUCT_QUERY_KEY } from '../../../const_variables/const_variables'
import { api } from '../../../API'
import { addItem, deleteProductFromCart } from '../../../redux/slices/cartSlice/cartSlice'
import { addItemToFavourites, deleteItemFromFavourites } from '../../../redux/slices/favouritesSlice/favouritesSlice'
import { notifyDeleteProduct } from '../../toastify/toastify'

export const useProductDetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { userID } = useSelector((store) => store.userInfo)
  const favourites = useSelector((store) => store.favourites)
  const cart = useSelector((store) => store.cart)

  const checkProductInCart = cart.some((elem) => elem.id === id)

  const checkProductInFavourites = favourites.some((elem) => elem.id === id)

  const getProductQueryKey = () => [PRODUCT_QUERY_KEY, id]

  // Получить товар по id
  const {
    data: product, isError, isLoading, isFetching,
  } = useQuery({
    queryKey: getProductQueryKey(id),
    queryFn: () => api.getProductById(id)
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
  })

  // Удалить товар по id
  const { mutate: mutateDeleteProduct } = useMutation({
    mutationFn: () => api.deleteProductById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product' - id] })
      notifyDeleteProduct('Товар успешно удален!')
      navigate('/')
    },
  })

  // Поставить лайк
  const { mutate: like } = useMutation({
    mutationFn: () => api.like(id)
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getProductQueryKey(id) })
    },
  })

  // Убрать лайк
  const { mutate: deleteLike } = useMutation({
    mutationFn: () => api.deleteLike(id)
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getProductQueryKey(id) })
    },
  })

  const addProductInCart = () => {
    dispatch(addItem(id))
  }

  const deleteItemFromCart = () => {
    dispatch(deleteProductFromCart(id))
  }

  const addProductInFavourites = () => {
    dispatch(addItemToFavourites({ id }))
  }

  const deleteProductFromFavourites = () => {
    dispatch(deleteItemFromFavourites(id))
  }

  return {
    id,
    userID,
    checkProductInCart,
    checkProductInFavourites,
    product,
    isError,
    isLoading,
    isFetching,
    addProductInCart,
    deleteItemFromCart,
    addProductInFavourites,
    deleteProductFromFavourites,
    like,
    deleteLike,
    mutateDeleteProduct,
  }
}
