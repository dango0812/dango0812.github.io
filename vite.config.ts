import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@icons': '/src/icons',
      '@styles': '/src/styles',
    },
  },
});
