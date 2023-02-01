import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className="appStyles">
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
