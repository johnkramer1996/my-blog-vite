import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      app: path.resolve('src/app'),
      entities: path.resolve('src/entities'),
      features: path.resolve('src/features'),
      pages: path.resolve('src/pages'),
      shared: path.resolve('src/shared'),
      widgets: path.resolve('src/widgets'),
      mocks: path.resolve('src/mocks'),
    },
  },
})
