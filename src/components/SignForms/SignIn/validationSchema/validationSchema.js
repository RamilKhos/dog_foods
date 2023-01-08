import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string().email('Не корректный адрес электронной почты').required('Поле обязательное для заполнения'),
  password: Yup.string().required('Поле обязательное для заполнения'),
})
