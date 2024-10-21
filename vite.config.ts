// vite
import { defineConfig } from "vite";
// vite - plugins
import react from "@vitejs/plugin-react";
import pathAlias from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    }),
    pathAlias(),
    legacy({
      targets: ['chrome >= 64', 'safari >= 12'],
      modernPolyfills: true
    })
  ]
})
