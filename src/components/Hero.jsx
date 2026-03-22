import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Disponible pour de nouveaux projets
        </div>

        <h1 className="hero-title">
          Je conçois des{' '}
          <span className="hero-highlight">expériences web</span>
          {' '}qui font la différence
        </h1>

        <p className="hero-description">
          Développeur web freelance passionné, je transforme vos idées en applications
          modernes, performantes et accessibles. Du design à la mise en ligne, je
          m&apos;occupe de tout.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-outline">
            Discutons ensemble
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">+30</span>
            <span className="stat-label">Projets livrés</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">5 ans</span>
            <span className="stat-label">D&apos;expérience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}
