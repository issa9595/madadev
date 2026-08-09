import App from '../App'
import { parseMd } from '../utils/parseMd'

// Les slugs des articles sont connus au build : ils déterminent les pages
// /blog/:slug à prérendre statiquement (getStaticPaths).
const rawFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })
const blogPaths = Object.values(rawFiles)
  .map(raw => parseMd(raw).data.slug)
  .filter(Boolean)
  .map(slug => `blog/${slug}`)

// Chaque `lazy` reste une fonction inline : vite-react-ssg lit son code source
// pour retrouver le chunk CSS associé à injecter dans le HTML prérendu.
export const routes = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.jsx',
    children: [
      { index: true, lazy: async () => ({ Component: (await import('../pages/Home')).default }) },
      { path: 'site-vitrine', lazy: async () => ({ Component: (await import('../pages/seo/SiteVitrinePage')).default }) },
      { path: 'ecommerce', lazy: async () => ({ Component: (await import('../pages/seo/EcommercePage')).default }) },
      { path: 'nantes', lazy: async () => ({ Component: (await import('../pages/seo/NantesPage')).default }) },
      { path: 'tarifs', lazy: async () => ({ Component: (await import('../pages/seo/TarifsPage')).default }) },
      { path: 'blog', lazy: async () => ({ Component: (await import('../pages/Blog')).default }) },
      {
        path: 'blog/:slug',
        lazy: async () => ({ Component: (await import('../pages/BlogPost')).default }),
        getStaticPaths: () => blogPaths,
      },
      { path: '*', lazy: async () => ({ Component: (await import('../pages/NotFound')).default }) },
    ],
  },
]
