import React, { useState, useCallback } from 'react'
import '../../styles/main/Header.scss'
import Modal from './Modal'

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const onClickToggleModal = useCallback(() => {
    setModalOpen(!isModalOpen)
  }, [isModalOpen])

  return (
    <div className="headerContainer">
      <div className="headerWrap">
        <h2>당커땡</h2>
        <div className="headerButtonWrap">
          <button onClick={onClickToggleModal}>로그인</button>
          <button onClick={onClickToggleModal}>회원가입</button>
        </div>
      </div>
      {isModalOpen && <Modal onClickToggleModal={onClickToggleModal}>나와라짜식아</Modal>}
    </div>
  )
}

export default Header
