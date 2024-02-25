import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
base: "https://mrkalyanking.github.io/Mate-Tube/"

export default defineConfig({
  plugins: [react()],
})
