import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Serra-d-equacions/',
  plugins: [
    react(),
  ]
})