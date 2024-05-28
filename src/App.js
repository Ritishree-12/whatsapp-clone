import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from './authentication/login/LogIn';
import Main from './component/Main';
import Register from './authentication/register/Registration';
import Reset from './authentication/forgetpassword/Reset';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset/>} />
      <Route path="/main" element={<Main />} />
    </Routes>
    
  );
}

export default App;
