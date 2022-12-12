import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { TOKEN_KEY_IN_LS } from './const_variables/const_variables'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const checkTokenInLS = localStorage.getItem(TOKEN_KEY_IN_LS)
    if (checkTokenInLS) {
      return navigate('/')
    }
    return navigate('/login')
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
