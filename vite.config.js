import { defineConfig } from 'vite'
import eslintPlugin from '@vitejs/plugin-eslint'

export default defineConfig({
  plugins: [eslintPlugin()],
})