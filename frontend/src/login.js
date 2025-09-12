import React from 'react';
import './login.css'; 
import logo from './image/logo.png'; 

function Login({ onSignIn, onGoToSignUp }) {
  return (
    <div className="login-container">
      {/* โลโก้*/}
      <div className="login-header">
        <img src={logo} alt="logo" className="login-logo" />
      </div>

       {/* กล่องสีเขียว */}
        <div className="login-box">
        <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          onSignIn();
        }}>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          <button type="submit" className="login-button">sign in</button>
        </form>

        {/* ปุ่มไปหน้า SignUp */}
        <p className="login-footer">
          ยังไม่มีสมาชิกใช่หรือไม่?{" "}
          <button 
            type="button" 
            onClick={onGoToSignUp} 
            className="link-button"
          >
            สมัครสมาชิก
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;