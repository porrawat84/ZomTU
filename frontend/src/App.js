import React, { useState } from 'react';
import Login from './login';
import Home from './home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* สลับหน้า Login และ Home */}
      {isLoggedIn ? <Home /> : <Login onSignIn={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;