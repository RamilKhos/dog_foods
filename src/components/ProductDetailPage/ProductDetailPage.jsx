/* eslint-disable no-shadow */
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { api } from '../../API'
import styles from './productDetailPageStyles.module.scss'
import { PRODUCT_QUERY_KEY } from '../../const_variables/const_variables'
import { Loader } from '../Loader/Loader'
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen'
import { getIdProduct } from '../../redux/actionCreaters/cartAC'

export function ProductDetailPage() {
  const [addBtnDisabled, setAddBtnDisabled] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()

  const getProduckQueryKey = (id) => [PRODUCT_QUERY_KEY, id]

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
    setAddBtnDisabled(true)
  }

  if (isLoading) return <Loader />
  if (isError) return <MainErrorScreen />

  return (

    <div className={styles.container}>
      <div className={styles.single_product}>
        <div className={styles.row}>

          <div className={styles.col_6}>
            <div className={styles.product_image}>
              <div className={styles.product_image_main}>
                <img src={product.pictures} alt="" id="product_main_image" />
              </div>
            </div>
          </div>

          <div className={styles.col_6}>
            <div className={styles.breadcrumb}>
              <span><Link to="/">Каталог</Link></span>
              <span className={styles.active}>Продукт</span>
            </div>

            <div className={styles.product}>

              <div className={styles.product_title}>
                <h2>{product.name}</h2>
              </div>

              <div className={styles.product_rating}>
                <span className="mt-1 ms-2 me-3">
                  <i className="fa-solid fa-heart fs-4 me-1" />
                  {product.likes.length}
                </span>
                <div>
                  <button type="button"><span className={styles.review}>{`${product.reviews.length} Review`}</span></button>
                </div>

              </div>

              {product.discount
                ? (
                  <div className={styles.product_price}>
                    <span className={styles.sale_price}>{`₽${product.price - product.discount}`}</span>
                    <span className={`${styles.offer_price} ${styles.offer_price_line_through}`}>{`₽${product.price}`}</span>
                  </div>
                )
                : (
                  <div className={styles.product_price}>
                    <span className={styles.offer_price}>{`₽${product.price}`}</span>
                  </div>
                )}

              <div className={styles.product_details}>
                <h3>Описание</h3>
                <p>
                  {product.description}
                </p>
              </div>

              <span className={styles.divider} />
              <div className={styles.product_btn_group}>
                {!addBtnDisabled
                  ? <button onClick={addProductInCart} disabled={addBtnDisabled} type="button" className={`${styles.button_42} ${styles.button}`}>Добавить в корзину</button>
                  : <button disabled={addBtnDisabled} type="button" className={`${styles.button_42} ${styles.button}`}>Товар в корзине</button>}

                <div className={`${styles.button_favourite}`}>
                  <i className="fa-regular fa-heart" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
