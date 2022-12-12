import { TOKEN_KEY_IN_LS } from '../../const_variables/const_variables'
import { HeaderActiveSigIn } from './HeaderActiveSigIn/HeaderActiveSigIn'
import { HeaderNoActiveSigIn } from './HeaderNoActiveSigIn/HeaderNoActiveSigIn'
import stylesHeader from './styles.module.scss'

export function Header() {
  const checkTokenInLS = localStorage.getItem(TOKEN_KEY_IN_LS)

  return (
    <header className={`${stylesHeader.header}`}>
      <div className="container">
        {checkTokenInLS ? <HeaderActiveSigIn /> : <HeaderNoActiveSigIn />}
      </div>
    </header>
  )
}
