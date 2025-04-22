import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Saludo from './componente/saludo'; // Asegúrate que esta ruta esté bien (componente en minúscula)

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

                {/* Incluir el saludo*/}
      <Saludo nombre="Stiven Burgos" dia="Martes" />

    

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          - restar
        </button>
        <p>
          Valor actual: <strong>{count}</strong>
        </p>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>

      <p className="read-the-docs">
        Haz clic en los logos de Vite y React para saber más
      </p>
    </>
  );
}

export default App;
