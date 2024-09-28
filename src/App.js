import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminHome';
import RegistrarUsuario from './components/Admin/RegistrarUsuario';
import RegistrarPago from './components/Admin/RegistrarPago';
import ConsultarEstado from './components/Admin/ConsultarEstado';
import IngresoUsuario from './components/Usuario/IngresoUsuario';  // Importar el nuevo componente
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/admin/registrar-usuario" element={<RegistrarUsuario />} />
        <Route path="/admin/registrar-pago" element={<RegistrarPago />} />
        <Route path="/admin/consultar-estado" element={<ConsultarEstado />} />
        
        {/* Ruta para la pantalla de ingreso de usuarios */}
        <Route path="/ingreso-usuario" element={<IngresoUsuario />} />  {/* Aquí estamos usando IngresoUsuario */}
      </Routes>
    </Router>
  );
}

export default App;


