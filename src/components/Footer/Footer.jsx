import stylesFooter from './styles.module.scss'
import logoDog from '../../images/logo_dog.png'

export function Footer() {
  return (
    <footer className={stylesFooter.footer}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-1">

          <div className="d-flex align-items-center">
            <img src={logoDog} width={100} alt="logo_dog" />
            <h3 className={`${stylesFooter.caption}`}>DogFoot</h3>
          </div>

          <div>
            Navigation
          </div>

          <div>
            Contacts
          </div>
        </div>
      </div>
    </footer>
  )
}
