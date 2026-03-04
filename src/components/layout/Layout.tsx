import type { ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './Header'
import { usePresentation } from '../../context/PresentationContext'
import PresentationOverlay from '../ui/PresentationOverlay'

interface LayoutProps {
  children: ReactNode
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--color-primary), var(--color-blue))',
      }}
    />
  )
}

export default function Layout({ children }: LayoutProps) {
  const { isPresentMode, containerRef } = usePresentation()

  return (
    <div
      ref={containerRef}
      className={`relative bg-bg ${
        isPresentMode
          ? 'present-container'
          : 'flex min-h-dvh flex-col'
      }`}
    >
      {/* Scroll Progress Bar — hidden in presentation mode */}
      {!isPresentMode && <ScrollProgress />}

      {/* Fixed Header — hidden in presentation mode */}
      {!isPresentMode && <Header />}

      {/* Main Content */}
      <main className={isPresentMode ? '' : 'flex-1 pt-16'}>
        {children}
      </main>

      {/* Presentation overlay (dots, hints, controls) */}
      <PresentationOverlay />
    </div>
  )
}
