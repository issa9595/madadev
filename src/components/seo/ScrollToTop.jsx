import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Remonte la fenêtre en haut à chaque changement de route (SPA).
 *  Si l'URL contient un hash (#section), scrolle vers l'élément cible
 *  avec retry pour attendre le rendu des composants lazy-loaded. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let attempts = 0
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (attempts < 20) {
          attempts++
          setTimeout(tryScroll, 100)
        }
      }
      setTimeout(tryScroll, 100)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
