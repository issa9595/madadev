import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import SeoHead from '../components/seo/SeoHead'

const Services = lazy(() => import('../components/Services'))
const Offer = lazy(() => import('../components/Offer'))
const About = lazy(() => import('../components/About'))
const Portfolio = lazy(() => import('../components/Portfolio'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  return (
    <main>
      <SeoHead
        title="Création Site Web Nantes | Freelance Vitrine & E-commerce - MadaDev"
        description="MadaDev, développeur web freelance à Nantes. Sites vitrine 400-700€ en 24-48h. E-commerce sur mesure dès 1500€ (min. 1 semaine). Devis gratuit."
        keywords="développeur web freelance Nantes, création site web Nantes, site vitrine Nantes, e-commerce Nantes, landing page, site internet pas cher, développeur React freelance, site vitrine artisan, site web PME"
        path=""
      />
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
