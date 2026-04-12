import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Serra-d-equacions/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: null,
        runtimeCaching: [],
        globPatterns: ['**/*.{css,html,ico,png,svg}'],
      },
      manifest: {
        name: "Serra d'Equacions",
        short_name: "Serra d'Equacions",
        theme_color: '#8fb382',
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
          }
        ]
      }
    })
  ]
})