import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../../API'
import { SIGN_UP_DATA_KEY_IN_LS } from '../../../../const_variables/const_variables'

export function useSignUp() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const { mutate } = useMutation({
    mutationFn: (formPayload) => api.signUp(
      formPayload.email,
      formPayload.password,
    ).then((response) => {
      if (response.status === 201) return response.json()
      throw response
    }),
    onSuccess: (data) => {
      openModal()
      window.localStorage.setItem(SIGN_UP_DATA_KEY_IN_LS, JSON.stringify(data))
      queryClient.invalidateQueries({ queryKey: ['signUp'] })
      setTimeout(() => navigate('/'), 3000)
    },
    onError: () => {
      setIsError(true)
    },
  })

  return {
    isModalOpen,
    mutate,
    isError,
    setIsError,
    isShowPassword,
    setIsShowPassword,
  }
}
