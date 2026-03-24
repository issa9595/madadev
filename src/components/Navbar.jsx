import { memo, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'
import { SUPPORTED_LANGUAGES, LANGUAGE_AUTONYMS, resolveSelectableLanguage } from '../i18n/languages'
import './Navbar.css'

function LanguageDropdown({ selectedLanguage, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentLabel = LANGUAGE_AUTONYMS[selectedLanguage] || selectedLanguage.toUpperCase()

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className={`lang-trigger ${open ? 'open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Changer de langue"
        type="button"
      >
        <Globe size={15} />
        <span>{currentLabel}</span>
        <ChevronDown size={13} className="lang-chevron" />
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {SUPPORTED_LANGUAGES.map(code => (
            <li
              key={code}
              role="option"
              aria-selected={code === selectedLanguage}
              className={`lang-option ${code === selectedLanguage ? 'active' : ''}`}
              onClick={() => { onChange(code); setOpen(false) }}
            >
              {LANGUAGE_AUTONYMS[code]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScrolled = () => {
      setScrolled(prev => {
        const next = window.scrollY > 50
        return prev === next ? prev : next
      })
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateScrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { to: '/site-vitrine', label: 'Site vitrine' },
    { to: '/ecommerce', label: 'E-commerce' },
    { to: '/tarifs', label: 'Tarifs' },
    { to: '/nantes', label: 'Nantes' },
  ]

  const selectedLanguage = resolveSelectableLanguage(i18n.resolvedLanguage || i18n.language)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="logo" aria-label={t('nav.logoAria')}>
          <span className="logo-bracket">&lt;</span>
          MadaDev
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={t('nav.mainAria')}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LanguageDropdown
            selectedLanguage={selectedLanguage}
            onChange={code => i18n.changeLanguage(code)}
          />
          <a href="/#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            {t('nav.cta')}
          </a>
        </nav>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={t('nav.menuAria')}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default memo(Navbar)
