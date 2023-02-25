import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { PRODUCTS_IS_FAVOURITE } from '../../../const_variables/const_variables'
import { api } from '../../../API'

const getQueryKeyProduct = (id) => PRODUCTS_IS_FAVOURITE.concat(id)

export const useFavouritesGoods = () => {
  const favourites = useSelector((store) => store.favourites)

  const {
    data: products, isError, isLoading, isFetching,
  } = useQuery({
    queryKey: getQueryKeyProduct(favourites.map((product) => product.id)),
    queryFn: () => api.getProductsById(favourites)
      .then((response) => Promise.all(response.map((product) => product.json()))),
  })

  return {
    products,
    isError,
    isLoading,
    isFetching,
  }
}
