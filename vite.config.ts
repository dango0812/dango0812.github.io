// vite
import { defineConfig } from "vite";
// vite - plugins
import react from "@vitejs/plugin-react";
import pathAlias from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pathAlias()],
})
