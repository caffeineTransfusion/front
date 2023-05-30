import React, { PropsWithChildren } from 'react'

interface ModalProps {
  onClickToggleModal: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClickToggleModal, children }) => {
  return (
    <div>
      <div>{children}</div>
      <div
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
