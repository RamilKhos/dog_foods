import stylesFooter from './styles.module.scss'
import logoDog from '../../images/logo_dog.png'

export function Footer() {
  return (
    <footer className={stylesFooter.footer}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            <img src={logoDog} height={72} alt="logo_dog" />
            <h3 className={`${stylesFooter.caption}`}>DogFood</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
