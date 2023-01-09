/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../API'
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import { MainCard } from './MainCard/MainCard'
import { SearchBar } from './SearchBar/SearchBar'

export function MainContainer() {
  const navigate = useNavigate()

  const token = useSelector((store) => store.token)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  const {
    data, isLoading, isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.showAllProduct()
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
  })

  if (isLoading) return <Loader />
  if (isError) return <MainErrorScreen />

  return (
    <div className="container m-20px pt-3">
      <SearchBar />
      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
        {data.products.map((el) => (
          <MainCard
            key={el._id}
            name={el.name}
            discount={el.discount}
            price={el.price}
            pictures={el.pictures}
            id={el._id}
            stock={el.stock}
          />
        ))}
      </div>
    </div>
  )
}
