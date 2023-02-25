import { useSelector } from 'react-redux'
import { СartWithGoods } from './СartWithGoods/СartWithGoods'
import styles from './cartStyles.module.scss'
import { CartIsEmpty } from './CartIsEmpty/CartIsEmpty'

export function Cart() {
  const cart = useSelector((store) => store.cart)

  return (
    <div className={`${styles.cart_page_new}`}>
      {cart.length > 0 ? <СartWithGoods /> : <CartIsEmpty />}
    </div>
  )
}
