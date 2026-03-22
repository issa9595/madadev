import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Intégration emailjs ou autre à connecter ici
    setSent(true)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Parlons de votre projet</h2>
            <p className="section-subtitle">
              Prêt à démarrer ? Envoyez-moi un message et je vous réponds sous 24h.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <a href="mailto:hello@madadev.fr" className="contact-item-value">
                    hello@madadev.fr
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <p className="contact-item-label">Localisation</p>
                  <p className="contact-item-value">France (remote)</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">⏱️</div>
                <div>
                  <p className="contact-item-label">Disponibilité</p>
                  <p className="contact-item-value">Dès maintenant</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {sent ? (
              <div className="success-message">
                <div className="success-icon">🎉</div>
                <h3>Message envoyé !</h3>
                <p>Merci pour votre message. Je vous réponds dans les 24 heures.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="project">Type de projet</label>
                  <select
                    id="project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionner...</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="application">Application web</option>
                    <option value="refonte">Refonte / optimisation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Décrivez votre projet</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet, vos objectifs, votre délai..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
