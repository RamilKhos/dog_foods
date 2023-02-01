/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './productDetailPageStyles.module.scss'
import { Loader } from '../Loader/Loader'
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen'
import { useProductDetailPage } from './useProductDetailPage'
import { Review } from './Review/Review'

export function ProductDetailPage() {
  const [showReview, setShowReview] = useState(false)

  const {
    id,
    userID,
    checkProductInCart,
    product,
    isError,
    isLoading,
    addProductInCart,
    deleteItemFromCart,
    addProductInFavourites,
    deleteProductFromFavourites,
    like,
    deleteLike,
    checkProductInFavourites,
    mutateDeleteProduct,
  } = useProductDetailPage()

  if (isLoading) return <Loader />

  const isMyLike = product.likes.includes(userID)
  const isMyProduct = product.author._id === userID

  const showReviews = () => {
    setShowReview(!showReview)
  }

  if (isError) return <MainErrorScreen />

  return (
    <>
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

                  {isMyLike
                    ? (
                      <button onClick={deleteLike} type="button" className={`${styles.product_rating_like} mt-1 ms-2 me-3`}>
                        <i className="fa-solid fa-heart fs-4 me-1" />
                        {product.likes.length}
                      </button>
                    )
                    : (
                      <button onClick={like} type="button" className={`${styles.product_rating_no_like} mt-1 ms-2 me-3`}>
                        <i className="fa-solid fa-heart fs-4 me-1" />
                        {product.likes.length}
                      </button>
                    )}

                  <button onClick={showReviews} type="button" className={styles.review}>{`${product.reviews.length} Отзывы`}</button>

                </div>

                {product.discount
                  ? (
                    <div className={styles.product_price}>
                      <span className={styles.sale_price}>{`₽${product.price - (product.price * (product.discount / 100))}`}</span>
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
                  {!checkProductInCart
                    ? <button onClick={addProductInCart} type="button" className={`${styles.button_42} ${styles.button}`}>Добавить в корзину</button>
                    : <button onClick={deleteItemFromCart} type="button" className={`${styles.button_42} ${styles.productInCart} ${styles.button}`}>Товар в корзине</button>}

                  {checkProductInFavourites
                    ? (
                      <button onClick={deleteProductFromFavourites} type="button" className={`${styles.button_favourite}`}>
                        <i className="fa-regular fa-heart" />
                      </button>
                    )
                    : (
                      <button onClick={addProductInFavourites} type="button" className={`${styles.button_no_favourite}`}>
                        <i className="fa-regular fa-heart" />
                      </button>
                    )}

                  {isMyProduct
                    ? (
                      <button onClick={mutateDeleteProduct} type="button" className={`${styles.button_deleteProduct}`}>
                        <i className="fa-regular fa-trash-can" />
                      </button>
                    )
                    : (null)}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showReview ? <Review id={id} /> : null}

    </>
  )
}
