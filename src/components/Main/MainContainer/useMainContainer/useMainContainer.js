/* eslint-disable no-shadow */
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS_SEARCH_QUERY_KEY, BASE_URL_GET_PRODUCTS } from '../../../../const_variables/const_variables'
import { useFilterContextData, useFilterContextMethods } from '../../../FilterContext/FilterContextProvider'
import { useDebounce } from '../useDebounce/useDebounce'

export const useMainContainer = () => {
  const token = useSelector((store) => store.token)

  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const { setSearch } = useFilterContextMethods()
  const debounceValue = useDebounce(input, 500)

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

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
    data, isLoading, isError,
  } = useQuery({
    queryKey: getProductsQueryKey(filters),
    queryFn: () => getAllProducts({
      query: filters.search,
    }),
  })

  return {
    data,
    isLoading,
    isError,
    input,
    setInput,
  }
}
