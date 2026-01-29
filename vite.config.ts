import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },

  // Optional (only for local dev):
  // If you later run Pages Functions locally with `wrangler pages dev`
  // on a port (often 8788), you can proxy /api calls from Vite to Wrangler:
  //
  // server: {
  //   port: 3000,
  //   host: "0.0.0.0",
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8788",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});