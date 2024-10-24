import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login'; 
import Menu from './Screens/Menu'; 
import ForgotPassword from './Screens/ForgotPassword'; // Importa el nuevo componente


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Ruta para ForgotPassword */}
    </Routes>
  );
};

export default App;



