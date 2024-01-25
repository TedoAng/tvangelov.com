import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader(),
    VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        workbox: {
          clientsClaim: true,
          skipWaiting: true
        },
        manifest: {
        name: "HackerWeb",
        short_name: "HackerWeb",
        start_url: ".",
        display: "standalone",
        background_color: "#333",
        description: "A readable Hacker News app.",
        icons: [
          {
            src: "./src/assets/images/icon512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
})
