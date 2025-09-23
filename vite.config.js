import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host:'0.0.0.0',

    allowedHosts: [
      '21a46cc1-aebf-4b70-8c23-c0729486d77c-00-1tlug3eqiud.pike.replit.dev'
    ]
   
  }
})
