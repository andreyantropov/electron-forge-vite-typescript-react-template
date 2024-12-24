import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: mode === "development",
    rollupOptions: {
      external: mode === "production" ? [] : [/node_modules/],
    },
  },
}));
