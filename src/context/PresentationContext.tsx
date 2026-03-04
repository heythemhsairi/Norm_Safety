import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
  type RefObject,
} from 'react'

/* ── Section map ── */
const SECTIONS = [
  { id: 'cover', label: 'Cover' },
  { id: 'essence', label: 'Essence' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'audience', label: 'Audience' },
  { id: 'identity', label: 'Identity' },
  { id: 'typography', label: 'Typography' },
  { id: 'logo', label: 'Logo' },
  { id: 'clearspace', label: 'Clear Space' },
  { id: 'symbol', label: 'Symbol' },
  { id: 'context', label: 'Context' },
  { id: 'deliverables', label: 'Deliverables' },
  { id: 'next-steps', label: 'Next Steps' },
  { id: 'footer', label: 'Footer' },
] as const

type Section = (typeof SECTIONS)[number]

/* ── Context shape ── */
interface PresentationValue {
  isPresentMode: boolean
  currentIndex: number
  total: number
  sections: readonly Section[]
  containerRef: RefObject<HTMLDivElement | null>
  goNext: () => void
  goPrev: () => void
  goTo: (i: number) => void
  togglePresent: () => void
}

const PresentationCtx = createContext<PresentationValue | null>(null)

export function usePresentation() {
  const ctx = useContext(PresentationCtx)
  if (!ctx) throw new Error('usePresentation requires PresentationProvider')
  return ctx
}

/* ── Provider ── */
export function PresentationProvider({ children }: { children: ReactNode }) {
  const [isPresentMode, setIsPresentMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null)

  /* ── Track active section via IntersectionObserver ── */
  useEffect(() => {
    const root = isPresentMode ? containerRef.current : null
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id)
            if (idx !== -1) setCurrentIndex(idx)
          }
        }
      },
      { root, rootMargin: '-30% 0px -50% 0px', threshold: 0 },
    )

    const timer = setTimeout(() => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id)
        if (el) observer.observe(el)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [isPresentMode])

  /* ── Navigation ── */
  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < SECTIONS.length) {
      const el = document.getElementById(SECTIONS[i].id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const goNext = useCallback(() => {
    if (currentIndex < SECTIONS.length - 1) goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  /* ── Fullscreen + present mode ── */
  const togglePresent = useCallback(() => {
    setIsPresentMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.requestFullscreen?.().catch(() => {})
      } else {
        if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
      }
      return next
    })
  }, [])

  // Sync present mode with fullscreen exit (e.g., browser ESC)
  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) setIsPresentMode(false)
    }
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  /* ── Keyboard ── */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable
      )
        return

      // F → toggle fullscreen presentation
      if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        togglePresent()
        return
      }

      // Arrow Right / Left → navigate between sections (always)
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
        return
      }

      // Presentation mode only: additional keys
      if (isPresentMode) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
          e.preventDefault()
          goNext()
          return
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          goPrev()
          return
        }
        if (e.key === 'Home') {
          e.preventDefault()
          goTo(0)
          return
        }
        if (e.key === 'End') {
          e.preventDefault()
          goTo(SECTIONS.length - 1)
          return
        }
        if (e.key === 'Escape') {
          togglePresent()
          return
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isPresentMode, goNext, goPrev, goTo, togglePresent])

  /* ── Touch / swipe ── */
  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0]
      touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() }
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touchRef.current) return
      const t = e.changedTouches[0]
      const dx = t.clientX - touchRef.current.x
      const dy = t.clientY - touchRef.current.y
      const elapsed = Date.now() - touchRef.current.t
      touchRef.current = null

      if (elapsed < 400 && Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx) * 1.5) {
        if (dy < 0) goNext()
        else goPrev()
      }
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goPrev])

  return (
    <PresentationCtx.Provider
      value={{
        isPresentMode,
        currentIndex,
        total: SECTIONS.length,
        sections: SECTIONS,
        containerRef,
        goNext,
        goPrev,
        goTo,
        togglePresent,
      }}
    >
      {children}
    </PresentationCtx.Provider>
  )
}
