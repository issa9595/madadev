import { Link } from 'react-router-dom'
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

const FAQ_ITEMS = [
  {
    q: 'Vous êtes basé à Nantes ?',
    a: "Oui, je suis basé à Nantes. Je travaille avec des clients sur Nantes et l'agglomération (Saint-Herblain, Rezé, Orvault, Carquefou…), mais aussi toute la Loire-Atlantique et la France entière en remote.",
  },
  {
    q: 'Peut-on se rencontrer en personne ?',
    a: "Oui, si vous êtes à Nantes ou en Loire-Atlantique, je suis disponible pour un rendez-vous en personne. Pour les clients hors de la région, on travaille efficacement en visioconférence.",
  },
  {
    q: 'Combien coûte un site web à Nantes ?',
    a: "Un site vitrine professionnel à Nantes est entre 400 et 700€, livré en 24 à 48h. Une boutique en ligne démarre à 1500€, avec un délai minimum d'une semaine. Devis gratuit sous 24h.",
  },
  {
    q: 'Je suis artisan à Nantes  est-ce que vous faites des sites pour les artisans ?',
    a: "Absolument. Je crée régulièrement des sites vitrine pour des artisans nantais : plombiers, électriciens, menuisiers, peintres, maçons… Un site entre 400 et 700€ qui génère des demandes de devis directement.",
  },
  {
    q: 'Quelle est la différence entre vous et une agence web à Nantes ?',
    a: "Je suis freelance solo  votre interlocuteur unique du début à la fin. Pas de chef de projet intermédiaire, pas de délais inutiles. Les tarifs sont aussi bien plus accessibles qu'une agence (souvent 2 à 5× plus cher pour un résultat équivalent).",
  },
]

export default function NantesPage() {
  return (
    <SeoPageShell meta={nantesPageMeta}>
        <section className="hero">
          <div className="container">
            <div className="badge">
              <span className="dot" />
              Basé à Nantes · Disponible partout en France
            </div>
            <h1>
              Développeur web freelance
              <br />
              <span className="gradient-text">à Nantes</span>
            </h1>
            <p className="hero-sub">
              Vous cherchez un développeur web freelance à Nantes ? Sites vitrine 400 à 700€ livrés en 24 à 48h ; e-commerce sur mesure dès 1500€, délai minimum une semaine. Applications web sur devis.
            </p>
            <div className="hero-ctas">
              <a href="/#contact" className="btn btn-primary">
                Demander un devis gratuit
              </a>
              <Link to="/tarifs" className="btn btn-outline">
                Voir les tarifs
              </Link>
            </div>

            <div className="stats-row">
              <div className="stat">
                <div className="stat-value">+30</div>
                <div className="stat-label">Projets livrés</div>
              </div>
              <div className="stat">
                <div className="stat-value">5 ans</div>
                <div className="stat-label">D&apos;expérience</div>
              </div>
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Création de site internet à Nantes et en Loire-Atlantique</h2>
              <p className="section-subtitle">
                Basé à Nantes, j&apos;interviens sur toute la Loire-Atlantique et partout en France en remote.
              </p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><MapPin size={28} /></div>
                <h3>Nantes &amp; agglomération</h3>
                <p>
                  Nantes, Saint-Nazaire, Saint-Herblain, Rezé, Orvault je suis disponible pour des rencontres sur place si vous préférez un suivi en face à face.
                </p>
              </div>
              <div className="card">
                <div className="card-icon"><Map size={28} /></div>
                <h3>Loire-Atlantique (44)</h3>
                <p>Toute la Loire-Atlantique est couverte. Artisans, restaurateurs et commerçants du département peuvent bénéficier de mes services.</p>
              </div>
              <div className="card">
                <div className="card-icon"><Globe size={28} /></div>
                <h3>Partout en France</h3>
                <p>
                  Je travaille en remote pour des clients partout en France. Visioconférence, échanges par email et téléphone la distance n&apos;est pas un obstacle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>Pourquoi choisir MadaDev pour votre projet web à Nantes ?</h2>
                <p>
                  Contrairement aux agences web, je suis un freelance solo votre interlocuteur unique du brief à la mise en ligne. Pas de chef de projet intermédiaire, pas de délais inutiles.
                </p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  <li>
                    <span className="check">✦</span> Interlocuteur unique du début à la fin
                  </li>
                  <li>
                    <span className="check">✦</span> Réactivité : réponse sous 24h
                  </li>
                  <li>
                    <span className="check">✦</span> Sites vitrine livrés en 24 à 48h (projet standard)
                  </li>
                  <li>
                    <span className="check">✦</span> Prix fixe, contractualisé, sans surprise
                  </li>
                  <li>
                    <span className="check">✦</span> Code propre, performant, maintenable
                  </li>
                  <li>
                    <span className="check">✦</span> SEO intégré dès le développement
                  </li>
                  <li>
                    <span className="check">✦</span> Accompagnement après la mise en ligne
                  </li>
                </ul>
              </div>
              <div className="contact-card">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={18} /></div>
                  <div className="contact-text">
                    <strong>Localisation</strong>
                    <span>Nantes, Pays de la Loire remote France entière</span>
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
                    <span>Disponible maintenant · Réponse sous 24h</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Euro size={18} /></div>
                  <div className="contact-text">
                    <strong>Tarifs</strong>
                    <span>Vitrine 400–700€ · E-commerce dès 1500€</span>
                  </div>
                </div>
                <a href="/#contact" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  Envoyer un message
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">+30 projets livrés, disponible maintenant</h2>
              <p className="section-subtitle">
                Des sites web pour artisans, commerçants, restaurants et startups à Nantes et partout en France.
              </p>
            </div>
            <div className="services-grid">
              <Link to="/site-vitrine" className="service-link">
                <div className="icon"><Monitor size={28} /></div>
                <h3>Site vitrine professionnel</h3>
                <p>Pour artisans, restaurants, TPE design moderne, SEO, mobile-first. Livré en 24–48h.</p>
                <div className="price">
                  400€ → 700€ <span className="arrow">→</span>
                </div>
              </Link>
              <Link to="/ecommerce" className="service-link">
                <div className="icon"><ShoppingCart size={28} /></div>
                <h3>Site e-commerce</h3>
                <p>Boutique Shopify ou Next.js, paiements carte bancaire et Stripe (pas de WooCommerce).</p>
                <div className="price">
                  À partir de 1500€ <span className="arrow">→</span>
                </div>
              </Link>
              <a href="/#services" className="service-link">
                <div className="icon"><Settings size={28} /></div>
                <h3>Application web sur mesure</h3>
                <p>Node.js, Express, PostgreSQL pour des besoins métier spécifiques et complexes.</p>
                <div className="price">
                  Devis gratuit <span className="arrow">→</span>
                </div>
              </a>
              <a href="/#services" className="service-link">
                <div className="icon"><TrendingUp size={28} /></div>
                <h3>Performance &amp; SEO</h3>
                <p>Audit Lighthouse, Core Web Vitals, optimisation SEO  pour que Google vous trouve.</p>
                <div className="price">
                  Devis gratuit <span className="arrow">→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>Interventions à Nantes et partout en France en remote</h2>
                <p>
                  Je peux travailler avec vous quelle que soit votre localisation. Les projets web ne nécessitent pas de présence physique  échanges par visio, email et téléphone suffisent.
                </p>
                <p>
                  Si vous êtes basé à Nantes ou en Loire-Atlantique, je suis également disponible pour des rencontres en personne si vous le souhaitez.
                </p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  <li>
                    <span className="check">✦</span> Appel de découverte gratuit (30 min)
                  </li>
                  <li>
                    <span className="check">✦</span> Suivi de projet transparent
                  </li>
                  <li>
                    <span className="check">✦</span> Préversion en ligne avant livraison
                  </li>
                  <li>
                    <span className="check">✦</span> Réunions visio selon vos disponibilités
                  </li>
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
                    Stack technique
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
                    Zones d&apos;intervention
                  </div>
                  <ul className="checklist">
                    <li>
                      <span className="check">✦</span> Nantes (44) - présentiel possible
                    </li>
                    <li>
                      <span className="check">✦</span> Loire-Atlantique - présentiel possible
                    </li>
                    <li>
                      <span className="check">✦</span> Pays de la Loire - remote
                    </li>
                    <li>
                      <span className="check">✦</span> France entière - remote
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ locale */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Questions fréquentes</h2>
              <p className="section-subtitle">Ce que les clients nantais demandent souvent.</p>
            </div>
            <div className="faq-list">
              {FAQ_ITEMS.map((item) => (
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
              Demander un <span className="gradient-text">devis gratuit</span>
            </h2>
            <p>Réponse sous 24h · Vitrine 400–700€ (24–48h) · E-commerce dès 1500€ · Paiement après validation</p>
            <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
              Démarrer mon projet
            </a>
          </div>
        </section>
    </SeoPageShell>
  )
}
