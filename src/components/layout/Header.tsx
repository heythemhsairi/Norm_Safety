import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Strategy', path: '/strategy' },
  { label: 'Identity', path: '/identity' },
  { label: 'Logo', path: '/logo' },
  { label: 'Voice', path: '/voice' },
  { label: 'Deliverables', path: '/deliverables' },
  { label: 'Context', path: '/context' },
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
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

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

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname],
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
        <Link
          to="/"
          className="relative z-10 flex shrink-0 items-center gap-2"
          aria-label="Wejden Spire - Home"
        >
          <img
            src="/assets/wejden-spire-logo.svg"
            alt="Wejden Spire"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute right-3 bottom-0 left-3 h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </Link>
          ))}

          {/* Present Button */}
          <Link
            to="/present"
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
          </Link>
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
            {/* Overlay */}
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

            {/* Drawer Panel */}
            <motion.nav
              key="drawer"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 flex h-dvh w-72 flex-col bg-white/95 backdrop-blur-xl shadow-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
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

              {/* Drawer Nav Items */}
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-150 ${
                        isActive(item.path)
                          ? 'bg-primary/5 text-primary'
                          : 'text-text-muted hover:bg-neutral/40 hover:text-text'
                      }`}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="my-3 h-px bg-border" />

                {/* Present Button (mobile) */}
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    to="/present"
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90 active:scale-[0.97]"
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
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
