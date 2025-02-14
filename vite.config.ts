// vite
import { defineConfig } from "vite";
// vite - plugins
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    }),
    tsconfigPaths(),
    legacy({
      targets: ['chrome >= 64', 'safari >= 12'],
      modernPolyfills: true
    })
  ],
})
