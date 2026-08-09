import Hero from '../components/Hero'
import SeoHead from '../components/seo/SeoHead'
// Imports statiques : ces sections doivent figurer dans le HTML prérendu
// (avec React.lazy + Suspense, le SSG n'émettrait que le fallback vide).
import Services from '../components/Services'
import Offer from '../components/Offer'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <SeoHead
        title="Développeur Web Freelance à Nantes | Site Vitrine & E-commerce - MadaDev"
        description="MadaDev, développeur web freelance à Nantes. Sites vitrine 300-700€ en 24-48h. E-commerce sur mesure dès 1500€ (min. 1 semaine). Devis gratuit."
        keywords="développeur web freelance Nantes, création site web Nantes, site vitrine Nantes, e-commerce Nantes, landing page, site internet pas cher, développeur React freelance, site vitrine artisan, site web PME"
        path=""
      />
      <Hero />
      <Services />
      <Offer />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
