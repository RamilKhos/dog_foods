import logoDog from '../../../images/logo_dog.png'
import stylesHeader from '../styles.module.scss'

export function HeaderNoActiveSigIn() {
  return (
    <div className="d-flex justify-content-center align-items-center py-1">
      <div className="d-flex align-items-center">
        <img src={logoDog} width={100} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-4 `}>DogFoot</h3>
      </div>
    </div>
  )
}
