import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

const Services = lazy(() => import('../components/Services'))
const Offer = lazy(() => import('../components/Offer'))
const About = lazy(() => import('../components/About'))
const Portfolio = lazy(() => import('../components/Portfolio'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Création Site Web Nantes | Freelance Vitrine &amp; E-commerce - MadaDev</title>
        <meta
          name="description"
          content="MadaDev, développeur web freelance à Nantes. Sites vitrine 400–700€ en 24–48h. E-commerce sur mesure dès 1500€ (min. 1 semaine). Devis gratuit."
        />
        <link rel="canonical" href="https://mada-dev.com/" />
      </Helmet>
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <Offer />
        <About />
        <Portfolio />
        <Contact />
      </Suspense>
    </main>
  )
}
