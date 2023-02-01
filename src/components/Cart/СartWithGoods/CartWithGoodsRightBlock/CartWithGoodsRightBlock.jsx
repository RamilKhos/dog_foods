/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux'
import styles from './cartStylesRightBlock.module.scss'
import { UnselectedGoods } from './UnselectedGoods/UnselectedGoods'
import { WithSelectedGoods } from './WithSelectedGoods/WithSelectedGoods'

export function CartWithGoodsRightBlock({ products }) {
  const cart = useSelector((store) => store.cart)

  let totalDiscountedPrice = null
  let finalPriceWithoutDiscount = null
  let finalCount = null
  const isDiscount = []

  cart.forEach((element) => {
    products.forEach((product) => {
      if (element.id === product._id && element.isSelected) {
        finalPriceWithoutDiscount += product.price * element.count
        totalDiscountedPrice += (product.price
            - (product.price * (product.discount / 100))) * element.count
        finalCount += element.count
        isDiscount.push(Boolean(product.discount))
      }
    })
  })

  return (
    <div className={`${styles.cart_tab_total_amount}`}>
      <div className={`${styles.cart_tab_total_amount__inner}`}>
        <div className={`${styles.total_amount}`}>
          <div className={`${styles.total_amount__content}`}>

            <div className={`${styles.total_amount__title} ${styles.total_amount__title_bottom_border}`}>
              <span className="">Условия заказа</span>
            </div>

            {finalCount !== null ? (
              <WithSelectedGoods
                totalDiscountedPrice={totalDiscountedPrice}
                finalPriceWithoutDiscount={finalPriceWithoutDiscount}
                finalCount={finalCount}
                isDiscount={isDiscount}
              />
            ) : (
              <UnselectedGoods />
            )}

          </div>
        </div>
      </div>
    </div>

  )
}
