import React, { useRef, useState } from 'react'
import '../../styles/account/Login.scss'

const Login: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  const userIdHandle = () => {}

  return (
    <div className="logInContainer">
      <div className="loginWrap">
        <div className="loginTitle">
          <h3>LogIn</h3>
        </div>
        <form className="inputContainer">
          <div>
            <label htmlFor="userId">아이디</label>
            <input id="userId" type="text" value={userId} onChange={userIdHandle} />
          </div>
          <div>
            <label htmlFor="userPw">패스워드</label>
            <input id="userPw" type="password" value={userPw} />
          </div>
          <div className="buttonContainer">
            <button>로그인</button>
          </div>
        </form>
        <div className="socialBottonContainer">
          <button>구글</button>
          <button>카카오</button>
          <button>네이버</button>
        </div>
      </div>
    </div>
  )
}

export default Login
