import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';  // Asegúrate de que el CSS está importado correctamente

function AdminHome() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Panel de Administración</h1>
      <p className="mb-4">Seleccione una opción:</p>
      <ul className="list-unstyled">
        <li>
          <Link to="/admin/registrar-usuario" className="btn-custom">Registrar Usuario Nuevo</Link>
        </li>
        <li>
          <Link to="/admin/registrar-pago" className="btn-custom">Registrar Pago</Link>
        </li>
        <li>
          <Link to="/admin/consultar-estado" className="btn-custom">Consultar Estado de Usuario</Link>
        </li>
        <li>
          <Link to="/ingreso-usuario" className="btn-custom">Verificar Ingreso de Usuario</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminHome;