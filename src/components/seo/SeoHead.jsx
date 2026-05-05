import { Helmet } from 'react-helmet-async'
import { OG_IMAGE_URL, SITE_ORIGIN } from '../../config/seo'

/**
 * Composant SEO unique source de vérité : injecte title, description, canonical,
 * Open Graph, Twitter Card et (optionnellement) JSON-LD via react-helmet-async.
 * Le `path` doit être une URL absolue à partir de la racine sans slash final
 * (ex: "/blog", "/site-vitrine"). Pour la home, passer path="" pour obtenir
 * https://mada-dev.com (sans slash final).
 */
export default function SeoHead({ title, description, path, keywords, jsonLd, noindex = false, canonicalUrl }) {
  const url = canonicalUrl || `${SITE_ORIGIN}${path}`

  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="MadaDev" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
