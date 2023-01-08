import { useNavigate } from 'react-router-dom'
import styles from './profileErrorsStyle.module.scss'
import profileFormError from '../../../images/profileFormError.png'

export function ProfileFormItemsError({ closeModal }) {
  const navigate = useNavigate()

  function redirectToSignIn() {
    navigate('/')
    closeModal()
  }

  return (
    <div className="container card d-flex justify-content-center align-items-center" style={{ width: `${40}rem`, height: `${40}rem` }}>
      <div className={styles.text}>
        <h1>Oops! Что-то пошло не так!</h1>
      </div>

      <div className={styles.images}>
        <img src={profileFormError} className={styles.img} alt="profileFormError" />
      </div>

      <div className="p-4">
        <button onClick={redirectToSignIn} className="fs-5 text-primary text-decoration-underline" type="button" aria-label="authorization">Вернуться на главную страницу</button>
      </div>
    </div>
  )
}
