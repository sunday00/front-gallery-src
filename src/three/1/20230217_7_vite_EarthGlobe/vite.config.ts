import { defineConfig } from 'vite'
// import react from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // root: './src',
  build: {
    chunkSizeWarningLimit: 2000,
  },
})
