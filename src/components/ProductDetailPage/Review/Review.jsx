/* eslint-disable no-underscore-dangle */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { Loader } from '../../Loader/Loader'
import { ReviewItem } from './ReviewItem/ReviewItem'
import styles from '../productDetailPageStyles.module.scss'
import { Modal } from '../../Modal/Modal'
import { validationSchemaAddProductReview } from './validationSchemaAddProductReview/validationSchemaAddProductReview'
import { useReview } from './customHooks/useReview'

export function Review() {
  const {
    id, isModalOpen, mutate, isLoading, review, closeModal, openModal,
  } = useReview()

  if (isLoading) return <Loader />

  return (
    <>
      <div>
        <div>
          {review.map((elem) => (<ReviewItem key={elem._id} {...elem} idProduct={id} />)) }
        </div>
      </div>

      <div className={styles.add_review_container}>
        <div className={styles.button_container}>
          <button onClick={openModal} type="button" className={styles.button_add_comment}> Оставить отзыв</button>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen}>
        <Formik
          initialValues={{
            rating: 5,
            text: '',
          }}
          validationSchema={validationSchemaAddProductReview}
          onSubmit={mutate}
        >
          <Form className={styles.feedback}>

            <button onClick={closeModal} className={styles.icon_closed} type="button">
              <i className="fa-solid fa-xmark" />
            </button>

            <div className={styles.form_group}>
              <div className="inputGroupContainer">

                <div className={styles.pinfo}>Укажите рейтинг товара</div>

                <div className={styles.input_group}>
                  <span className={styles.input_group_addon}><i className="star fa-solid fa-star text-warning" /></span>
                  <Field as="select" name="rating" className={styles.form_control} required="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>
                </div>
              </div>
            </div>

            <div className={styles.pinfo}>Напишите свой отзыв</div>

            <div className={styles.form_group}>
              <div className="inputGroupContainer">
                <div className={styles.input_group}>
                  <span className={styles.input_group_addon}><i className="fa fa-pencil" /></span>
                  <Field as="textarea" className={styles.form_control} name="text" placeholder="Описание" required="" />
                </div>
                <ErrorMessage className="text-danger" component="span" name="text" />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Отправить отзыв</button>
            </div>

          </Form>
        </Formik>
      </Modal>
    </>
  )
}
