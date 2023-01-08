import { useQuery } from '@tanstack/react-query'
import { api } from '../../API'
import { PRODUCT_QUERY_KEY } from '../../const_variables/const_variables'
import { Loader } from '../Loader/Loader'
import { ProfileFormItems } from './ProfileFormItem'
import { ProfileFormItemsError } from './ProfileFormItemsError/ProfileFormItemsError'

export function ProfileForm({ closeModal }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [PRODUCT_QUERY_KEY],
    queryFn: () => api.getInfoAboutUser()
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
  })

  if (isLoading) return <Loader />
  if (isError) return <ProfileFormItemsError closeModal={closeModal} />

  return (
    <ProfileFormItems {...data} closeModal={closeModal} />
  )
}
