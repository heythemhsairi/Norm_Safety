import type { ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

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
  return (
    <div className="relative flex min-h-dvh flex-col bg-bg">
      {/* Scroll Progress Bar — sits above everything */}
      <ScrollProgress />

      {/* Fixed Header */}
      <Header />

      {/* Main Content — padded to clear fixed header */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
