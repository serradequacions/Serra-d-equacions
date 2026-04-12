import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // Ruta base del projecte a GitHub Pages
  base: '/Serra-d-equacions/app/',
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Canviem el nom del fitxer per invalidar el Service Worker vell
      filename: 'sw-v2.js',
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      
      workbox: {
        // Força l'activació del nou SW sense esperar que l'usuari tanqui pestanyes
        skipWaiting: true,
        clientsClaim: true,
        
        // Evitem que el SW intenti gestionar la navegació interna de Vite
        navigateFallback: null,
        
        // ESTRATÈGIA CRÍTICA:
        // Només guardem en memòria cau imatges, estils i HTML.
        // NO guardem els fitxers .js en aquesta llista (globPatterns) 
        // per assegurar-nos que el navegador sempre demani el JS nou a la xarxa
        // i així vegi la teva correcció de Cloudflare/Brevo.
        globPatterns: ['**/*.{css,html,ico,png,svg}'],
        
        // Si més endavant vols guardar coses, ho pots fer aquí amb NetworkFirst
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
  
  // Opcional: Per assegurar-te que el build neteja la carpeta de sortida
  build: {
    emptyOutDir: true,
  }
})