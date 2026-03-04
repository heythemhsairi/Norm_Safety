import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { PresentationProvider } from './context/PresentationContext'
import Layout from './components/layout/Layout'
import Cover from './pages/Cover'
import Strategy from './pages/Strategy'
import Identity from './pages/Identity'
import Logo from './pages/Logo'
import Voice from './pages/Voice'
import Deliverables from './pages/Deliverables'
import Context from './pages/Context'
import Present from './pages/Present'

function AppRoutes() {
  const location = useLocation()

  if (location.pathname === '/present') {
    return <Present />
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cover />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/deliverables" element={<Deliverables />} />
          <Route path="/context" element={<Context />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default function App() {
  return (
    <PresentationProvider>
      <AppRoutes />
    </PresentationProvider>
  )
}
