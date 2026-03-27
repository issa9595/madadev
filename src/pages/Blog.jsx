import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { parseMd } from '../utils/parseMd'
import SeoHead from '../components/seo/SeoHead'
import '../components/seo/SeoLanding.css'
import './Blog.css'

const rawFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

export default function Blog() {
  const posts = useMemo(() => {
    return Object.values(rawFiles)
      .map(raw => {
        const { data } = parseMd(raw)
        return data
      })
      .filter(data => data.slug && data.title && data.date)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  return (
    <>
      <SeoHead
        title="Blog — Conseils web pour TPE/PME à Nantes | MadaDev"
        description="Articles SEO, conseils création de site web, e-commerce et présence en ligne pour artisans et commerçants à Nantes et Loire-Atlantique."
        path="/blog"
      />
      <main className="seo-page">
        <section className="hero">
          <div className="container">
            <div className="badge">
              <span className="dot" />
              Blog MadaDev
            </div>
            <h1>Conseils web pour <span className="gradient-text">développer votre activité</span></h1>
            <p className="hero-sub">
              Articles SEO, création de site, e-commerce — tout ce que vous devez savoir pour réussir en ligne à Nantes et en Loire-Atlantique.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {posts.length === 0 ? (
              <p className="blog-empty">Les premiers articles arrivent bientôt.</p>
            ) : (
              <div className="blog-grid">
                {posts.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                      {post.tags && (
                        <div className="blog-tags">
                          {(Array.isArray(post.tags) ? post.tags : [post.tags]).slice(0, 2).map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    {post.description && <p className="blog-card-desc">{post.description}</p>}
                    <span className="blog-card-cta">Lire l'article →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="cta-section section-alt" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <h2>Un projet web à <span className="gradient-text">Nantes</span> ?</h2>
            <p>MadaDev accompagne les TPE/PME et artisans dans leur transformation digitale.</p>
            <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
              Demandez votre devis gratuit
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
