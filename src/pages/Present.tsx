import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/motion/Reveal'
import Button from '../components/ui/Button'

const TOTAL_SLIDES = 11

const slideLabels = [
  'Title',
  'The Shift',
  'Who We Serve',
  'The Promise',
  'The Pillars',
  'The Symbol',
  'The Palette',
  'Typography',
  'The Voice',
  'The Rollout',
  'CTA',
]

/* ─── Slide Indicator (right-side dots) ─── */
function SlideIndicator({
  current,
  total,
  onDotClick,
}: {
  current: number
  total: number
  onDotClick: (i: number) => void
}) {
  return (
    <nav
      aria-label="Slide navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}: ${slideLabels[i]}`}
          className="group relative flex items-center justify-center"
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === current
                ? 'w-3 h-3 bg-primary shadow-glow'
                : 'w-2 h-2 bg-text/20 hover:bg-text/40'
            }`}
          />
          <AnimatePresence>
            {i === current && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="absolute right-6 whitespace-nowrap text-xs font-medium text-text/60 pointer-events-none"
              >
                {slideLabels[i]}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  )
}

/* ─── Animated Down Arrow ─── */
function ScrollArrow() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text/40"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M12 5v14" />
      <path d="M19 12l-7 7-7-7" />
    </motion.svg>
  )
}

/* ─── Keyboard Hint ─── */
function KeyboardHint({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-text/5 backdrop-blur-sm text-xs text-text-muted"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-text/10 font-mono text-[10px]">
            Scroll
          </kbd>
          <span>or</span>
          <kbd className="px-1.5 py-0.5 rounded bg-text/10 font-mono text-[10px]">
            Arrow Keys
          </kbd>
          <span>to navigate</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════
   SLIDES
   ═══════════════════════════════════════════════ */

/* 1 ── Title Slide ── */
function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src="/assets/wejden-spire-icon.svg"
        alt="Wejden Spire icon"
        className="w-24 h-24 md:w-32 md:h-32 mb-10"
        animate={{ scale: [1.0, 1.02, 1.0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Reveal>
        <h1 className="text-gradient text-6xl md:text-8xl font-bold tracking-tight leading-[1.15] pb-2 mb-4">
          Wejden Spire
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-3xl text-text/70 mb-6" dir="rtl">
          وجدان سبَاير
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl md:text-2xl text-text-muted font-light tracking-wide">
          Brand Proposal 2026
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="mt-16 flex flex-col items-center gap-2 text-text/40 text-sm">
          <span>Scroll to begin</span>
          <ScrollArrow />
        </div>
      </Reveal>
    </div>
  )
}

/* 2 ── The Shift ── */
function ShiftSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">
          The Shift
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-text/30 line-through decoration-2">
            Moodicament
          </span>
          <span className="mx-4 text-text/20">&rarr;</span>
          <span className="text-gradient">Wejden Spire</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl md:text-2xl text-text/70 font-light leading-relaxed">
          From clinical to human. From metric to meaningful.
        </p>
      </Reveal>
    </div>
  )
}

/* 3 ── Who We Serve ── */
function AudienceSlide() {
  const cards = [
    {
      title: 'Employees',
      desc: 'A safe space for expression',
      color: 'bg-primary/10 border-primary/30',
      accent: 'text-primary',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'HR & Leadership',
      desc: 'Insights to act on',
      color: 'bg-primary/10 border-primary/30',
      accent: 'text-primary',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
        </svg>
      ),
    },
    {
      title: 'IT & Security',
      desc: 'Trust and compliance',
      color: 'bg-purple/10 border-purple/30',
      accent: 'text-purple',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-6xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center">
          Who We Serve
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Three audiences. One platform.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={0.1 + i * 0.1}>
            <div
              className={`rounded-2xl border p-10 flex flex-col items-center text-center gap-5 ${card.color}`}
            >
              <span className={card.accent}>{card.icon}</span>
              <h3 className="text-2xl md:text-3xl font-bold">{card.title}</h3>
              <p className="text-lg text-text/60 font-light">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* 4 ── The Promise ── */
function PromiseSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-10">
          The Promise
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
          Transform emotions into{' '}
          <span className="text-gradient">signals</span>.
          <br />
          Signals into{' '}
          <span className="text-gradient">insights</span>.
          <br />
          Insights into{' '}
          <span className="text-gradient">actions</span>.
        </blockquote>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="mt-12 w-24 h-0.5 bg-gradient-to-r from-primary to-purple rounded-full" />
      </Reveal>
    </div>
  )
}

/* 5 ── The Pillars ── */
function PillarsSlide() {
  const pillars = [
    {
      name: 'Human Wellbeing',
      accent: 'border-primary/40 bg-primary/5',
      dot: 'bg-primary',
    },
    {
      name: 'Data & Insights',
      accent: 'border-blue/40 bg-blue/5',
      dot: 'bg-blue',
    },
    {
      name: 'Security & Privacy',
      accent: 'border-purple/40 bg-purple/5',
      dot: 'bg-purple',
    },
    {
      name: 'Measurable Impact',
      accent: 'border-primary/40 bg-primary/5',
      dot: 'bg-primary',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center">
          The Pillars
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Four pillars. One vision.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {pillars.map((p, i) => (
          <Reveal key={p.name} delay={0.1 + i * 0.08}>
            <div
              className={`rounded-2xl border p-10 flex items-center gap-5 ${p.accent}`}
            >
              <span className={`w-4 h-4 rounded-full shrink-0 ${p.dot}`} />
              <span className="text-2xl md:text-3xl font-semibold">{p.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* 6 ── The Symbol ── */
function SymbolSlide() {
  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-12 text-center">
          The Symbol
        </p>
      </Reveal>
      <div className="relative flex items-center justify-center mb-8">
        <Reveal delay={0.1}>
          <motion.img
            src="/assets/wejden-spire-icon.svg"
            alt="Wejden Spire symbol"
            className="w-40 h-40 md:w-56 md:h-56"
            animate={{ scale: [1.0, 1.02, 1.0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {[
          {
            label: 'Circle = Safe Space',
            color: 'text-primary',
          },
          {
            label: 'Wave = Emotional Signal',
            color: 'text-primary',
          },
          {
            label: 'Peak = Elevation / Spire',
            color: 'text-purple',
          },
        ].map((annotation, i) => (
          <Reveal key={annotation.label} delay={0.2 + i * 0.1}>
            <div className="flex flex-col items-center text-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  i === 0 ? 'bg-primary' : i === 1 ? 'bg-primary' : 'bg-purple'
                }`}
              />
              <p className={`text-xl md:text-2xl font-semibold ${annotation.color}`}>
                {annotation.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* 7 ── The Palette ── */
function PaletteSlide() {
  const colors = [
    { name: 'Green', hex: '#2FBF71', pct: '60%', bg: 'bg-primary' },
    { name: 'Blue', hex: '#2F6BFF', pct: '25%', bg: 'bg-blue' },
    { name: 'Purple', hex: '#7B61FF', pct: '10%', bg: 'bg-purple' },
  ]

  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center">
          The Palette
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Color system
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {colors.map((c, i) => (
          <Reveal key={c.name} delay={0.1 + i * 0.1}>
            <div className="flex flex-col items-center gap-4">
              <div
                className={`${c.bg} w-full aspect-[4/3] rounded-2xl shadow-md`}
              />
              <p className="text-2xl font-bold">{c.hex}</p>
              <p className="text-lg text-text-muted">{c.pct}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.4}>
        <div className="flex items-center gap-3 text-text/60">
          <span className="text-lg font-semibold text-text">Inter</span>
          <span className="text-sm">English</span>
        </div>
      </Reveal>
    </div>
  )
}

/* 8 ── Typography ── */
function TypographySlide() {
  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center">
          Typography
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Type system
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg md:text-xl text-text/50 font-light text-center mb-16 max-w-2xl">
          A clear, modern type system designed for global enterprise communication.
        </p>
      </Reveal>

      {/* Two font blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
            <p className="text-5xl md:text-6xl font-bold tracking-tight text-text mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Aa
            </p>
            <p className="text-2xl font-semibold text-text mb-3">Inter</p>
            <p className="text-sm text-text/50 leading-relaxed max-w-xs mx-auto">
              Primary font for English content, UI interfaces, and digital platforms. Designed for clarity and high readability.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-blue/20 bg-blue/5 p-10 text-center">
            <p className="text-5xl md:text-6xl font-bold tracking-tight text-text mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }} dir="rtl">
              أب
            </p>
            <p className="text-2xl font-semibold text-text mb-3">IBM Plex Sans Arabic</p>
            <p className="text-sm text-text/50 leading-relaxed max-w-xs mx-auto">
              Arabic counterpart ensuring readability, balance, and professional tone across bilingual environments.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Type scale examples */}
      <Reveal delay={0.3}>
        <div className="w-full max-w-2xl space-y-6 text-center">
          <p className="text-4xl md:text-5xl font-bold text-text leading-tight">
            Elevating workplace wellbeing.
          </p>
          <p className="text-xl md:text-2xl font-medium text-text/70">
            Emotions into signals. Signals into insights.
          </p>
          <p className="text-base md:text-lg text-text/50 font-light leading-relaxed">
            Wejden Spire transforms emotional signals into actionable insights for organizations.
          </p>
        </div>
      </Reveal>
    </div>
  )
}

/* 9 ── The Voice ── */
function VoiceSlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-10">
          The Voice
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-7xl font-bold mb-8">
          Warm. Professional. Intelligent.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-xl md:text-2xl text-text/50 font-light mb-12">
          50% human &middot; 30% corporate &middot; 20% tech
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-10 py-8 max-w-xl">
          <p className="text-lg md:text-xl text-text/80 italic leading-relaxed">
            &ldquo;Your wellbeing matters. Express yourself with confidence.&rdquo;
          </p>
        </div>
      </Reveal>
    </div>
  )
}

/* 9 ── The Rollout ── */
function RolloutSlide() {
  const phases = [
    'Discovery',
    'Strategy',
    'Design',
    'Review',
    'Delivery',
  ]
  const activeIndex = 2 // Design

  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto w-full">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center">
          The Rollout
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Five phases. Clear path.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="relative grid grid-cols-5 w-full max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-text/10" />
          <div
            className="absolute top-5 left-[10%] h-0.5 bg-gradient-to-r from-primary to-purple transition-all duration-700"
            style={{ width: `${(activeIndex / (phases.length - 1)) * 80}%` }}
          />
          {phases.map((phase, i) => (
            <div
              key={phase}
              className="relative flex flex-col items-center z-10"
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  i < activeIndex
                    ? 'bg-primary text-white'
                    : i === activeIndex
                      ? 'bg-primary text-white ring-4 ring-primary/20 scale-110'
                      : 'bg-neutral text-text-muted'
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`mt-4 text-sm md:text-base font-medium whitespace-nowrap ${
                  i === activeIndex ? 'text-primary' : 'text-text/50'
                }`}
              >
                {phase}
              </span>
              {i === activeIndex && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  In progress
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

/* 10 ── Call to Action ── */
function CTASlide() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <Reveal>
        <h2 className="text-gradient text-4xl md:text-7xl font-bold mb-14 leading-tight">
          Ready to elevate the experience?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="/">
            Explore the Proposal
          </Button>
          <Button variant="outline" size="lg" href="/deliverables">
            View Deliverables
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <Link
          to="/"
          className="text-sm text-text-muted hover:text-primary transition-colors underline underline-offset-4"
        >
          Exit presentation
        </Link>
      </Reveal>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   SLIDE REGISTRY
   ═══════════════════════════════════════════════ */
const slides: React.FC[] = [
  TitleSlide,
  ShiftSlide,
  AudienceSlide,
  PromiseSlide,
  PillarsSlide,
  SymbolSlide,
  PaletteSlide,
  TypographySlide,
  VoiceSlide,
  RolloutSlide,
  CTASlide,
]

/* ═══════════════════════════════════════════════
   PRESENT PAGE (main export)
   ═══════════════════════════════════════════════ */
export default function Present() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showHint, setShowHint] = useState(true)

  /* Track which slide is visible via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSlide(index)
          }
        },
        { threshold: 0.5 }
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* Hide keyboard hint after first scroll */
  useEffect(() => {
    if (currentSlide > 0 && showHint) {
      setShowHint(false)
    }
  }, [currentSlide, showHint])

  /* Navigate to slide index */
  const goToSlide = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  /* Keyboard navigation */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        const next = Math.min(currentSlide + 1, TOTAL_SLIDES - 1)
        goToSlide(next)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const prev = Math.max(currentSlide - 1, 0)
        goToSlide(prev)
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(TOTAL_SLIDES - 1)
      } else if (e.key === 'Escape') {
        window.location.href = '/'
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentSlide, goToSlide])

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto bg-bg"
      style={{
        scrollSnapType: 'y mandatory',
      }}
    >
      {/* Exit link */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Exit
      </Link>

      {/* Slide indicator dots */}
      <SlideIndicator
        current={currentSlide}
        total={TOTAL_SLIDES}
        onDotClick={goToSlide}
      />

      {/* Keyboard hint */}
      <KeyboardHint visible={showHint} />

      {/* Slides */}
      {slides.map((SlideComponent, i) => (
        <section
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el
          }}
          className="min-h-screen flex items-center justify-center"
          style={{ scrollSnapAlign: 'start' }}
        >
          <SlideComponent />
        </section>
      ))}
    </div>
  )
}
