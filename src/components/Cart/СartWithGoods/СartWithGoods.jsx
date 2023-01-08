import { Checkbox, FormControlLabel } from '@mui/material'
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import styles from '../cartStyles.module.scss'
import { CartWithGoodsLeftBlock } from './CartWithGoodsLeftBlock/CartWithGoodsLeftBlock'
import { CartWithGoodsRightBlock } from './CartWithGoodsRightBlock/CartWithGoodsRightBlock'
import { useCartWithGoods } from './customHooks/useCartWithGoods'

export function СartWithGoods() {
  const {
    // ОТКУДА ЗДЕСЬ ЭТОТ cheked, ОН НЕ ПЕРЕДАЕТСЯ С ХУКА useCartWithGoods()
    // НО БЕЗ НЕГО НЕ РАБОТАЕТ
    isError, isLoading, checkboxAllSelectedHandler, checked, productsToCart,
  } = useCartWithGoods()

  if (isLoading) return <Loader />
  if (isError) return <MainErrorScreen />

  return (
    <>
      <h1 className={`${styles.cart_title}`}>Корзина</h1>
      <div className={`${styles.cart_tab_content}`}>
        <div className={`${styles.cart_items__products}`}>

          <div className={styles.mass_selection}>
            <div className={styles.mass_selection__choose_all}>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={checked}
                    onChange={(event) => {
                      checkboxAllSelectedHandler(event.target.checked)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                )}
                label="Выбрать все"
              />
            </div>

            <div className={styles.mass_selection__delete_btn}>
              Удалить выбранные
            </div>
          </div>

          <div className={styles.left_block}>
            {productsToCart.map(((product) => (
              <CartWithGoodsLeftBlock key={product.id} product={product} />
            )))}
          </div>

        </div>
        <CartWithGoodsRightBlock />
      </div>
    </>
  )
}
