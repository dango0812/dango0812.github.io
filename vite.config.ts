import path from "path";
// vite
import { defineConfig } from "vite";
// vite - plugins
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";

const destinations = ["career", "project", "project/detail", "blog", "404"];

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    viteStaticCopy({
      targets: destinations.map((dest) => ({
        src: "index.html",
        dest
      }))
    }),
    tsconfigPaths(),
    legacy({
      targets: ["chrome >= 64", "safari >= 12"],
      modernPolyfills: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@type": path.resolve(__dirname, "src/types"),
    },
  },
});