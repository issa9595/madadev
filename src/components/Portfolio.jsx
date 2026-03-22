import './Portfolio.css'

const projects = [
  {
    title: 'ShopEasy',
    category: 'E-commerce',
    description:
      'Boutique en ligne complète avec gestion des produits, panier, paiement Stripe et espace client.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: '#6366f1',
  },
  {
    title: 'DashPro',
    category: 'Application web',
    description:
      'Tableau de bord analytique temps réel pour une startup SaaS, avec graphiques interactifs et exports.',
    tech: ['React', 'Node.js', 'Chart.js'],
    color: '#8b5cf6',
  },
  {
    title: 'CabinetLegal.fr',
    category: 'Site vitrine',
    description:
      'Refonte complète d\'un cabinet d\'avocats : design moderne, SEO avancé et formulaire de contact.',
    tech: ['Vite', 'GSAP', 'EmailJS'],
    color: '#f59e0b',
  },
  {
    title: 'FoodTrack',
    category: 'Application mobile-first',
    description:
      'Application de suivi nutritionnel avec scan de codes-barres, base de données alimentaire et stats.',
    tech: ['React', 'Express', 'MongoDB'],
    color: '#10b981',
  },
  {
    title: 'AgenceVoyages',
    category: 'Site vitrine',
    description:
      'Site de réservation de voyages avec moteur de recherche, galerie et système de réservation en ligne.',
    tech: ['Next.js', 'Prisma', 'Vercel'],
    color: '#3b82f6',
  },
  {
    title: 'DevCollab',
    category: 'SaaS',
    description:
      'Plateforme de collaboration pour équipes de développement : revue de code, tickets, roadmap.',
    tech: ['React', 'WebSockets', 'Redis'],
    color: '#ec4899',
  },
]

export default function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes projets</h2>
          <p className="section-subtitle">
            Une sélection de projets récents illustrant mes compétences et mon savoir-faire.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div
                className="project-thumbnail"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
              >
                <div
                  className="project-icon-wrapper"
                  style={{ background: project.color }}
                >
                  <span className="project-icon">&lt;/&gt;</span>
                </div>
              </div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Vous avez un projet en tête ?</p>
          <a href="#contact" className="btn btn-primary">
            Parlons-en
          </a>
        </div>
      </div>
    </section>
  )
}
