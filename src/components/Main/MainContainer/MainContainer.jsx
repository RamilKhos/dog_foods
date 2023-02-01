/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import { MainCard } from './MainCard/MainCard'
import { NothingFound } from './NothingFound/NothingFound'
import { useMainContainer } from './useMainContainer/useMainContainer'
import style from './searchBarStyles.module.scss'
import { productSorting } from './utils'

export function MainContainer() {
  const {
    data, isLoading, isError, isFetching, input, setInput, btnAddHandler, setSort, sort,
  } = useMainContainer()

  if (isLoading || isFetching) return <Loader />

  let dataSort = data.length > 0 ? productSorting(data, sort) : data

  if (isError) return <MainErrorScreen />

  return (
    <div className="container flex-row m-20px pt-3 position-relative">

      <div>
        <button onClick={btnAddHandler} type="button" className={style.button_42}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>

      <div className={`${style.search__container}`}>
        <input onChange={(e) => setInput(e.target.value)} value={input} className={`${style.search__input}`} type="text" placeholder="Search" />
      </div>

      <div>
        {dataSort.length > 0
          ? (
            <>
              <div className={style.filter_container}>
                <div className={style.filter_items}>
                  <button onClick={() => setSort('POPULAR')} type="button">Популярные</button>
                  <button onClick={() => setSort('CHEAP_FIRST')} type="button">Сначала дешевле</button>
                  <button onClick={() => setSort('FIRST_DEAR')} type="button">Сначала дороже</button>
                  <button onClick={() => setSort('BY_DISCOUNT_SIZE')} type="button">По размеру скидки</button>
                  <button onClick={() => setSort('BY_DATE_ADDED')} type="button">По дате добавления</button>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
                {dataSort.map((el) => (
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
            </>
          )
          : <NothingFound setInput={setInput} />}
      </div>
    </div>
  )
}
