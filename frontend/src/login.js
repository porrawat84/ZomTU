import React from 'react';
import './login.css'; 
import logo from './image/demologo.png'; 

function Login({ onSignIn }) {
  return (
    <div className="login-container">
      {/* โลโก้*/}
      <div className="login-header">
        <img src={logo} alt="logo" className="login-logo" />
      </div>

      {/* ฟอร์มสำหรับเบอร์โทรและรหัสผ่าน */}
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        onSignIn();
      }}>
        <input type="text" placeholder="เบอร์โทร" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-button">Sign in</button>
      </form>

      {/* ลิงก์ Apply Now */}
      <p className="login-footer">
        Join our community? <a href="#apply">Apply Now</a>
      </p>
    </div>
  );
}

export default Login;