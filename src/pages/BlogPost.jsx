import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import matter from 'gray-matter'
import { marked } from 'marked'
import SeoHead from '../components/seo/SeoHead'
import NotFound from './NotFound'
import './BlogPost.css'

const rawFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

export default function BlogPost() {
  const { slug } = useParams()

  const post = useMemo(() => {
    for (const raw of Object.values(rawFiles)) {
      const { data, content } = matter(raw)
      if (data.slug === slug) {
        return { frontmatter: data, html: marked(content) }
      }
    }
    return null
  }, [slug])

  if (!post) return <NotFound />

  const { frontmatter, html } = post
  const dateFormatted = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  return (
    <>
      <SeoHead
        title={`${frontmatter.title} — MadaDev`}
        description={frontmatter.description || ''}
        path={`/blog/${frontmatter.slug}`}
      />
      <main className="seo-page blog-post-page">
        <div className="container blog-post-container">
          <div className="blog-post-header">
            <Link to="/blog" className="blog-back">← Retour au blog</Link>
            {dateFormatted && <time dateTime={frontmatter.date} className="blog-post-date">{dateFormatted}</time>}
            {frontmatter.tags && (
              <div className="blog-tags">
                {(Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags]).map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>

          <article
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="blog-post-footer">
            <a href="/contact" className="btn btn-primary">Demandez votre devis gratuit</a>
            <Link to="/blog" className="blog-back">← Tous les articles</Link>
          </div>
        </div>
      </main>
    </>
  )
}
