import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentation } from '../../context/PresentationContext'

interface NavItem {
  label: string
  sectionId: string
}

const navItems: NavItem[] = [
  { label: 'Strategy', sectionId: 'positioning' },
  { label: 'Identity', sectionId: 'identity' },
  { label: 'Logo', sectionId: 'logo' },
  { label: 'Context', sectionId: 'context' },
  { label: 'Deliverables', sectionId: 'deliverables' },
]

const sidebarVariants = {
  closed: {
    x: '100%',
    transition: { type: 'spring' as const, stiffness: 400, damping: 40 },
  },
  open: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 400, damping: 40 },
  },
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { togglePresent } = usePresentation()

  // Track scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = [
      'cover', 'essence', 'positioning', 'audience', 'identity',
      'typography', 'logo', 'clearspace', 'symbol', 'context',
      'deliverables', 'next-steps', 'footer',
    ]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    }

    return () => observerRef.current?.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  const isActive = useCallback(
    (sectionId: string) => activeSection === sectionId,
    [activeSection],
  )

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="relative z-10 flex shrink-0 items-center gap-2"
          aria-label="Wejden Spire - Home"
        >
          <img
            src="/assets/wejden-spire-logo.svg"
            alt="Wejden Spire"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => scrollTo(item.sectionId)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(item.sectionId)
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
              {isActive(item.sectionId) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute right-3 bottom-0 left-3 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}

          {/* Present Button */}
          <button
            type="button"
            onClick={togglePresent}
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.97]"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Present
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-neutral/60 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-5 rounded-full bg-text"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 rounded-full bg-text"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-5 rounded-full bg-text"
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              key="drawer"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 flex h-dvh w-72 flex-col bg-white/95 backdrop-blur-xl shadow-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex h-16 items-center justify-end px-5">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-neutral/60"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-5 w-5 text-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.sectionId}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(item.sectionId)}
                      className={`flex w-full items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-150 ${
                        isActive(item.sectionId)
                          ? 'bg-primary/5 text-primary'
                          : 'text-text-muted hover:bg-neutral/40 hover:text-text'
                      }`}
                    >
                      {item.label}
                      {isActive(item.sectionId) && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  </motion.div>
                ))}
                <div className="my-3 h-px bg-border" />
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false)
                      togglePresent()
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90 active:scale-[0.97]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                    Present
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
