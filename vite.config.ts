import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Disable inlining of images
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
