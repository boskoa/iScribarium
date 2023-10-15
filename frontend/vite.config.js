/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3003",
        changeOrigin: true,
        secure: false,
      },
      "/public": {
        target: "http://127.0.0.1:3003/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: function (id) {
          /* for splitting all modules into separate chunks
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
          */
          if (id.includes("zrender")) {
            return "zrender";
          }
          if (id.includes("echarts")) {
            return "echarts";
          }
          if (id.includes("react-router-dom")) {
            return "react-router-dom";
          }
        },
      },
    },
  },
});
