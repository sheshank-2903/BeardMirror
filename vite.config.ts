/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ['tests/**', 'node_modules/**', 'dist/**', 'dist-electron/**'],
    passWithNoTests: true,
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
