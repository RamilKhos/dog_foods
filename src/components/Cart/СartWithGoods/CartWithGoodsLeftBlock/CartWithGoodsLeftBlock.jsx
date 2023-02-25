/* eslint-disable no-underscore-dangle */
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { useCartWithGoodsLeftBlock } from './useCartWithGoodsLeftBlock'

export function CartWithGoodsLeftBlock({ product }) {
  const {
    cartItem, btnMinusState, btnPlusState, btnPlusHandler,
    btnMinusHandler, btnDeleteProductHandler, checkboxHandler,
  } = useCartWithGoodsLeftBlock({ product })

  return (
    <div>
      <div className={styles.cart_tab_products_list}>
        <div className={styles.cart_items__product}>
          <div className={styles.cart_items__content_container}>
            <div className={styles.cart_items__wrapper}>

              <div className={styles.cart_items__product_thumbnail}>

                <div className={styles.cart_items__select_wrapper}>
                  <Checkbox
                    checked={cartItem.isSelected}
                    onChange={checkboxHandler}
                    inputProps={{ 'aria-label': 'controlled' }}
                    className={styles.cart_items__checkbox}
                  />
                </div>

                {/* Картинка */}
                <div className={`${styles.cart_items__product_image_wrap}`}>
                  <a className={`${styles.cart_items__product_image_link}`} href={product.pictures}>
                    <img className={`${styles.cart_items__product_image_img}`} src={product.pictures} alt="images" />
                  </a>
                </div>

                {/* Наименование товара  */}
                <div className={`${styles.cart_items__product_info}`}>
                  <div className={`${styles.cart_items__product_caption}`}>
                    <div className={`${styles.cart_items__product_name}`}>
                      <Link to={`/product/${product.id}`} className={`${styles.base_ui_link} ${styles.base_ui_link_gray_dark}`} target="_self">{product.name}</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Поле количество + -  */}
              <div className={`${styles.cart_items__product_count}`}>
                <div className={`${styles.count_buttons}`}>
                  <button onClick={btnMinusHandler} disabled={btnMinusState} type="button" className={`${styles.count_buttons__button} ${styles.count_buttons__button_minus}`}>
                    <i className={`${styles.count_buttons__icon} fa-solid fa-minus`} />
                  </button>

                  <p className={`${styles.field_count}`}>{cartItem.count}</p>

                  <button onClick={btnPlusHandler} disabled={btnPlusState} type="button" className={`${styles.count_buttons__button} ${styles.count_buttons__button_plus}`}>
                    <i className={`${styles.count_buttons__icon} fa-solid fa-plus`} />
                  </button>
                </div>
              </div>

              {/* Цена товара */}
              <div className={`${styles.cart_items__product_block_amount}`}>
                <div className={`${styles.cart_items__product_price}`}>

                  {product.discount ? (
                    <>
                      <span className={`${styles.price__block_price_offer} ${styles.price__block_price_offer_crossed_out}`}>{`${(product.price) * cartItem.count} ₽`}</span>
                      <div className={`${styles.price}`}>
                        <div className={`${styles.price__block}`}>
                          <span className={`${styles.price__sales}`}>{`${(product.price - (product.price * (product.discount / 100))) * cartItem.count} ₽`}</span>
                        </div>
                      </div>
                    </>
                  ) : (<span className={`${styles.price__block_price_offer}`}>{`${(product.price * cartItem.count)} ₽`}</span>)}

                </div>
              </div>

              {/* Удалить */}
              <div>
                <button onClick={btnDeleteProductHandler} type="button" className={`${styles.menu_control_button}`}>
                  <i className="fa-solid fa-trash-can" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
