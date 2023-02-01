import * as Yup from 'yup'

export const validationSchemaAddProduct = Yup.object(
  {
    pictures: Yup.string()
      .url('Укажите корректную ссылку'),

    name: Yup.string()
      .min(3, 'Укажите минимум три символа')
      .required('Поле обязательное для заполнения'),

    price: Yup.number()
      .positive('Укажите корректную цену товара')
      .required('Поле обязательное для заполнения'),

    discount: Yup.number()
      .min(0, 'Укажите корретное значение'),

    stock: Yup.number()
      .positive('Укажите минимум один товар'),

    wight: Yup.string()
      .min(2, 'Должно быть не менее 2 символов'),

    description: Yup.string()
      .min(20, 'Должно быть не менее 20 символов.')
      .required('Поле обязательное для заполнения'),
  },
)
