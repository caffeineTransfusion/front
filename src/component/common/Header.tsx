import React, { useState, useCallback } from 'react'
import '../../styles/common/Header.scss'
import Modal from './Modal'
import Login from '../account/Login'
import SignUp from '../account/SignUp'

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [showLogin, setShowLogin] = useState<boolean>(true)

  const onClickToggleModal = useCallback(() => {
    setModalOpen(!isModalOpen)
  }, [isModalOpen])

  const onClickLogin = useCallback(() => {
    setShowLogin(true)
    setModalOpen(true)
  }, [])

  const onClickSignUp = useCallback(() => {
    setShowLogin(false)
    setModalOpen(true)
  }, [])

  return (
    <div className="headerContainer">
      <div className="headerWrap">
        <h2>당커땡</h2>
        <div className="headerButtonWrap">
          <button onClick={onClickLogin}>로그인</button>
          <button onClick={onClickSignUp}>회원가입</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClickToggleModal={onClickToggleModal}>{showLogin ? <Login /> : <SignUp />}</Modal>
      )}
    </div>
  )
}

export default Header
