/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { api } from '../../../../API'
import { addUserInfo } from '../../../../redux/slices/userInfoSlice/userInfoSlice'

export function useSignIn() {
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const dispatch = useDispatch()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (formPayload) => api.sigIn(
      formPayload.email,
      formPayload.password,
    ).then((response) => {
      if (response.status === 200) return response.json()
      throw response
    }),

    onSuccess: (data) => {
      dispatch(addUserInfo({ token: data.token, userID: data.data._id, group: data.data.group }))
      queryClient.invalidateQueries({ queryKey: ['signIn'] })
      return navigate('/')
    },

    onError: (error) => {
      console.error(error)
      setIsError(true)
    },
  })

  return {
    isError,
    setIsError,
    mutate,
    isShowPassword,
    setIsShowPassword,
  }
}
