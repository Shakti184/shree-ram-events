import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shree-ram-events/", // <--- ADD THIS LINE (Must match your Repo Name)
})