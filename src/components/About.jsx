import { memo, useMemo } from 'react'
import './About.css'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  const perks = useMemo(() => t('about.perks', { returnObjects: true }), [t])
  const skills = useMemo(() => t('about.skills', { returnObjects: true }), [t])

  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>

          <p className="about-paragraph">{t('about.paragraph1')}</p>
          <p className="about-paragraph">{t('about.paragraph2')}</p>

          <div className="about-perks">
            {perks.map(perk => (
              <div key={perk} className="perk">
                <span className="perk-check">✓</span>
                {perk}
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            {t('about.cta')}
          </a>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">{t('about.skillsTitle')}</h3>
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

export default memo(About)
