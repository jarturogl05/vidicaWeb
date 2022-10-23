import React, { useState } from 'react';

import LoginScreen from './components/login/LoginScreen';

import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (isLoggedIn ? (
    <Home/>
  ) : (
   <LoginScreen setState={setIsLoggedIn}/>
  )
  );
}

export default App;
