import React, { PropsWithChildren } from 'react'
import '../../assets/styles/common/Modal.scss'
import { ModalProps } from '../../types/commonTypes'

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
