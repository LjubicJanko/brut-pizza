import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    minify: 'esbuild', // Use esbuild for minification (default)
    chunkSizeWarningLimit: 500, // Set the chunk size warning limit
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
