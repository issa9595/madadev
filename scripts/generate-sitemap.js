import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const BLOG_DIR = path.join(ROOT, 'src/content/blog')
const OUT = path.join(ROOT, 'public/sitemap.xml')
const ORIGIN = 'https://mada-dev.com'

const STATIC_PAGES = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/site-vitrine', changefreq: 'monthly', priority: '0.9' },
  { path: '/ecommerce', changefreq: 'monthly', priority: '0.9' },
  { path: '/tarifs', changefreq: 'monthly', priority: '0.9' },
  { path: '/nantes', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
]

function isoDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10)
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).slice(0, 10)
}

function latestBlogDate(posts) {
  if (posts.length === 0) return isoDate()
  return posts.reduce((max, p) => (p.date > max ? p.date : max), posts[0].date)
}

function readPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8')
      const { data } = matter(raw)
      return { slug: data.slug, date: isoDate(data.date), title: data.title }
    })
    .filter(p => p.slug && p.title)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

function build() {
  const posts = readPosts()
  const blogLatest = latestBlogDate(posts)
  const today = isoDate()

  const entries = []

  for (const page of STATIC_PAGES) {
    const lastmod = page.path === '/blog' ? blogLatest : today
    entries.push(urlEntry({
      loc: `${ORIGIN}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
    }))
  }

  for (const post of posts) {
    entries.push(urlEntry({
      loc: `${ORIGIN}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: '0.6',
    }))
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`
  fs.writeFileSync(OUT, xml, 'utf8')
  console.log(`✓ sitemap.xml généré : ${STATIC_PAGES.length} pages statiques + ${posts.length} articles`)
}

build()
