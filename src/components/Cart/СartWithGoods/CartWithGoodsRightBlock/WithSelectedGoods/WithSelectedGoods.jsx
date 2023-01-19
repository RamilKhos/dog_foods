import styles from '../cartStylesRightBlock.module.scss'

export function WithSelectedGoods({
  totalDiscountedPrice, finalPriceWithoutDiscount, finalCount, isDiscount,
}) {
  return (
    <>
      <div className={`${styles.total_amount__summary_section}`}>
        <div className={`${styles.summary__price} ${styles.summary}`}>
          <div className={`${styles.summary_header}`} style={{ cursor: 'default' }}>

            {/* количество товаров */}
            <div className={`${styles.summary_header__text}`}>
              <span className={`${styles.summary_header__total}`}>Итого:</span>
              <div className={`${styles.summary_header__total_items}`}>{`${finalCount} шт.`}</div>
            </div>

            {/* итоговая цена */}
            {isDiscount.some((elem) => elem) ? (
              <div className={`${styles.price}`}>
                <span className={`${styles.price__block_price_offer_crossed_out}`}>{`${finalPriceWithoutDiscount} ₽`}</span>
                <div className={`${styles.price__block} ${styles.price__block_main}`}>
                  <span className={`${styles.price__sales}`}>{`${totalDiscountedPrice} ₽`}</span>
                </div>
              </div>
            ) : (
              <div className={`${styles.price}`}>
                <span className={`${styles.price__block_price_offer}`}>{`${finalPriceWithoutDiscount} ₽`}</span>
              </div>
            )}

          </div>
        </div>
      </div>
      <div className={`${styles.total_amount__buttons_section}`}>
        <button type="button" className={`${styles.base_ui_button_v2_brand} ${styles.base_ui_button_v2} ${styles.buy_button}`} loading="false">
          <span>Перейти к оформлению</span>
        </button>
      </div>
    </>
  )
}
