import { useSelector } from 'react-redux'
import { HeaderActiveSigIn } from './HeaderActiveSigIn/HeaderActiveSigIn'
import { HeaderNoActiveSigIn } from './HeaderNoActiveSigIn/HeaderNoActiveSigIn'
import stylesHeader from './styles.module.scss'

export function Header() {
  const { token } = useSelector((store) => store.userInfo)

  return (
    <header className={`${stylesHeader.header}`}>
      <div className="container">
        {token ? <HeaderActiveSigIn /> : <HeaderNoActiveSigIn />}
      </div>
    </header>
  )
}
