import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logoDog from '../../../images/logo_dog.png'
import { Modal } from '../../Modal/Modal'
import { ProfileForm } from '../../ProfileForm/ProfileForm'
import stylesHeader from '../styles.module.scss'

export function HeaderActiveSigIn() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const productInCart = useSelector((store) => store.cart)

  const cartHandler = () => {
    navigate('cart')
  }

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={logoDog} className="mh-100" width={72} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-1`}>DogFoot</h3>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <button type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-regular fa-heart`} />
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
        <button onClick={openModal} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-solid fa-user`} />
          <span className={stylesHeader.textUnderIcon}>Профиль</span>
        </button>

        <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
          <ProfileForm closeModal={closeModal} />
        </Modal>

      </div>
    </div>
  )
}
