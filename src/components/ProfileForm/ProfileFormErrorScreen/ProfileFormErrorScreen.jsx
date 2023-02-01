import { useNavigate } from 'react-router-dom'
import styles from './ProfileFormErrorScreenStyles.module.scss'
import profileFormError from '../../../images/profileFormError.png'

export function ProfileFormErrorScreen() {
  const navigate = useNavigate()

  function redirectToSignIn() {
    navigate('/')
  }

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
          <img className={styles.img} src={profileFormError} alt="logo error" />
        </div>

        <div className="p-4">
          <button onClick={redirectToSignIn} type="button" className={styles.button_42}>Вернуться в каталог</button>
        </div>
      </div>
    </div>
  )
}
