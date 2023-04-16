import { useQuery } from '@tanstack/react-query'
import { api } from '../../API'
import { PRODUCT_QUERY_KEY } from '../../const_variables/const_variables'
import { Loader } from '../Loader/Loader'
import { ProfileFormErrorScreen } from './ProfileFormErrorScreen/ProfileFormErrorScreen'
import { ProfileFormItems } from './ProfileFormItem/ProfileFormItem'

export function ProfileForm() {
  const {
    data, isLoading, isError, isFetching,
  } = useQuery({
    queryKey: [PRODUCT_QUERY_KEY],
    queryFn: () => api.getInfoAboutUser()
      .then((response) => {
        if (response.status === 200) return response.json()
        throw response
      }),
  })

  if (isLoading || isFetching) return <Loader />
  if (isError) return <ProfileFormErrorScreen />

  return (
    <ProfileFormItems {...data} />
  )
}
