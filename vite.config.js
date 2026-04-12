import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // ACTUALITZACIÓ CRÍTICA: Ruta base per a l'arrel de GitHub Pages
  // Això fa que l'HTML trobi correctament els fitxers a /Serra-d-equacions/
  base: '/Serra-d-equacions/', 
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Cambiem el nom a sw-final.js per forçar el navegador a oblidar rutes velles com 'app-v2'
      filename: 'sw-final.js',
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      
      workbox: {
        // Força l'activació immediata del nou Service Worker
        skipWaiting: true,
        clientsClaim: true,
        
        // Evitem que el SW intenti gestionar la navegació interna de Vite durant les proves
        navigateFallback: null,
        
        // ESTRATÈGIA DE CACHÉ:
        // Només guardem imatges, estils i HTML per evitar bloquejar el JS nou
        globPatterns: ['**/*.{css,html,ico,png,svg}'],
        
        // Assegurem que el destí del fitxer sigui l'arrel del build
        swDest: 'sw-final.js',
        
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/serradequacions\.github\.io\/.*\.js$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'js-scripts',
            }
          }
        ],
      },
      
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
      }
    })
  ],
  
  // Neteja la carpeta de sortida abans de cada build
  build: {
    emptyOutDir: true,
  }
})