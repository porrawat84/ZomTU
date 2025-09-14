import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 
import logo from './image/logo.png'; 
import { supabase } from './supabaseClient';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignIn = async (e) => {
        e.preventDefault(); // ป้องกัน reload

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error('Login error:', error.message);
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    } else {
        console.log('Login success:', data);
        navigate('/home'); // ไปหน้า Home
        }
    };

    return (
        <div className="login-container">
        {/* โลโก้ */}
        <div className="login-header">
            <img src={logo} alt="logo" className="login-logo" />
        </div>

        {/* กล่องสีเขียว */}
        <div className="login-box">
            <form className="login-form" onSubmit={handleSignIn}>
                <input 
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}   
                    required />
                <button 
                    type="submit" 
                    className="login-button"
                    >Sign in</button>
            </form>

        {/* ปุ่มไปหน้า SignUp */}
        <p className="login-footer">
          ยังไม่มีสมาชิกใช่หรือไม่?{" "}
            <button 
                type="button" 
                onClick={() => navigate('/signup')}
                className="link-button"
            >
                Sign up
            </button>
        </p>
        </div>
    </div>
  );
}

export default Login;

