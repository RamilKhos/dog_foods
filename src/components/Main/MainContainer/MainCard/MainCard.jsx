import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export function MainCard({
  name, price, pictures, discount, id, stock,
}) {
  const navigate = useNavigate()

  const clickBoxHandler = () => {
    navigate(`/product/${id}`)
  }

  return (

    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <button onClick={clickBoxHandler} type="button" aria-label="">
          <div className={`${styles.box}`}>

            {discount
              ? (
                <div className={styles.icon_sales}>
                  <div className={styles.sales}>{`-${discount}%`}</div>
                </div>
              )
              : null}

            <div className={`${styles.content}`}>

              <img src={pictures} className="card-img-top rounded mb-4" alt="{name}" />

              <div className={`${styles.about}`}>
                <h6>{name}</h6>

                {discount
                  ? (
                    <div className={styles.product_price}>
                      <span className={styles.sale_price}>{`₽${price - (price * (discount / 100))}`}</span>
                      <span className={styles.offer_price_overline}>{`₽${price}`}</span>
                    </div>
                  )
                  : (
                    <div className={styles.product_price}>
                      <span className={styles.offer_price}>{`₽${price}`}</span>
                    </div>
                  )}

                <h5>{`В наличии: ${stock} шт.`}</h5>
              </div>

            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
