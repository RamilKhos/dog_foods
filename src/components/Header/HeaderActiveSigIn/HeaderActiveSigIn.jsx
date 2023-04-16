import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import logoDog from '../../../images/logo_dog.png'
import stylesHeader from '../styles.module.scss'

export function HeaderActiveSigIn() {
  const navigate = useNavigate()
  const productInCart = useSelector((store) => store.cart)
  const productInFavourites = useSelector((store) => store.favourites)

  const profileFormHandler = () => {
    navigate('profile')
  }

  const cartHandler = () => {
    navigate('cart')
  }

  const favouritesHandler = () => {
    navigate('favourites')
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
        <img src={logoDog} className="mh-100" width={72} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-1`}>DogFood</h3>
      </Link>

      <div className="d-flex justify-content-between align-items-center gap-3">

        <button onClick={favouritesHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-regular fa-heart`}>
            {productInFavourites.length > 0 ? (
              <span className={stylesHeader.stickerAddProducts}>
                {productInFavourites.length}
              </span>
            ) : null}
          </i>
          <span className={stylesHeader.textUnderIcon}>Избранное</span>
        </button>

        <button onClick={cartHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-solid fa-basket-shopping`}>
            {productInCart.length > 0 ? (
              <span className={stylesHeader.stickerAddProducts}>
                {productInCart.length}
              </span>
            ) : null}
          </i>
          <span className={stylesHeader.textUnderIcon}>Корзина</span>
        </button>

        <button onClick={profileFormHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-solid fa-user`} />
          <span className={stylesHeader.textUnderIcon}>Профиль</span>
        </button>

      </div>
    </div>
  )
}
