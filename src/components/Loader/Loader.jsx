import styles from './stylesLoader.module.scss'

export function Loader() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.load}`}>
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
      </div>
    </div>
  )
}
