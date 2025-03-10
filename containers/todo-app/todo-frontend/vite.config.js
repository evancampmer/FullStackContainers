import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Ensure jsdom is set as the test environment
    globals: true, // For jest-like globals (e.g., describe, it, expect)
    setupFiles: ["./setupTests.js"],
  },
  esbuild: {
    target: 'esnext',
  }
})
