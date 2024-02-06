import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Test
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': '/node_modules'
    }}
})
