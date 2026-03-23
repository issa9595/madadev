import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const Services = lazy(() => import('./components/Services'))
const Offer = lazy(() => import('./components/Offer'))
const About = lazy(() => import('./components/About'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Offer />
          <About />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
