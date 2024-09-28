import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido al Gimnasio</h1>
      <p>Seleccione su rol:</p>
      <div>
        <Link to="/usuario">
          <button>Usuario</button>
        </Link>
        <Link to="/admin">
          <button>Administrador</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
