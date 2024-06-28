import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
 defineConfig(({mode}) => {
  process.env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      open: true, 
      port: 8080
    },
    define: {
      'process.env': process.env
    }
  }
})
export default defineConfig({
  plugins: [react()],
})
