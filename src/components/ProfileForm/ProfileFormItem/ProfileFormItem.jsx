import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUserInfo } from '../../../redux/slices/userInfoSlice/userInfoSlice'
import styles from './styles.module.scss'

export function ProfileFormItems({
  avatar, name, about, email,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const exitOfProfile = () => {
    dispatch(deleteUserInfo())
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">

            <div type="button" className="btn btn-secondary">
              <img src={avatar} height="220" width="220" alt="avatar_images" />
            </div>

            <span className="name mt-3 fs-4">{name}</span>

            <span className="idd fs-7">{email}</span>

            <div className="text mt-3 fs-7">
              <span>{about}</span>
            </div>

            <div className="px-2 rounded mt-4 date">
              <button onClick={exitOfProfile} type="button" className={styles.button_83}>Выйти из профиля</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
