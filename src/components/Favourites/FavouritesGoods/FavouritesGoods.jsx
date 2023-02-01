/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import { FavouritesGoodsItem } from './FavouritesGoodsItem/FavouritesGoodsItem'
import { useFavouritesGoods } from './useFavouritesGoods'
import styles from './favouritesGoodStyles.module.scss'

export function FavouritesGoods() {
  const {
    products, isError, isLoading, isFetching,
  } = useFavouritesGoods()

  if (isLoading || isFetching) return <Loader />
  if (isError) return <MainErrorScreen />

  return (
    <div className="container">

      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.link}>
          <i className="fa-solid fa-arrow-left" />
          <span className={styles.link}>Вернуться к покупкам</span>
        </Link>
      </div>

      <h1 className={`${styles.cart_title}`}>Избранное</h1>

      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
        {products.map((el) => (
          <FavouritesGoodsItem
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
