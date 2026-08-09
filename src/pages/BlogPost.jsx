import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { parseMd } from '../utils/parseMd'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import SeoHead from '../components/seo/SeoHead'
import NotFound from './NotFound'
import { OG_IMAGE_URL, SITE_ORIGIN } from '../config/seo'
import '../components/seo/SeoLanding.css'
import './BlogPost.css'

const rawFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

const toTags = value => (Array.isArray(value) ? value : value ? [value] : [])

export default function BlogPost() {
  const { slug } = useParams()

  const post = useMemo(() => {
    for (const raw of Object.values(rawFiles)) {
      const { data, content } = parseMd(raw)
      if (data.slug === slug) {
        return { frontmatter: data, html: DOMPurify.sanitize(marked(content)) }
      }
    }
    return null
  }, [slug])

  const relatedPosts = useMemo(() => {
    if (!post) return []
    const currentTags = new Set(toTags(post.frontmatter.tags))
    return Object.values(rawFiles)
      .map(raw => parseMd(raw).data)
      .filter(data => data.slug && data.title && data.date && data.slug !== slug)
      .map(data => ({ data, shared: toTags(data.tags).filter(tag => currentTags.has(tag)).length }))
      .sort((a, b) => b.shared - a.shared || new Date(b.data.date) - new Date(a.data.date))
      .slice(0, 3)
      .map(({ data }) => data)
  }, [post, slug])

  if (!post) return <NotFound />

  const { frontmatter, html } = post
  const dateFormatted = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  const articleUrl = `${SITE_ORIGIN}/blog/${frontmatter.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        headline: frontmatter.title,
        description: frontmatter.description || '',
        datePublished: frontmatter.date,
        dateModified: frontmatter.updated || frontmatter.date,
        inLanguage: 'fr-FR',
        image: OG_IMAGE_URL,
        keywords: toTags(frontmatter.tags).join(', '),
        author: {
          '@type': 'Person',
          name: 'Issa Madayev',
          jobTitle: 'Développeur web freelance à Nantes',
          url: SITE_ORIGIN,
        },
        publisher: { '@id': `${SITE_ORIGIN}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_ORIGIN },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog` },
          { '@type': 'ListItem', position: 3, name: frontmatter.title },
        ],
      },
    ],
  }

  return (
    <>
      <SeoHead
        title={`${frontmatter.title} | MadaDev`}
        description={frontmatter.description || ''}
        path={`/blog/${frontmatter.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />
      <main className="seo-page blog-post-page">
        <div className="container blog-post-container">
          <div className="blog-post-header">
            <Link to="/blog" className="blog-back">← Retour au blog</Link>
            {dateFormatted && <time dateTime={frontmatter.date} className="blog-post-date">{dateFormatted}</time>}
            {frontmatter.tags && (
              <div className="blog-tags">
                {toTags(frontmatter.tags).map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>

          <article
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="blog-post-services">
            <p>
              Besoin d'un site pour votre activité à Nantes ? Découvrez la{' '}
              <Link to="/site-vitrine">création de site vitrine</Link>, la{' '}
              <Link to="/ecommerce">création de boutique en ligne</Link> ou consultez{' '}
              <Link to="/tarifs">les tarifs de création de site web</Link>.
            </p>
          </div>

          <div className="blog-post-footer">
            <a href="/#contact" className="btn btn-primary">Demandez votre devis gratuit</a>
            <Link to="/blog" className="blog-back">← Tous les articles</Link>
          </div>

          {relatedPosts.length > 0 && (
            <aside className="blog-related">
              <h2>À lire aussi</h2>
              <div className="blog-related-grid">
                {relatedPosts.map(related => (
                  <Link key={related.slug} to={`/blog/${related.slug}`} className="blog-related-card">
                    <h3>{related.title}</h3>
                    {related.description && <p>{related.description}</p>}
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </main>
    </>
  )
}
