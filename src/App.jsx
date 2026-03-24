import { Suspense } from 'react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/seo/ScrollToTop'
import BackToTop from './components/BackToTop'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
      <Footer />
      <BackToTop />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
