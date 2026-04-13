import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Neteja agressiva de SW antics (Per si el navegador encara té la ruta /app-v2/ guardada)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const reg of registrations) {
      // Opcional: Podem desregistrar-los tots per assegurar una instal·lació neta
      reg.unregister();
    }
  });

  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    });
  }
}

// 2. Render de l'aplicació
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// NOTA: No cal fer cap import de 'virtual:pwa-register' ni res similar 
// perquè hem posat 'injectRegister: inline' al vite.config.js.