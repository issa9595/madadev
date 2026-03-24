import { Hammer, Utensils, Store, Briefcase, ClipboardList, Zap, Globe, Trophy } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { siteVitrinePageMeta } from '../../data/seo/pageMeta'

const FAQ_ITEMS = [
  {
    q: 'Combien coûte un site vitrine pour un artisan ?',
    a: "Pour un artisan (plombier, électricien, menuisier, peintre…), un site vitrine professionnel est entre 400 et 700€ selon le nombre de pages et le contenu. Livraison en 24 à 48h pour un projet standard. Devis gratuit sous 24h.",
  },
  {
    q: 'Combien coûte un site vitrine pour un restaurant ?',
    a: "Un site vitrine pour un restaurant (menu en ligne, galerie, réservation) est dans la même fourchette : 400 à 700€. Si vous souhaitez un système de réservation en ligne intégré, cela peut être ajouté selon le besoin.",
  },
  {
    q: 'Est-ce que je peux modifier mon site après livraison ?',
    a: "1 révision est incluse dans chaque formule. Pour des modifications régulières, je propose un forfait maintenance mensuel. Pour des petites retouches ponctuelles, je facture à l'heure.",
  },
  {
    q: "Pourquoi ne pas faire le site moi-même avec Wix ou WordPress ?",
    a: "Wix et WordPress, c'est pratique pour débuter mais les résultats sont souvent lents, peu optimisés pour Google, et difficiles à personnaliser vraiment. Un site développé sur mesure charge 3× plus vite, se démarque visuellement, et est pensé pour convertir vos visiteurs en clients. Et vous l'avez en 24-48h.",
  },
  {
    q: 'Est-ce que mon site sera visible sur Google ?',
    a: "Oui. Chaque site inclut les bases du SEO : balises titre, méta-descriptions, structure des titres, vitesse de chargement optimisée. Pour un référencement local fort (ex : «plombier Nantes»), je recommande d'y associer une fiche Google Business que j'aide à créer si besoin.",
  },
  {
    q: 'Est-ce que je paie en avance ?',
    a: "Non. Pour les projets standard (vitrine, e-commerce simple), le paiement se fait en fin de projet, une fois que vous avez validé le site. Pas d'acompte demandé.",
  },
]

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
            pour artisans, restaurants et TPE
          </h1>
          <p className="hero-sub">
            Un site professionnel, rapide et visible sur Google livré en 24 à 48h, entre 400 et 700€. Pas de Wix, pas de template : du sur mesure.
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

      {/* Niches */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quel que soit votre métier</h2>
            <p className="section-subtitle">
              Un site pensé pour votre activité, pas un template générique pour tout le monde.
            </p>
          </div>
          <div className="cards-grid cards-grid--four">
            <div className="card">
              <div className="card-icon"><Hammer size={28} /></div>
              <h3>Artisans &amp; métiers du bâtiment</h3>
              <p>
                Plombier, électricien, menuisier, peintre, maçon montrez votre savoir-faire et générez des demandes de devis directement depuis votre site.
              </p>
              <div className="tags">
                <span className="tag">Site vitrine artisan</span>
                <span className="tag">Devis en ligne</span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon"><Utensils size={28} /></div>
              <h3>Restaurants &amp; cafés</h3>
              <p>
                Menu en ligne, galerie photos, horaires, prise de contact tout ce qu'il faut pour donner envie et remplir votre salle. Mis à jour facilement.
              </p>
              <div className="tags">
                <span className="tag">Site vitrine restaurant</span>
                <span className="tag">Menu en ligne</span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon"><Store size={28} /></div>
              <h3>Commerçants &amp; TPE</h3>
              <p>
                Boutique, cabinet, agence soyez visible sur Google localement et convertissez vos visiteurs en clients avec une présence professionnelle.
              </p>
              <div className="tags">
                <span className="tag">Site web PME Nantes</span>
                <span className="tag">SEO local</span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon"><Briefcase size={28} /></div>
              <h3>Professions libérales</h3>
              <p>
                Médecin, avocat, coach, thérapeute, photographe présentez vos services, votre parcours et facilitez la prise de contact ou de rendez-vous.
              </p>
              <div className="tags">
                <span className="tag">Site professionnel freelance</span>
                <span className="tag">Prise de contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que comprend votre site */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Ce que comprend votre site vitrine</h2>
              <p>
                Pas de template. Pas de page générée à la chaîne. Chaque site est construit sur mesure pour votre activité.
              </p>
              <ul className="checklist">
                <li>
                  <span className="check">✦</span> Design moderne adapté à votre secteur
                </li>
                <li>
                  <span className="check">✦</span> Parfait sur smartphone 70% des recherches se font sur mobile
                </li>
                <li>
                  <span className="check">✦</span> Visible sur Google dès la mise en ligne (SEO de base inclus)
                </li>
                <li>
                  <span className="check">✦</span> Formulaire de contact intégré
                </li>
                <li>
                  <span className="check">✦</span> Textes orientés pour convaincre vos visiteurs (copywriting inclus)
                </li>
                <li>
                  <span className="check">✦</span> Site ultra-rapide chargement en moins d'1 seconde
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
              <p className="price-sub">Livraison 24 à 48h · Paiement à la fin</p>
              <ul className="pricing-features">
                <li>✓ Livraison en 24 à 48h</li>
                <li>✓ Design sur mesure</li>
                <li>✓ Parfait sur mobile &amp; Google</li>
                <li>✓ Formulaire de contact</li>
                <li>✓ 1 révision incluse</li>
                <li>✓ Accompagnement hébergement</li>
                <li>✓ Pas d'acompte demandé</li>
              </ul>
              <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                Démarrer mon projet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Livré en 24 à 48h voici comment</h2>
            <p className="section-subtitle">Un processus simple, sans jargon technique.</p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon"><ClipboardList size={28} /></div>
              <h3>1. On discute de votre projet</h3>
              <p>Vous m'expliquez votre activité, vos besoins, ce que vous aimez. Je vous envoie un devis détaillé et gratuit sous 24h. Aucun engagement.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Zap size={28} /></div>
              <h3>2. Je crée votre site</h3>
              <p>Je développe votre site vitrine sur mesure. Vous recevez une préversion en ligne pour valider avant que je publie quoi que ce soit.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Globe size={28} /></div>
              <h3>3. Mise en ligne &amp; paiement</h3>
              <p>
                Votre site est publié sur votre nom de domaine. Vous payez uniquement une fois le site validé pas avant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi pas Wix / WordPress */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Pourquoi ne pas passer par Wix ou WordPress ?</h2>
              <p>
                Wix et WordPress semblent pratiques mais en réalité, les sites générés sont lents, peu personnalisables, et difficiles à faire sortir en haut de Google.
              </p>
              <p>
                Un site développé sur mesure charge 3× plus vite, se différencie visuellement de la concurrence, et est optimisé pour convertir dès le départ sans les limites d'un constructeur de site.
              </p>
              <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                <li>
                  <span className="check">✦</span> Pas de pub Wix ou de badge "Créé avec WordPress"
                </li>
                <li>
                  <span className="check">✦</span> Design unique pas le même template que votre concurrent
                </li>
                <li>
                  <span className="check">✦</span> Chargement ultra-rapide (Google favorise les sites rapides)
                </li>
                <li>
                  <span className="check">✦</span> Pas d'abonnement mensuel à payer à Wix
                </li>
                <li>
                  <span className="check">✦</span> Code propre, maintenable, évolutif
                </li>
              </ul>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '0.75rem' }}><Trophy size={40} color="var(--primary-light)" /></div>
                <h3 style={{ marginBottom: '0.5rem' }}>Sur mesure vs. constructeur</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Ce que vous gagnez avec un vrai site pro</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  ['Vitesse de chargement', '&lt; 1 s', '3–8 s (Wix)'],
                  ['Design unique', '✓', '✗'],
                  ['SEO optimisé', '✓', 'Partiel'],
                  ['Abonnement mensuel', 'Non', '13–25€/mois'],
                  ['Pub visible sur le site', 'Non', 'Oui (Wix gratuit)'],
                ].map(([label, good, bad]) => (
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
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">Ce que vous vous demandez avant de vous lancer.</p>
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

      <section className="cta-section section-alt" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <h2>
            Prêt à créer votre <span className="gradient-text">site vitrine</span> ?
          </h2>
          <p>Devis gratuit sous 24h · Entre 400 et 700€ · Livraison 24 à 48h · Paiement après validation</p>
          <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
            Démarrer maintenant
          </a>
        </div>
      </section>
    </SeoPageShell>
  )
}
