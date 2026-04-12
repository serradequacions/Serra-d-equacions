import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // ACTUALITZACIÓ CRÍTICA: Hem tret '/app/' perquè a la branca gh-pages 
  // els teus fitxers estan directament a l'arrel del repositori.
  base: '/Serra-d-equacions/', 
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Mantenim sw-v2.js per forçar la invalidació del SW antic (zombie)
      filename: 'sw-v2.js',
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: null,
        
        // Seguim sense posar els .js aquí per evitar que es tornin a bloquejar
        // a la memòria cau del navegador mentre fem proves.
        globPatterns: ['**/*.{css,html,ico,png,svg}'],
        
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
  
  build: {
    emptyOutDir: true,
  }
})