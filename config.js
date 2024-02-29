import vue from '@vitejs/plugin-vue'
import webExtension from 'vite-plugin-web-extension'

export default {
  plugins: [
    vue(),
    webExtension(),
  ],
}