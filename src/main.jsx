import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 🔥 Neteja suau (no crítica, però útil si arriba a executar-se)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister())
  })

  if ('caches' in window) {
    caches.keys().then(keys => keys.forEach(key => caches.delete(key)))
  }
}

// 🚀 Render app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ✅ Registrar NOU Service Worker amb scope correcte
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(
      '/Serra-d-equacions/app-v2/sw.js',
      { scope: '/Serra-d-equacions/app-v2/' }
    )
    .then(reg => {
      console.log('✅ SW registrat:', reg.scope)
    })
    .catch(err => {
      console.error('❌ Error registrant SW:', err)
    })
  })
}