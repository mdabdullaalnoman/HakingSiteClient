import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Admin from './Component/Admin';
import Home from './Component/Home';
import Login from './Component/Login';
import NotFound from './Component/NotFound';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;