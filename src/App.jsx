import { StrictMode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/seo/ScrollToTop'
import BackToTop from './components/BackToTop'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Footer from './components/Footer'

export default function App() {
  return (
    <StrictMode>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <BackToTop />
      <Analytics />
      <SpeedInsights />
    </StrictMode>
  )
}
