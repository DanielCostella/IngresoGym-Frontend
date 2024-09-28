import React, { useState } from 'react';

function IngresoUsuario() {
  const [dni, setDni] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mesActual = new Date().toISOString().slice(0, 7);

      const response = await fetch('http://localhost:3009/pagos/verificar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni, mes_pagado: mesActual }),
      });

      const data = await response.json();
      if (data.mensaje.includes("ha pagado")) {
        setMensaje('Adelante!');
      } else {
        setMensaje('Debe abonar el mes.');
      }
    } catch (error) {
      setMensaje('Hubo un problema en la verificación.');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Ingreso de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ingrese su DNI"
            className="form-control form-control-lg mb-3"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-lg btn-success">Verificar</button>
      </form>

      {mensaje && <h3 className="mt-4">{mensaje}</h3>}
    </div>
  );
}

export default IngresoUsuario;