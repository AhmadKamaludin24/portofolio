import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@dimforge/rapier3d-compat'; // load rapier wasm
import { BrowserRouter } from 'react-router-dom';

// Preload WASM secara eksplisit
(async () => {
  await import('@dimforge/rapier3d-compat'); // pastikan wasm sudah siap
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </React.StrictMode>
  );
})();
