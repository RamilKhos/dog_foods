/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../API'
import 'react-toastify/dist/ReactToastify.css'
import { notifySuccess } from '../../toastify/toastify'

export const useAddProduct = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (formPayload) => api.addProduct(
      formPayload.pictures,
      formPayload.name,
      formPayload.price,
      formPayload.discount,
      formPayload.stock,
      formPayload.wight += ' г',
      formPayload.description,
    ),
    onSuccess: () => {
      notifySuccess('Товар успешно добавлен!')
      queryClient.invalidateQueries({ queryKey: ['addProduct'] })
      navigate('/')
    },
  })

  return {
    mutate,
  }
}
