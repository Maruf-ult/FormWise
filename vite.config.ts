import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // The popup UI
        main: resolve(__dirname, 'index.html'),
        // The background logic
        content: resolve(__dirname, 'src/content.ts'), 
      },
      output: {
        // Ensures content.ts becomes content.js without a random hash
        entryFileNames: (chunk) => {
          return chunk.name === 'content' ? 'content.js' : 'assets/[name]-[hash].js'
        }
      }
    }
  }
})



