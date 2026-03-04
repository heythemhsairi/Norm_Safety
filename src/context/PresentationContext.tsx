import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/* ── Section map ── */
const SECTIONS = [
  { path: '/', label: 'Cover' },
  { path: '/strategy', label: 'Strategy' },
  { path: '/identity', label: 'Identity' },
  { path: '/logo', label: 'Logo' },
  { path: '/voice', label: 'Voice' },
  { path: '/deliverables', label: 'Deliverables' },
  { path: '/context', label: 'Context' },
] as const

type Section = (typeof SECTIONS)[number]

/* ── Context shape ── */
interface PresentationValue {
  isPresentMode: boolean
  currentIndex: number
  total: number
  sections: readonly Section[]
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
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isPresentMode, setIsPresentMode] = useState(false)
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null)

  const currentIndex = SECTIONS.findIndex((s) => s.path === pathname)
  const isMainSite = currentIndex !== -1

  // Prevent browser scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  /* ── Navigation ── */
  const goTo = useCallback(
    (i: number) => {
      if (i >= 0 && i < SECTIONS.length) {
        navigate(SECTIONS[i].path)
      }
    },
    [navigate],
  )

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
    if (!isMainSite) return

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

      // Arrow Right / Left → always navigate between sections
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
        if (e.key === 'Escape') {
          togglePresent()
          return
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMainSite, isPresentMode, goNext, goPrev, togglePresent])

  /* ── Touch / swipe ── */
  useEffect(() => {
    if (!isMainSite) return

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

      // Horizontal swipe: fast, long enough, more horizontal than vertical
      if (elapsed < 400 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) goNext()
        else goPrev()
      }
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [isMainSite, goNext, goPrev])

  /* ── Scroll lock in presentation mode ── */
  useEffect(() => {
    if (isPresentMode) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isPresentMode])

  return (
    <PresentationCtx.Provider
      value={{
        isPresentMode,
        currentIndex,
        total: SECTIONS.length,
        sections: SECTIONS,
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
