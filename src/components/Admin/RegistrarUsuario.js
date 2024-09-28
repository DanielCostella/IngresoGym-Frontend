import React, { useState } from 'react';
import './RegistrarUsuario.css';  // Importar el archivo CSS

function RegistrarUsuario() {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3009/usuarios/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni, nombre }),
      });

      const data = await response.json();
      if (response.status === 409) {
        setMensaje('Usuario ya agregado con ese DNI o nombre.');
      } else {
        setMensaje(data.mensaje);
      }
    } catch (error) {
      setMensaje('Error en la solicitud.');
    }
  };

  return (
    <div className="registrar-usuario-form">
      <h2>Registrar Usuario Nuevo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingrese el DNI</label>
          <input
            type="text"
            placeholder="Ingrese el DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ingrese el Nombre</label>
          <input
            type="text"
            placeholder="Ingrese el Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrar Usuario</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default RegistrarUsuario;