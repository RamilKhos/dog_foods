import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer/MainContainer'
import styles from './MainContainer/styles.module.scss'

export function Main() {
  const { token } = useSelector((store) => store.userInfo)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('login')
    }
  }, [])

  return (
    <div className={styles.cont_graw}>
      <MainContainer />
    </div>
  )
}
