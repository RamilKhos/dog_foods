import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import modalStyle from './modal.module.scss'

const ModalContent = ({ children, closeModal }) => {
  useEffect(() => {
    const listenerHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', listenerHandler)

    return () => {
      document.removeEventListener('keydown', listenerHandler)
    }
  }, [closeModal])

  return children
}

export function Modal({ isModalOpen, children, closeModal }) {
  if (!isModalOpen) return null

  return createPortal(
    <div className={modalStyle.modal}>
      <ModalContent closeModal={closeModal}>
        {children}
      </ModalContent>
    </div>,
    document.getElementById('modal-root'),
  )
}
