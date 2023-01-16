/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import { MainCard } from './MainCard/MainCard'
import { NothingFound } from './NothingFound/NothingFound'
import { useMainContainer } from './useMainContainer/useMainContainer'
import style from './searchBarStyles.module.scss'

export function MainContainer() {
  const token = useSelector((store) => store.token)

  const {
    navigate, data, isLoading, isError, input, setInput,
  } = useMainContainer()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  if (isLoading) return <Loader />
  if (isError) return <MainErrorScreen />

  return (
    <div className="container flex-row  m-20px pt-3">
      <div className={`${style.search__container}`}>
        <input onChange={(e) => setInput(e.target.value)} value={input} className={`${style.search__input}`} type="text" placeholder="Search" />
      </div>

      {data.length > 0
        ? (
          <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
            {data.map((el) => (
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
        )
        : <NothingFound setInput={setInput} />}
    </div>
  )
}
