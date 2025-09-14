import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './image/logo.png';
import './signup.css';
import { supabase } from './supabaseClient';


function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // สมัครผู้ใช้ใน Supabase Auth
        const { data: signUpData, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                    phone
                }
            }

        });

        if (error) {
            console.error("Sign up error:", error.message);
            alert("สมัครสมาชิกไม่สำเร็จ: " + error.message);
            return;
        }

        // เพิ่มลง table 
        if (signUpData.user) {
            const { error: insertError } = await supabase
                .from('users')
                .insert([
                    { 
                        id: signUpData.user.id, 
                        name: name, 
                        phone: phone, 
                        email: email 
                    }
                ]);


        if (insertError) {
            console.error("Insert to users table error:", insertError.message);
        }
    }

        alert("สมัครสมาชิกสำเร็จ! ล็อกอินได้เลย");
        navigate('/'); // ไป Login
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
        </div>
        </div>
    );
}


export default SignUp;

