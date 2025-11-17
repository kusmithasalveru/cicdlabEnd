import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cicdlabEnd/',   // 👈 EXACT: same repo name, with / at start & end
})
