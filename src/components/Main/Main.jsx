import { MainContainer } from './MainContainer/MainContainer'
import stylesMain from './mainStyles.module.scss'

export function Main() {
  return (
    <div className="container">
      <div className={stylesMain.main}>

        <MainContainer />

      </div>
    </div>
  )
}
