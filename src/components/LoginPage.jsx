import React from 'react'
import  Login  from './Login'
import  LoginSoldier  from './LoginSoldier'
import "./Login.css"
function LoginPage() {
  return (
    <div id="login-container">
    <Login />
    <LoginSoldier/>
    </div>
  )
}

export default LoginPage
