import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin xoa crossorigin khoi the stylesheet de phong ngua triet de loi CORS/MIME tren trinh duyet
function cleanCssLinkPlugin() {
  return {
    name: 'clean-css-link-plugin',
    transformIndexHtml(html: string) {
      return html
        .replace(/<link rel="stylesheet" crossorigin="" href=/g, '<link rel="stylesheet" href=')
        .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href=')
    }
  }
}

export default defineConfig({
  plugins: [react(), cleanCssLinkPlugin()],
  server: {
    port: 3000,
    allowedHosts: true,
    watch: {
      ignored: ['**/.zalo_session/**']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
