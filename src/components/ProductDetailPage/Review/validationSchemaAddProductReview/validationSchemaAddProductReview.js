import * as Yup from 'yup'

export const validationSchemaAddProductReview = Yup.object(
  {
    text: Yup.string()
      .min(10, 'Должно быть не менее 10символов.')
      .required('Поле обязательное для заполнения'),
  },
)
