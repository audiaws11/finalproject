import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Set the base path if needed, especially when deploying to a subdirectory
  build: {
    outDir: 'dist', // Default output directory, make sure this matches what Netlify expects
  }
});
