import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer/MainContainer'

export function Main() {
  const { token } = useSelector((store) => store.userInfo)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('login')
    }
  }, [])

  return (
    <MainContainer />
  )
}
