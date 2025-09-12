import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import SignUp from './signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper เพื่อส่ง navigate function ให้ Login
function LoginWrapper({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    navigate("/home"); // ไปหน้า Home หลัง login
  };

  const handleGoToSignUp = () => {
    navigate("/signup"); // ไปหน้า SignUp
  };

  return <Login onSignIn={handleSignIn} onGoToSignUp={handleGoToSignUp} />;
}

export default App;
