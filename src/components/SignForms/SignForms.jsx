/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignIn } from './SignIn/SignIn'
import { SignUp } from './SignUp/SignUp'
import stylesForm from './style.module.scss'

export function SignForms() {
  const navigate = useNavigate()
  const [input, setInput] = useState(false)

  function changeSlider() {
    setInput(!input)
    if (!input) {
      navigate('/signup')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className={`${stylesForm.section} ${stylesForm.background}`}>
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center">
            <div className={`${stylesForm.section} pb-1  text-center`}>
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input onClick={changeSlider} className={`${stylesForm.checkbox}`} type="checkbox" id="reg-log" name="reg-log" />
              <label className={`${stylesForm.label}`} htmlFor="reg-log" />
              <div className={`${stylesForm.card3dWrap} mx-auto`}>
                <div className={`${stylesForm.card3dWrapper}`}>

                  <SignUp />

                  <SignIn />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
