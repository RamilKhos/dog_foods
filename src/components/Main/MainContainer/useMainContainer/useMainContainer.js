/* eslint-disable no-shadow */
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PRODUCTS_SEARCH_QUERY_KEY, BASE_URL_GET_PRODUCTS } from '../../../../const_variables/const_variables'
import { useFilterContextData, useFilterContextMethods } from '../../../FilterContext/FilterContextProvider'
import { useDebounce } from '../useDebounce/useDebounce'

export const useMainContainer = () => {
  const { token } = useSelector((store) => store.userInfo)
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const [sort, setSort] = useState(() => searchParams.get('sort') ?? 'POPULAR')

  const { setSearch } = useFilterContextMethods()
  const debounceValue = useDebounce(input, 500)

  useEffect(() => {
    setSearchParams({ q: input, sort })
  }, [input, sort])

  useEffect(() => {
    setSearch(debounceValue)
  }, [debounceValue])

  const filters = useFilterContextData()
  const getProductsQueryKey = (filters) => PRODUCTS_SEARCH_QUERY_KEY.concat(Object.values(filters))

  const getAllProducts = (filters) => fetch(
    `${BASE_URL_GET_PRODUCTS}${new URLSearchParams(filters).toString()}`,
    { headers: { authorization: `Bearer ${token}` } },
  ).then((res) => res.json())

  const {
    data, isLoading, isError, isFetching,
  } = useQuery({
    queryKey: getProductsQueryKey(filters),
    queryFn: () => getAllProducts({
      query: filters.search,
    }),
  })

  const btnAddHandler = () => {
    navigate('add_product')
  }

  return {
    data,
    isLoading,
    isFetching,
    isError,
    input,
    setInput,
    btnAddHandler,
    sort,
    setSort,
  }
}
