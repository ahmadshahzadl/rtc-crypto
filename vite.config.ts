import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React DOM
          react: ['react', 'react-dom'],
          // Three.js and related dependencies
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Framer Motion
          framer: ['framer-motion'],
          // Lucide React icons
          icons: ['lucide-react'],
          // Other vendor libraries
          vendor: ['axios', 'lenis', 'locomotive-scroll', 'recharts']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase warning limit to 1000kb
  }
})
