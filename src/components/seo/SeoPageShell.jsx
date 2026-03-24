import SeoHead from './SeoHead'
import './SeoLanding.css'

/**
 * Enveloppe commune des landing SEO : Helmet + main.seo-page + styles.
 * @param {{ meta: { title: string, description: string, path: string, keywords?: string, jsonLd?: object } }} props
 */
export default function SeoPageShell({ meta, children }) {
  const { title, description, path, keywords, jsonLd } = meta
  return (
    <>
      <SeoHead title={title} description={description} path={path} keywords={keywords} jsonLd={jsonLd} />
      <main className="seo-page">{children}</main>
    </>
  )
}
