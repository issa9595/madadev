import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const SiteVitrinePage = lazy(() => import('../pages/seo/SiteVitrinePage'))
const EcommercePage = lazy(() => import('../pages/seo/EcommercePage'))
const NantesPage = lazy(() => import('../pages/seo/NantesPage'))
const TarifsPage = lazy(() => import('../pages/seo/TarifsPage'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/site-vitrine" element={<SiteVitrinePage />} />
      <Route path="/ecommerce" element={<EcommercePage />} />
      <Route path="/nantes" element={<NantesPage />} />
      <Route path="/tarifs" element={<TarifsPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
