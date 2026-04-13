import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Ruta base correcta per a GitHub Pages
  base: '/Serra-d-equacions/', 

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline', // Injecta el registre directament a l'index.html
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      
      manifest: {
        name: "Serra d'Equacions",
        short_name: "Serra d'Equacions",
        description: "App de gestió educativa",
        theme_color: '#8fb382',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      workbox: {
        // Netegem la configuració manual per evitar errors de rutes
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        // Ja no necessitem runtimeCaching complex si el base està ben posat
      }
    })
  ],

  build: {
    emptyOutDir: true, // Força la neteja de la carpeta dist a cada build
  }
})