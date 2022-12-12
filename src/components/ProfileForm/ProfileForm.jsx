import { useNavigate } from 'react-router-dom'
import { DATA_KEY_IN_LS } from '../../const_variables/const_variables'

export function ProfileForm({ closeModal }) {
  const navigate = useNavigate()

  const obj = JSON.parse(localStorage.getItem(DATA_KEY_IN_LS))

  function redirectToSignIn() {
    navigate('/login')
    closeModal()
  }

  if (obj) {
    return (

      <div className="card" style={{ width: `${40}rem`, height: `${40}rem` }}>
        <button onClick={closeModal} type="button" className="position-absolute top-0 end-0" aria-label="closeWindow"><i className="fa-solid fa-xmark fs-3" /></button>
        <div className="p-5">
          <img src={`${obj.avatar}`} className="card-img-top" alt="avatar" />

          <div className="card-body mt-4">
            <h5 className="card-title fw-lighter">
              {`Name: ${obj.name}`}
              {' '}
              <button type="button" className="ms-2" aria-label="editName"><i className="fa-solid fa-pen" /></button>
            </h5>

            <h5 className="card-text fw-lighter">
              {`About: ${obj.about}`}
              <button type="button" className="ms-2" aria-label="editAbout"><i className="fa-solid fa-pen" /></button>
            </h5>

            <h5 className="card-text fw-lighter">
              {`E-mail: ${obj.email}`}
              <button type="button" className="ms-2" aria-label="editEmail"><i className="fa-solid fa-pen" /></button>
            </h5>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card d-flex justify-content-center align-items-center" style={{ width: `${40}rem`, height: `${40}rem` }}>
      <div className="p-4 ">
        <button onClick={redirectToSignIn} className="fs-1 text-primary text-decoration-underline" type="button" aria-label="authorization">Авторизуйтесь</button>
      </div>
    </div>

  )
}
