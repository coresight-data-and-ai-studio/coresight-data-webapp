import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Note: this project has no client-side secrets. Any future server-only
// credentials (e.g. an email API key) must stay inside a Cloudflare Pages
// Function and be read via `env` there — never referenced from `src/`
// or exposed through Vite's `define`, since anything defined that way is
// inlined directly into the public JS bundle.
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
