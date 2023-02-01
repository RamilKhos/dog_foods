/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import dateFormat from 'dateformat'
import { useSelector } from 'react-redux'
import { api } from '../../../../API'
import { notifyDeleteProduct } from '../../../toastify/toastify'
import styles from '../styles.module.scss'

export function ReviewItem({
  rating, text, author, created_at, _id, idProduct,
}) {
  const { userID } = useSelector((store) => store.userInfo)
  const isMyReview = userID === author._id

  const create = new Date(created_at)
  const date = dateFormat(create)

  const queryClient = useQueryClient()

  // Удалить отзыв
  const { mutate } = useMutation({
    mutationFn: () => api.deleteRewiew(idProduct, _id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['REVIEWS_PRODUCT'] })
      notifyDeleteProduct('Отзыв удален!')
    },
  })

  return (
    <div className={styles.comments_container}>
      <div className={styles.comments_list}>

        <div className={styles.comment_main_level}>

          <div className={styles.comment_avatar}>
            <img src={author.avatar} alt="avatar" />
          </div>

          <div className={styles.comment_box}>

            <div className={styles.comment_head}>

              <div>
                <h6 className={`${styles.comment_name}`}>{author.name}</h6>
                <span>{author.email}</span>
              </div>

              <div>
                {[...Array(rating)].map((e, i) => <i className="star fa-solid fa-star text-warning" key={i} />)}
              </div>

              <span>{date}</span>
            </div>

            <div className={styles.comment_content}>
              {text}
            </div>

            {isMyReview ? (
              <button onClick={mutate} type="button" className={styles.icon_delete_review}>
                <i className="fa-regular fa-trash-can text-danger" />
              </button>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  )
}
