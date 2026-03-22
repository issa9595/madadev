import './About.css'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'PostgreSQL / MongoDB', level: 80 },
  { name: 'UI/UX & Figma', level: 75 },
  { name: 'DevOps / Docker', level: 70 },
]

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">Passionné par le web depuis plus de 5 ans</p>

          <p className="about-paragraph">
            Bonjour ! Je suis un développeur web freelance basé en France, spécialisé dans
            la création d&apos;applications modernes avec React et Node.js. Je travaille avec
            des startups, PME et entrepreneurs pour donner vie à leurs projets digitaux.
          </p>
          <p className="about-paragraph">
            Mon approche : comprendre vos besoins, proposer des solutions adaptées, livrer
            dans les délais, et rester disponible après la mise en ligne. La qualité du
            code et l&apos;expérience utilisateur sont au cœur de chaque projet.
          </p>

          <div className="about-perks">
            {['Code propre et maintenable', 'Livraison dans les délais', 'Communication transparente', 'Support après livraison'].map(perk => (
              <div key={perk} className="perk">
                <span className="perk-check">✓</span>
                {perk}
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            Travailler ensemble
          </a>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Compétences techniques</h3>
          <div className="skills-list">
            {skills.map(skill => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
