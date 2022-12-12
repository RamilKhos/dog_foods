import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../../../API'
import { DATA_KEY_IN_LS, TOKEN_KEY_IN_LS } from '../../../const_variables/const_variables'
import stylesForm from '../style.module.scss'

export function SignUp() {
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
        api.sigUp(values.email, values.password)
          .then((dataServer) => {
            if (dataServer) {
              api.sigIn(values.email, values.password)
                .then((data) => {
                  if (data) {
                    localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(data.token))
                    localStorage.setItem(DATA_KEY_IN_LS, JSON.stringify(data.data))
                    navigate('/')
                  }
                })
            }
          })
      }}
    >
      {(formik) => (
        <Form className={`${stylesForm.card_back}`}>
          <div className={`${stylesForm.center_wrap}`}>
            <div className={`${stylesForm.section} text-center`}>
              <h4 className="mb-4 pb-3">Sign Up</h4>
              <div className={`${stylesForm.form_group}`}>
                <input type="text" name="logname" className={`${stylesForm.form_style}`} placeholder="Group: sm8" id="sigUpEmail" autoComplete="off" disabled />
                <i className={`${stylesForm.input_icon} uil uil-user`} />
              </div>

              <div className={`${stylesForm.form_group} mt-2`}>
                <Field type="email" name="email" className={`${stylesForm.form_style}`} placeholder="Your Email" id="sigUpPassword" />
                <ErrorMessage className="text-danger" component="span" name="email" />
                <i className={`${stylesForm.input_icon} uil uil-at`} />
              </div>

              <div className={`${stylesForm.form_group} mt-2`}>
                <Field type="password" name="password" className={`${stylesForm.form_style}`} placeholder="Your Password" id="logpass" />
                <ErrorMessage className="text-danger" component="span" name="password" />
                <i className={`${stylesForm.input_icon} uil uil-lock-alt`} />
              </div>

              <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={`${stylesForm.btn} ${stylesForm.a} mb-5 mt-4`}>Регистрация</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
