/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import logoDog from '../../../images/logo_dog.png'
import { Modal } from '../../Modal/Modal'
import { ProfileForm } from '../../ProfileForm/ProfileForm'
import stylesHeader from '../styles.module.scss'

export function HeaderActiveSigIn() {
  const [input, setInput] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div className="d-flex justify-content-between align-items-center py-1">
      <div className="d-flex align-items-center">
        <img src={logoDog} width={100} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-1`}>DogFoot</h3>
      </div>

      <form>
        <div className="mb-3">
          <input onChange={((e) => setInput(e.target.value))} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </form>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <button type="button" className="d-flex flex-column align-items-center">
          <i className="fa-regular fa-heart fs-3" />
          Избранное
        </button>
        <button type="button" className="d-flex flex-column align-items-center">
          <i className="fa-solid fa-basket-shopping fs-3" />
          Корзина
        </button>
        <button onClick={openModal} type="button" className="d-flex flex-column align-items-center">
          <i className="fa-solid fa-user fs-3" />
          Профиль
        </button>

        <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
          <ProfileForm closeModal={closeModal} />
        </Modal>

      </div>
    </div>
  )
}
