import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
base: "/Mate-Tube"

export default defineConfig({
  plugins: [react()],
})
