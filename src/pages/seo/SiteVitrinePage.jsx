import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Hammer, Utensils, Store, Briefcase, ClipboardList, Zap, Globe, Trophy } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { siteVitrinePageMeta } from '../../data/seo/pageMeta'

const NICHE_ICONS = [Hammer, Utensils, Store, Briefcase]
const PROCESS_ICONS = [ClipboardList, Zap, Globe]

export default function SiteVitrinePage() {
  const { t } = useTranslation()

  const nicheItems = t('siteVitrinePage.niches.items', { returnObjects: true })
  const checklistItems = t('siteVitrinePage.includes.checklist', { returnObjects: true })
  const pricingFeatures = t('siteVitrinePage.includes.pricingFeatures', { returnObjects: true })
  const processSteps = t('siteVitrinePage.process.steps', { returnObjects: true })
  const vsWixChecklist = t('siteVitrinePage.vsWix.checklist', { returnObjects: true })
  const vsWixRows = t('siteVitrinePage.vsWix.rows', { returnObjects: true })
  const faqItems = t('siteVitrinePage.faq.items', { returnObjects: true })

  return (
    <SeoPageShell meta={siteVitrinePageMeta}>
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="dot" />
            {t('siteVitrinePage.hero.badge')}
          </div>
          <h1>
            {t('siteVitrinePage.hero.title')} <span className="gradient-text">{t('siteVitrinePage.hero.titleHighlight')}</span>
            <br />
            {t('siteVitrinePage.hero.titleLine2')}
          </h1>
          <p className="hero-sub">
            {t('siteVitrinePage.hero.sub')}
          </p>
          <div className="hero-ctas">
            <a href="/#contact" className="btn btn-primary">
              {t('siteVitrinePage.hero.ctaQuote')}
            </a>
            <a href="/#portfolio" className="btn btn-outline">
              {t('siteVitrinePage.hero.ctaPortfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('siteVitrinePage.niches.sectionTitle')}</h2>
            <p className="section-subtitle">
              {t('siteVitrinePage.niches.sectionSubtitle')}
            </p>
          </div>
          <div className="cards-grid cards-grid--four">
            {nicheItems.map((item, i) => {
              const Icon = NICHE_ICONS[i]
              return (
                <div key={item.title} className="card">
                  <div className="card-icon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ce que comprend votre site */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>{t('siteVitrinePage.includes.title')}</h2>
              <p>{t('siteVitrinePage.includes.description')}</p>
              <ul className="checklist">
                {checklistItems.map((item) => (
                  <li key={item}>
                    <span className="check">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pricing-block">
              <p style={{ opacity: 0.85, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                {t('siteVitrinePage.includes.pricingLabel')}
              </p>
              <div className="price">{t('siteVitrinePage.includes.pricingPrice')}</div>
              <p className="price-sub">{t('siteVitrinePage.includes.pricingSub')}</p>
              <ul className="pricing-features">
                {pricingFeatures.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                {t('siteVitrinePage.includes.pricingCta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('siteVitrinePage.process.sectionTitle')}</h2>
            <p className="section-subtitle">{t('siteVitrinePage.process.sectionSubtitle')}</p>
          </div>
          <div className="cards-grid">
            {processSteps.map((step, i) => {
              const Icon = PROCESS_ICONS[i]
              return (
                <div key={step.title} className="card">
                  <div className="card-icon"><Icon size={28} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi pas Wix / WordPress */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>{t('siteVitrinePage.vsWix.title')}</h2>
              <p>{t('siteVitrinePage.vsWix.p1')}</p>
              <p>{t('siteVitrinePage.vsWix.p2')}</p>
              <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                {vsWixChecklist.map((item) => (
                  <li key={item}>
                    <span className="check">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '0.75rem' }}><Trophy size={40} color="var(--primary-light)" /></div>
                <h3 style={{ marginBottom: '0.5rem' }}>{t('siteVitrinePage.vsWix.comparisonTitle')}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t('siteVitrinePage.vsWix.comparisonSubtitle')}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {vsWixRows.map(({ label, good, bad }) => (
                  <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', gap: '0.5rem', fontSize: '0.85rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span style={{ color: '#22c55e', fontWeight: 700, textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: good }} />
                    <span style={{ color: 'var(--text-muted)', textAlign: 'center' }}>{bad}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('siteVitrinePage.faq.sectionTitle')}</h2>
            <p className="section-subtitle">{t('siteVitrinePage.faq.sectionSubtitle')}</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-alt" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <h2>
            {t('siteVitrinePage.cta.titleBefore')}<span className="gradient-text">{t('siteVitrinePage.cta.titleHighlight')}</span> ?
          </h2>
          <p>{t('siteVitrinePage.cta.sub')}</p>
          <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
            {t('siteVitrinePage.cta.btn')}
          </a>
        </div>
      </section>
    </SeoPageShell>
  )
}
