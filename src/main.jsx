import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes/AppRoutes'
import './index.css'
import './i18n'

export const createRoot = ViteReactSSG({ routes })
