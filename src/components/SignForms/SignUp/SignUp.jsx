import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { Modal } from '../../Modal/Modal'
import stylesForm from '../style.module.scss'
import { useSignUp } from './customhooks/useSignUp'
import { SuccessfulRegistration } from './ModalSignUpuccessfully/SuccessfulRegistration'
import { validationSchemaSignUp } from './validationSchema/validationSchema'

export function SignUp() {
  const {
    isModalOpen, mutate, isError, setIsError, isShowPassword, setIsShowPassword,
  } = useSignUp()

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', double_password: '' }}
        validationSchema={validationSchemaSignUp}
        onSubmit={mutate}
      >
        {(formik) => (
          <Form className={`${stylesForm.card_back}`}>
            <div className={`${stylesForm.center_wrap}`}>
              <div className={`${stylesForm.section} text-center`}>
                <h4 className="mb-4">Sign Up</h4>
                <div className={`${stylesForm.form_group}`}>
                  <input type="text" name="logname" className={`${stylesForm.form_style}`} placeholder="Group: sm8" id="sigUpGroup" autoComplete="off" disabled />
                  <i className={`${stylesForm.input_icon} uil uil-user`} />
                </div>

                <div className={`${stylesForm.form_group} mt-2`}>
                  <Field onInput={() => setIsError(false)} type="email" name="email" className={`${stylesForm.form_style}`} placeholder="Your Email" id="sigUpEmail" autoComplete="off" />
                  <ErrorMessage className="text-danger" component="span" name="email" />
                  {isError ? (<div className="text-danger">Этот адрес электронной почты уже используется. Попробуйте другой.</div>) : null}
                  <i className={`${stylesForm.input_icon} fa-solid fa-at`} />
                </div>

                <div className={`${stylesForm.form_group} mt-2`}>
                  <Field type={!isShowPassword ? 'password' : 'text'} name="password" className={`${stylesForm.form_style}`} placeholder="Your Password" id="password" autoComplete="off" />
                  <ErrorMessage className="text-danger" component="span" name="password" />
                  <i className={`${stylesForm.input_icon} fa-solid fa-lock`} />
                  <button onClick={() => setIsShowPassword(!isShowPassword)} className={`${stylesForm.input_icon_show_pass} fa-solid fa-eye ${!isShowPassword ? 'text-success' : null}`} type="button" aria-label="btn_eye" />
                </div>

                <div className={`${stylesForm.form_group} mt-2`}>
                  <Field type={!isShowPassword ? 'password' : 'text'} name="double_password" className={`${stylesForm.form_style} `} placeholder="Your Password" id="double_password" autoComplete="off" />
                  <ErrorMessage className="text-danger" component="span" name="double_password" />
                  <i className={`${stylesForm.input_icon} fa-solid fa-lock`} />
                </div>

                <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={`${stylesForm.btn} ${stylesForm.a} mt-4 `}>Регистрация</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* Модальное окно об успешной регистрации */}
      <Modal isModalOpen={isModalOpen}>
        <SuccessfulRegistration />
      </Modal>
    </>
  )
}
