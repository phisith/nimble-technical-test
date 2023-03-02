/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// @ts-ignore
export default defineConfig<any>({
  plugins: [react()],

  server: {
    watch: { usePolling: true },
    host: true,
    strictPort: true,
    port: 3000,
  },
  preview: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setupTest.ts",
  },
});
