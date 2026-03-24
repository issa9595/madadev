import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Remonte la fenêtre en haut à chaque changement de route (SPA). */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
