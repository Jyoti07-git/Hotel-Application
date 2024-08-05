import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    rollupOptions: {
      external: ['@stripe/stripe-js'], // Add external modules if needed
    },
  },
});
