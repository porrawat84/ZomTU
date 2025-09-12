import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './image/logo.png';
import './signup.css';

function SignUp({ onGoToLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/signup", { phone, password })
      .then((res) => {
        alert("สมัครสมาชิกสำเร็จ ✅");
        navigate('/'); // กลับไปหน้า Login
      })
      .catch((err) => {
        console.error("Error during signup:", err);
      });
  };

  return (
    <div className="signup-container">
      
        <h1>Register</h1>
        
        <div className="signup-header">
          <img src={logo} alt="logo" className="signup-logo" />
        </div>
        
        <div className="signup-box">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="เบอร์โทร" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="signup-button">Sign up</button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <button 
            type="button" 
            onClick={() => navigate('/')}
            className="link-button"
          >
            Sign in
          </button>
        </p>
      </div> {/* ปิด signup-box */}
    </div> 
  );
}

export default SignUp;
