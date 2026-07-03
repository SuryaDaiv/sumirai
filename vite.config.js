import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        privacy: resolve(rootDir, 'privacy.html'),
        terms: resolve(rootDir, 'terms.html'),
        refund: resolve(rootDir, 'refund.html'),
        cancellation: resolve(rootDir, 'cancellation.html'),
        orders: resolve(rootDir, 'orders/index.html'),
      },
    },
  },
})

