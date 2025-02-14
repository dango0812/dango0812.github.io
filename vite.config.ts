// vite
import { defineConfig } from "vite";
// vite - plugins
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    }),
    tsconfigPaths(),
    legacy({
      targets: ["chrome >= 64", "safari >= 12"],
      modernPolyfills: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@type': path.resolve(__dirname, 'src/types'),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: 'index.html',
        blog: 'src/pages/blog/page.tsx',
        career: 'src/pages/career/page.tsx',
        project: 'src/pages/project/page.tsx',
      },
    }
  }
})
