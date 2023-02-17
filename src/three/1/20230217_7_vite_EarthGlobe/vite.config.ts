import {defineConfig, PluginOption} from 'vite'
import vitePluginString from 'vite-plugin-string'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // root: './src',
  build: {
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    vitePluginString() as unknown as PluginOption
  ]
})
