import styles from './styles.module.scss'
import logoErrorMain from '../../images/error_main.png'

export function MainErrorScreen() {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.main}`}>
        <div className="text-center">
          <h3>Oops! Что-то пошло не так!</h3>
          <p>
            В ближайшее время мы устраним проблему и
            приведем систему в рабочее состояние!
          </p>
        </div>
        <div>
          <img className={styles.img} src={logoErrorMain} alt="logo error" />
        </div>

      </div>
    </div>
  )
}
