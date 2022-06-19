import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server:{
    host: '0.0.0.0',
    port: 8080
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
})
