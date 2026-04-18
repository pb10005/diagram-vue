import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'DiagramVue',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `diagram.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } }
    }
  }
})
