import React, { useState } from 'react';

function ConsultarEstado() {
  const [dni, setDni] = useState('');
  const [mesPagado, setMesPagado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [pagos, setPagos] = useState([]);  // Almacenar los pagos del usuario

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3009/pagos/verificar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni, mes_pagado: mesPagado || null }),  // Enviar null si no hay mes seleccionado
      });

      const data = await response.json();

      if (data.pagos) {
        setPagos(data.pagos);  // Mostrar todos los meses pagados si están disponibles
      } else {
        setMensaje(data.mensaje);
      }
    } catch (error) {
      setMensaje('Hubo un problema: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Consultar Estado de Pago de un Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese DNI del usuario"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <input
          type="month"
          value={mesPagado}
          onChange={(e) => setMesPagado(e.target.value)}  // Permitir seleccionar mes
        />
        <button type="submit">Consultar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      {/* Mostrar la lista de meses pagados */}
      {pagos.length > 0 && (
        <div>
          <h3>Meses Pagados:</h3>
          <ul>
            {pagos.map((pago, index) => (
              <li key={index}>{pago.mes_pagado}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsultarEstado;