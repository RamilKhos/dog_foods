import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import stylesForm from '../style.module.scss'
import { useSignIn } from './customHooks/useSignIn'
import { validationSchema } from './validationSchema/validationSchema'

export function SignIn() {
  const {
    mutate, isError, setIsError, isShowPassword, setIsShowPassword,
  } = useSignIn()

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={mutate}
    >
      {(formik) => (
        <Form className={`${stylesForm.card_front}`}>
          <div className={`${stylesForm.center_wrap}`}>
            <div className={`${stylesForm.section} text-center`}>

              <h4 className={`${stylesForm.h4} mb-4 pb-3`}>Log In</h4>

              <div className={`${stylesForm.form_group}`}>
                <Field onInput={() => setIsError(false)} type="email" className={`${stylesForm.form_style}`} name="email" placeholder="Your Email" id="signInEmail" autoComplete="on" />
                <i className={`${stylesForm.input_icon} fa-solid fa-at`} />
                <ErrorMessage className="text-danger" component="span" name="email" />
                {isError ? (<div className="text-danger mt-2">Hеправильно указан логин или пароль</div>) : null}
              </div>

              <div className={`${stylesForm.form_group} mt-2`}>
                <Field onInput={() => setIsError(false)} type={!isShowPassword ? 'password' : 'text'} name="password" className={`${stylesForm.form_style}`} placeholder="Your Password" id="signInPassword" autoComplete="off" />
                <ErrorMessage className="text-danger" component="span" name="password" />
                <i className={`${stylesForm.input_icon} fa-solid fa-lock`} />
                <button onClick={() => setIsShowPassword(!isShowPassword)} className={`${stylesForm.input_icon_show_pass} fa-solid fa-eye ${!isShowPassword ? 'text-success' : null}`} type="button" aria-label="btn_eye" />
              </div>

              <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={`${stylesForm.btn} ${stylesForm.a} mt-4`}>Войти</button>

              <p className={`${stylesForm.link} ${stylesForm.p} mb-5 mt-4 text-center`}><a href="#0">Forgot your password?</a></p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
