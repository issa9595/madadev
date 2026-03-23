import './Portfolio.css'

const projects = [
  {
    title: 'Locali',
    category: 'Application web',
    description:
      'Plateforme de mise en relation locale permettant aux utilisateurs de trouver des services et commerces à proximité.',
    tech: ['React', 'Node.js', 'Maps API'],
    preview: '/previews/locali.jpg',
    link: 'https://www.mylocali.fr',
  },
  {
    title: "L'Essence",
    category: 'Site vitrine',
    description:
      'Site vitrine élégant pour une marque lifestyle, avec un design soigné et une expérience utilisateur fluide.',
    tech: ['Vite', 'React', 'CSS'],
    preview: '/previews/lessence.jpg',
    link: 'https://mada-dev-template1.vercel.app',
  },
  {
    title: 'Lumia',
    category: 'Application web',
    description:
      'Assistant vocal interactif propulsé par IA, avec reconnaissance vocale et réponses en temps réel.',
    tech: ['React', 'Web Speech API', 'AI'],
    preview: '/previews/lumia.jpg',
    link: 'https://vocal-assistant-two.vercel.app',
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
            <a
              key={i}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-thumbnail">
                <img src={project.preview} alt={project.title} className="project-preview" />
                <div className="project-overlay">Voir le projet ↗</div>
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
            </a>
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
