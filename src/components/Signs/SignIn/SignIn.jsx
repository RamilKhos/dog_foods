import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import stylesForm from '../style.module.scss'
import { DATA_KEY_IN_LS, TOKEN_KEY_IN_LS } from '../../../const_variables/const_variables'
import { api } from '../../../API'

export function SignIn() {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        email: '', password: '',
      }}
      validationSchema={Yup.object(
        {
          email: Yup.string().email('Не корректный адрес электронной почты').required('Поле обязательное для заполнения'),
          password: Yup.string()
            .min(6, 'Укажите минимум шесть символов')
            .required('Поле обязательное для заполнения'),
        },
      )}
      onSubmit={(values) => {
        api.sigIn(values.email, values.password)
          .then((dataServer) => {
            if (dataServer) {
              localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(dataServer.token))
              localStorage.setItem(DATA_KEY_IN_LS, JSON.stringify(dataServer.data))
              navigate('/')
            }
          })
      }}
    >
      {(formik) => (
        <Form className={`${stylesForm.card_front}`}>
          <div className={`${stylesForm.center_wrap}`}>
            <div className={`${stylesForm.section} text-center`}>
              <h4 className={`${stylesForm.h4} mb-4 pb-3`}>Log In</h4>
              <div className={`${stylesForm.form_group}`}>
                <Field type="email" className={`${stylesForm.form_style}`} name="email" placeholder="Your Email" id="sigInEmail" />
                <i className={`${stylesForm.input_icon} uil uil-at`} />
                <ErrorMessage className="text-danger" component="span" name="email" />
              </div>
              <div className={`${stylesForm.form_group} mt-2`}>
                <Field type="password" name="password" className={`${stylesForm.form_style}`} placeholder="Your Password" id="sigInPassword" />
                <ErrorMessage className="text-danger" component="span" name="password" />
                <i className={`${stylesForm.input_icon} uil uil-lock-alt`} />
              </div>
              <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={`${stylesForm.btn} ${stylesForm.a} mt-4`}>Войти</button>
              <p className={`${stylesForm.link} ${stylesForm.p} mt-4 text-center`}><a href="#0">Forgot your password?</a></p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
