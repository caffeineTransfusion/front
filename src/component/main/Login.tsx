import React from 'react'
import '../../styles/main/Login.scss'

const Login: React.FC = () => {
  return (
    <div className="logInContainer">
      <div className="loginWrap">
        <div className="logInTitle">
          <h3>LogIn</h3>
        </div>
        <div className="inputContainer">
          <div>
            <span>아이디</span>
            <input type="text" />
          </div>
          <div>
            <span>패스워드</span>
            <input type="password" />
          </div>
        </div>
        <button>닫기</button>
      </div>
    </div>
  )
}

export default Login
