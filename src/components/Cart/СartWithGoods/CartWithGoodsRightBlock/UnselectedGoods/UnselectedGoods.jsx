import styles from '../styles.module.scss'

export function UnselectedGoods() {
  return (
    <div className={`${styles.total_amount__summary_section}`}>
      <div className={`${styles.summary__price} ${styles.summary}`}>
        <div className={`${styles.summary_header}`} style={{ cursor: 'default' }}>

          <span className={styles.unselected_text}>
            Выберите товары, чтобы перейти к оформлению
          </span>

        </div>
      </div>
    </div>
  )
}
