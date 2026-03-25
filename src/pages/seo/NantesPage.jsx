import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Map, Globe, Monitor, ShoppingCart, Settings, TrendingUp, Mail, Zap, Euro } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { nantesPageMeta } from '../../data/seo/pageMeta'

const stackStyle = {
  background: 'rgba(99,102,241,0.1)',
  border: '1px solid rgba(99,102,241,0.25)',
  color: 'var(--primary-light)',
  borderRadius: '6px',
  padding: '0.25rem 0.7rem',
  fontSize: '0.8rem',
  fontWeight: 500,
}

export default function NantesPage() {
  const { t } = useTranslation()
  const faqItems = t('nantesPage.faq.items', { returnObjects: true })
  const whyChecklist = t('nantesPage.why.checklist', { returnObjects: true })
  const remoteChecklist = t('nantesPage.remote.checklist', { returnObjects: true })
  const zones = t('nantesPage.remote.zones', { returnObjects: true })

  return (
    <SeoPageShell meta={nantesPageMeta}>
        <section className="hero">
          <div className="container">
            <div className="badge">
              <span className="dot" />
              {t('nantesPage.hero.badge')}
            </div>
            <h1>
              {t('nantesPage.hero.title')}
              <br />
              <span className="gradient-text">{t('nantesPage.hero.titleHighlight')}</span>
            </h1>
            <p className="hero-sub">
              {t('nantesPage.hero.sub')}
            </p>
            <div className="hero-ctas">
              <a href="/#contact" className="btn btn-primary">
                {t('nantesPage.hero.ctaQuote')}
              </a>
              <Link to="/tarifs" className="btn btn-outline">
                {t('nantesPage.hero.ctaTarifs')}
              </Link>
            </div>

            <div className="stats-row">
              <div className="stat">
                <div className="stat-value">{t('nantesPage.hero.statsProjects')}</div>
                <div className="stat-label">{t('nantesPage.hero.statsProjectsLabel')}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{t('nantesPage.hero.statsExperience')}</div>
                <div className="stat-label">{t('nantesPage.hero.statsExperienceLabel')}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{t('nantesPage.hero.statsSatisfaction')}</div>
                <div className="stat-label">{t('nantesPage.hero.statsSatisfactionLabel')}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('nantesPage.coverage.sectionTitle')}</h2>
              <p className="section-subtitle">
                {t('nantesPage.coverage.sectionSubtitle')}
              </p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><MapPin size={28} /></div>
                <h3>{t('nantesPage.coverage.nantes.title')}</h3>
                <p>{t('nantesPage.coverage.nantes.description')}</p>
              </div>
              <div className="card">
                <div className="card-icon"><Map size={28} /></div>
                <h3>{t('nantesPage.coverage.loireAtlantique.title')}</h3>
                <p>{t('nantesPage.coverage.loireAtlantique.description')}</p>
              </div>
              <div className="card">
                <div className="card-icon"><Globe size={28} /></div>
                <h3>{t('nantesPage.coverage.france.title')}</h3>
                <p>{t('nantesPage.coverage.france.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>{t('nantesPage.why.title')}</h2>
                <p>{t('nantesPage.why.p')}</p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  {whyChecklist.map((item) => (
                    <li key={item}>
                      <span className="check">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-card">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={18} /></div>
                  <div className="contact-text">
                    <strong>Localisation</strong>
                    <span>{t('nantesPage.why.contactLocation')}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={18} /></div>
                  <div className="contact-text">
                    <strong>Email</strong>
                    <span>issamadayev@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Zap size={18} /></div>
                  <div className="contact-text">
                    <strong>Disponibilité</strong>
                    <span>{t('nantesPage.why.contactAvailability')}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Euro size={18} /></div>
                  <div className="contact-text">
                    <strong>Tarifs</strong>
                    <span>{t('nantesPage.why.contactTarifs')}</span>
                  </div>
                </div>
                <a href="/#contact" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  {t('nantesPage.why.contactCta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('nantesPage.services.sectionTitle')}</h2>
              <p className="section-subtitle">
                {t('nantesPage.services.sectionSubtitle')}
              </p>
            </div>
            <div className="services-grid">
              <Link to="/site-vitrine" className="service-link">
                <div className="icon"><Monitor size={28} /></div>
                <h3>{t('nantesPage.services.vitrine.title')}</h3>
                <p>{t('nantesPage.services.vitrine.description')}</p>
                <div className="price">
                  {t('nantesPage.services.vitrine.price')} <span className="arrow">→</span>
                </div>
              </Link>
              <Link to="/ecommerce" className="service-link">
                <div className="icon"><ShoppingCart size={28} /></div>
                <h3>{t('nantesPage.services.ecommerce.title')}</h3>
                <p>{t('nantesPage.services.ecommerce.description')}</p>
                <div className="price">
                  {t('nantesPage.services.ecommerce.price')} <span className="arrow">→</span>
                </div>
              </Link>
              <a href="/#services" className="service-link">
                <div className="icon"><Settings size={28} /></div>
                <h3>{t('nantesPage.services.webapp.title')}</h3>
                <p>{t('nantesPage.services.webapp.description')}</p>
                <div className="price">
                  {t('nantesPage.services.webapp.price')} <span className="arrow">→</span>
                </div>
              </a>
              <a href="/#services" className="service-link">
                <div className="icon"><TrendingUp size={28} /></div>
                <h3>{t('nantesPage.services.seo.title')}</h3>
                <p>{t('nantesPage.services.seo.description')}</p>
                <div className="price">
                  {t('nantesPage.services.seo.price')} <span className="arrow">→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>{t('nantesPage.remote.title')}</h2>
                <p>{t('nantesPage.remote.p1')}</p>
                <p>{t('nantesPage.remote.p2')}</p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  {remoteChecklist.map((item) => (
                    <li key={item}>
                      <span className="check">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--primary-light)',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {t('nantesPage.remote.stackLabel')}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['React', 'Next.js', 'Node.js', 'Shopify', 'Stripe', 'PostgreSQL', 'Vercel'].map(tech => (
                      <span key={tech} style={stackStyle}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--primary-light)',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {t('nantesPage.remote.zonesLabel')}
                  </div>
                  <ul className="checklist">
                    {zones.map((zone) => (
                      <li key={zone}>
                        <span className="check">✦</span> {zone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('nantesPage.faq.sectionTitle')}</h2>
              <p className="section-subtitle">{t('nantesPage.faq.sectionSubtitle')}</p>
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

        <section className="cta-section" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <h2>
              {t('nantesPage.cta.titleBefore')}<span className="gradient-text">{t('nantesPage.cta.titleHighlight')}</span>
            </h2>
            <p>{t('nantesPage.cta.sub')}</p>
            <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
              {t('nantesPage.cta.btn')}
            </a>
          </div>
        </section>
    </SeoPageShell>
  )
}
