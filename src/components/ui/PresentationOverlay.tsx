import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePresentation } from '../../context/PresentationContext'

export default function PresentationOverlay() {
  const {
    isPresentMode,
    currentIndex,
    total,
    sections,
    goTo,
    goNext,
    goPrev,
    togglePresent,
  } = usePresentation()

  const [showHint, setShowHint] = useState(false)

  // Auto-hide keyboard hint after 4 seconds
  useEffect(() => {
    if (isPresentMode) {
      setShowHint(true)
      const timer = setTimeout(() => setShowHint(false), 4000)
      return () => clearTimeout(timer)
    } else {
      setShowHint(false)
    }
  }, [isPresentMode])

  return (
    <>
      {/* ── Section progress bar (presentation mode, replaces scroll bar) ── */}
      <AnimatePresence>
        {isPresentMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 right-0 left-0 z-[60] h-[2px] bg-text/5"
          >
            <motion.div
              className="h-full"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-primary), var(--color-blue))',
              }}
              initial={false}
              animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop side dots ── */}
      <nav
        aria-label="Section navigation"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2.5 lg:flex"
      >
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${section.label}`}
            className="group relative flex items-center justify-center p-1"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'h-2.5 w-2.5 bg-primary shadow-glow'
                  : i < currentIndex
                    ? 'h-1.5 w-1.5 bg-primary/40'
                    : 'h-1.5 w-1.5 bg-text/15 group-hover:bg-text/30'
              }`}
            />
            {/* Tooltip label */}
            <span
              className={`pointer-events-none absolute right-8 whitespace-nowrap text-xs font-medium transition-opacity duration-200 ${
                i === currentIndex
                  ? 'text-text/60 opacity-100'
                  : 'text-text/40 opacity-0 group-hover:opacity-100'
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* ── Mobile bottom dots ── */}
      <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 lg:hidden">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${section.label}`}
            className="p-1"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'h-1.5 w-5 bg-primary'
                  : 'h-1.5 w-1.5 bg-text/20'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Present mode toggle — desktop, normal mode ── */}
      <AnimatePresence>
        {!isPresentMode && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={togglePresent}
            className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-text/5 px-3.5 py-2 text-xs font-medium text-text-muted backdrop-blur-md transition-all hover:bg-text/10 hover:text-text lg:flex"
            aria-label="Enter presentation mode"
          >
            <kbd className="rounded bg-text/10 px-1.5 py-0.5 font-mono text-[10px]">
              F
            </kbd>
            Present
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Keyboard hint — presentation mode, auto-hides ── */}
      <AnimatePresence>
        {isPresentMode && showHint && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-3 rounded-full bg-text/5 px-5 py-2.5 text-xs text-text-muted backdrop-blur-md lg:flex"
          >
            <span className="flex items-center gap-1.5">
              <kbd className="rounded bg-text/10 px-1.5 py-0.5 font-mono text-[10px]">
                &larr;
              </kbd>
              <kbd className="rounded bg-text/10 px-1.5 py-0.5 font-mono text-[10px]">
                &rarr;
              </kbd>
              navigate
            </span>
            <span className="h-3 w-px bg-text/15" />
            <span className="flex items-center gap-1.5">
              <kbd className="rounded bg-text/10 px-1.5 py-0.5 font-mono text-[10px]">
                Space
              </kbd>
              next
            </span>
            <span className="h-3 w-px bg-text/15" />
            <span className="flex items-center gap-1.5">
              <kbd className="rounded bg-text/10 px-1.5 py-0.5 font-mono text-[10px]">
                ESC
              </kbd>
              exit
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navigation controls — presentation mode ── */}
      <AnimatePresence>
        {isPresentMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
          >
            <button
              onClick={goPrev}
              disabled={currentIndex <= 0}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-text/5 text-text/50 backdrop-blur-md transition-colors hover:bg-text/10 disabled:opacity-25"
              aria-label="Previous section"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="min-w-[2.5rem] text-center text-xs font-medium tabular-nums text-text/40">
              {currentIndex + 1}/{total}
            </span>
            <button
              onClick={goNext}
              disabled={currentIndex >= total - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-text/5 text-text/50 backdrop-blur-md transition-colors hover:bg-text/10 disabled:opacity-25"
              aria-label="Next section"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
