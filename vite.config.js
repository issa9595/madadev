import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Inline CSS assets smaller than the threshold directly into the HTML <head>
// to eliminate render-blocking stylesheet requests.
function inlineSmallCss(threshold = 8192) {
  const cssMap = new Map()

  return {
    name: 'inline-small-css',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const [name, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && name.endsWith('.css')) {
          const size = typeof asset.source === 'string'
            ? Buffer.byteLength(asset.source, 'utf-8')
            : asset.source.byteLength
          if (size <= threshold) {
            cssMap.set(name, asset.source)
            delete bundle[name]
          }
        }
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        for (const [name, css] of cssMap) {
          html = html.replace(
            new RegExp(`<link[^>]+href="/${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g'),
            `<style>${css}</style>`
          )
        }
        return html
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), inlineSmallCss()],
})
