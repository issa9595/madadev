import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // blog/mon-article.html + cleanUrls Vercel : l'URL canonique sans slash
    // final (/blog/mon-article) sert directement le HTML prérendu.
    dirStyle: 'flat',
  },
})
