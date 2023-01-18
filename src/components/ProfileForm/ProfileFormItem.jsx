import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from '../../redux/slices/tokenSlice/tokenSlice'

export function ProfileFormItems({
  avatar, name, about, email, closeModal,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const exitOfProfile = () => {
    dispatch(deleteToken())
    navigate('login')
    closeModal()
  }

  return (
    <div className="card" style={{ width: `${40}rem`, height: `${40}rem` }}>
      <button onClick={closeModal} type="button" className="position-absolute top-0 end-0" aria-label="closeWindow"><i className="fa-solid fa-xmark fs-3" /></button>
      <div className="p-5">
        <img src={`${avatar}`} className="card-img-top" alt="avatar" />

        <div className="card-body mt-4 position-relative">
          <h5 className="card-title fw-lighter">
            {`Name: ${name}`}
            {' '}
            <button type="button" className="ms-2" aria-label="editName"><i className="fa-solid fa-pen" /></button>
          </h5>

          <h5 className="card-text fw-lighter">
            {`About: ${about}`}
            <button type="button" className="ms-2" aria-label="editAbout"><i className="fa-solid fa-pen" /></button>
          </h5>

          <h5 className="card-text fw-lighter">
            {`E-mail: ${email}`}
            <button type="button" className="ms-2" aria-label="editEmail"><i className="fa-solid fa-pen" /></button>
          </h5>

          <button onClick={exitOfProfile} type="button" className="position-absolute bottom-0 end-0 fs-5 fw-bold text-decoration-underline text-primary">
            <i className="fa-solid fa-right-from-bracket me-1" />
            Выйти
          </button>

        </div>
      </div>
    </div>
  )
}
