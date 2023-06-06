import React, { PropsWithChildren } from 'react'
import '../../styles/main/Modal.scss'

interface ModalProps {
  onClickToggleModal: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClickToggleModal, children }) => {
  return (
    <div className="modalContainer">
      <div className="dialogBox">{children}</div>
      <div
        className="backDrop"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          if (onClickToggleModal) {
            onClickToggleModal()
          }
        }}
      />
    </div>
  )
}

export default Modal
