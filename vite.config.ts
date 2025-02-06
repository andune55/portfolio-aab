import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import typography from '@tailwindcss/vite'
import forms from '@tailwindcss/vite'
// import tailwindcssanimate from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    typography(),
    forms()
    // tailwindcssanimate(),
    // 
  ],
  base: '/portfolio-aab/'
})
