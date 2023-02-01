/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { Link } from 'react-router-dom'
import { useAddProduct } from './customHook/useAddProduct'
import styles from './styles.module.scss'
import { validationSchemaAddProduct } from './validationSchemaAddProduct/validationSchemaAddProduct'

export function AddProduct() {
  const { mutate } = useAddProduct()

  return (
    <Formik
      initialValues={{
        available: true,
        pictures: '',
        name: '',
        price: '',
        discount: '',
        stock: '',
        wight: '',
        description: '',
      }}
      validationSchema={validationSchemaAddProduct}
      onSubmit={mutate}
    >
      <Form className={styles.container}>
        <div className={styles.container_items}>

          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.link}>
              <i className="fa-solid fa-arrow-left me-1 mb-3" />
              <span className={styles.link}>Вернуться к покупкам</span>
            </Link>
          </div>

          <h1 className={`${styles.title} mb-4`}>Добавить товар</h1>

          <div className="col-md-4 mb-1">
            <Field type="text" name="pictures" placeholder="Ссылка на картинку продукта" className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="pictures" />
          </div>

          <div className="col-md-4 mb-1">
            <Field type="text" name="name" placeholder="Наименование продукта" className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="name" />
          </div>

          <div className="col-md-4 mb-1">
            <Field type="number" name="price" placeholder="Цена, руб." className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="price" />
          </div>

          <div className="col-md-4 mb-1">
            <Field type="number" name="discount" placeholder="Discount, %" className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="discount" />
          </div>

          <div className="col-md-4 mb-1">
            <Field type="number" name="stock" placeholder="Количество" className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="stock" />
          </div>

          <div className="col-md-4 mb-1">
            <Field type="text" name="wight" placeholder="Вес, г." className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="wight" />
          </div>

          <div className="col-md-4 mb-3">
            <Field as="textarea" name="description" placeholder="Описание" className="form-control input-md" required="" />
            <ErrorMessage className="text-danger" component="span" name="description" />
          </div>

          <div>
            <button type="submit" className={styles.button_42}>Добавить</button>
          </div>
        </div>

      </Form>
    </Formik>
  )
}
