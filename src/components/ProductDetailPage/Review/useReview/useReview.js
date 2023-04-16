/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../../API'
import { notifySuccess } from '../../../toastify/toastify'

export const useReview = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Получить отзывы к товару
  const { data: review, isLoading } = useQuery({
    queryKey: ['REVIEWS_PRODUCT'].concat(id),
    queryFn: () => api.getReviewProductById(id).then((res) => res.json()),
  })

  console.log(review)

  // Добавить отзыв
  const { mutate } = useMutation({
    mutationFn: (formPayload) => api.addReview(
      id,
      +formPayload.rating,
      formPayload.text,
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['REVIEWS_PRODUCT'] })
      notifySuccess()
      closeModal()
    },
  })

  return {
    id,
    isModalOpen,
    setIsModalOpen,
    mutate,
    isLoading,
    review,
    openModal,
    closeModal,
  }
}
