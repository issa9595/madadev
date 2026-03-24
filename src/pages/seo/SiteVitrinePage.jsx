import SeoPageShell from '../../components/seo/SeoPageShell'
import { siteVitrinePageMeta } from '../../data/seo/pageMeta'

export default function SiteVitrinePage() {
  return (
    <SeoPageShell meta={siteVitrinePageMeta}>
        <section className="hero">
          <div className="container">
            <div className="badge">
              <span className="dot" />
              Disponible maintenant · Nantes &amp; remote
            </div>
            <h1>
              Création de <span className="gradient-text">site vitrine</span>
              <br />
              professionnel à Nantes
            </h1>
            <p className="hero-sub">
              Artisan, restaurateur, TPE ou commerçant — obtenez un site vitrine moderne, rapide et optimisé SEO : fourchette 400 à 700€, livré en 24 à 48h pour un projet standard.
            </p>
            <div className="hero-ctas">
              <a href="/#contact" className="btn btn-primary">
                Demander un devis gratuit
              </a>
              <a href="/#portfolio" className="btn btn-outline">
                Voir les réalisations
              </a>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Site vitrine pour artisan, restaurant et TPE</h2>
              <p className="section-subtitle">
                Un site professionnel adapté à votre activité, pas à celle de votre voisin.
              </p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">🔨</div>
                <h3>Artisans &amp; artisans</h3>
                <p>
                  Plombier, électricien, menuisier, peintre — montrez votre savoir-faire avec un site qui vous ressemble et qui génère des demandes de devis.
                </p>
                <div className="tags">
                  <span className="tag">Site vitrine artisan</span>
                  <span className="tag">Devis en ligne</span>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">🍽️</div>
                <h3>Restaurants &amp; cafés</h3>
                <p>
                  Menu en ligne, réservation, galerie photos — tout ce qu&apos;il faut pour donner envie et remplir votre salle. Mis à jour facilement.
                </p>
                <div className="tags">
                  <span className="tag">Site vitrine restaurant</span>
                  <span className="tag">Menu en ligne</span>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">🏪</div>
                <h3>Commerçants &amp; TPE</h3>
                <p>
                  Vitrine numérique pour votre boutique, cabinet ou agence. Soyez visible sur Google localement et convertissez vos visiteurs en clients.
                </p>
                <div className="tags">
                  <span className="tag">Site web PME Nantes</span>
                  <span className="tag">SEO local</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>Ce que comprend votre site vitrine</h2>
                <p>
                  Chaque site vitrine est conçu sur mesure — pas de template générique. Voici ce qui est inclus dans chaque projet.
                </p>
                <ul className="checklist">
                  <li>
                    <span className="check">✦</span> Design moderne adapté à votre secteur
                  </li>
                  <li>
                    <span className="check">✦</span> 100% mobile-first — parfait sur smartphone
                  </li>
                  <li>
                    <span className="check">✦</span> SEO de base : balises, metas, vitesse optimisée
                  </li>
                  <li>
                    <span className="check">✦</span> Formulaire de contact intégré
                  </li>
                  <li>
                    <span className="check">✦</span> Textes orientés conversion (copywriting inclus)
                  </li>
                  <li>
                    <span className="check">✦</span> Score Lighthouse &gt; 90 (performance, accessibilité)
                  </li>
                  <li>
                    <span className="check">✦</span> 1 révision incluse après livraison
                  </li>
                  <li>
                    <span className="check">✦</span> Accompagnement pour la mise en ligne
                  </li>
                </ul>
              </div>
              <div className="pricing-block">
                <p style={{ opacity: 0.85, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  Site vitrine
                </p>
                <div className="price">400€ → 700€</div>
                <p className="price-sub">Sites vitrine · Livraison 24 à 48h</p>
                <ul className="pricing-features">
                  <li>✓ Livraison en 24 à 48h</li>
                  <li>✓ Design sur mesure</li>
                  <li>✓ Mobile-first &amp; SEO</li>
                  <li>✓ Formulaire de contact</li>
                  <li>✓ 1 révision incluse</li>
                  <li>✓ Accompagnement hébergement</li>
                </ul>
                <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                  Démarrer mon projet
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Un site livré en 24 à 48h</h2>
              <p className="section-subtitle">Pas de délais interminables. Voici comment ça se passe.</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">📋</div>
                <h3>1. Brief &amp; devis</h3>
                <p>On échange sur votre projet — secteur, objectifs, contenu. Je vous envoie un devis gratuit sous 24h.</p>
              </div>
              <div className="card">
                <div className="card-icon">⚡</div>
                <h3>2. Développement express</h3>
                <p>Je développe votre site vitrine professionnel. Vous recevez une préversion pour validation avant mise en ligne.</p>
              </div>
              <div className="card">
                <div className="card-icon">🚀</div>
                <h3>3. Mise en ligne</h3>
                <p>
                  Votre site est déployé sur votre nom de domaine, performant, indexable et prêt à recevoir vos premiers visiteurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>Exemple de réalisation : L&apos;Essence</h2>
                <p>Site vitrine lifestyle développé avec Vite et React. Design minimaliste, animations fluides, entièrement mobile-first.</p>
                <p>Résultat : score Lighthouse 98, temps de chargement &lt; 1s, 100% responsive.</p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  <li>
                    <span className="check">✦</span> Stack : Vite, React, CSS custom
                  </li>
                  <li>
                    <span className="check">✦</span> Performance : Lighthouse 98+
                  </li>
                  <li>
                    <span className="check">✦</span> Mobile-first, animations CSS
                  </li>
                </ul>
              </div>
              <div
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  minHeight: '220px',
                }}
              >
                <div style={{ fontSize: '3rem' }}>🌿</div>
                <h3 style={{ textAlign: 'center' }}>L&apos;Essence</h3>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Site vitrine lifestyle · Vite + React
                </p>
                <a href="/#portfolio" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
                  Voir tous les projets
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section section-alt">
          <div className="container">
            <h2>
              Prêt à créer votre <span className="gradient-text">site vitrine</span> ?
            </h2>
            <p>Devis gratuit sous 24h · Sites vitrine 400 à 700€ · Livraison 24 à 48h</p>
            <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
              Démarrer maintenant
            </a>
          </div>
        </section>
    </SeoPageShell>
  )
}
