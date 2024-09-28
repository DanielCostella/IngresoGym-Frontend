import React, { useState } from 'react';
import './RegistrarPago.css';  // Importamos el archivo CSS

function RegistrarPago() {
  const [dni, setDni] = useState('');
  const [mesPagado, setMesPagado] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3009/pagos/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni, mes_pagado: mesPagado }),
      });

      const data = await response.json();
      setMensaje(data.mensaje);
    } catch (error) {
      setMensaje('Error en la solicitud.');
    }
  };

  return (
    <div>
      <h2>Registrar Pago</h2>
      <form className="registrar-pago-form" onSubmit={handleSubmit}>
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

        <div className="mes-pagado-box">
          <label>Mes Pagado (YYYY-MM)</label>
          <input
            type="month"
            value={mesPagado}
            onChange={(e) => setMesPagado(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrar Pago</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default RegistrarPago;