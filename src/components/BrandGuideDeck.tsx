import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  brandGuideSlides,
  type BrandGuideSlide,
  type SymbolMeaning,
} from '../data/brandGuideSlides'

/* ─── helpers ─── */

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi)
}

function pad(n: number) {
  return String(n + 1).padStart(2, '0')
}

interface ChapterInfo {
  chapter: string
  index: number
  count: number
}

function chapters(slides: BrandGuideSlide[]): ChapterInfo[] {
  const seen = new Map<string, ChapterInfo>()
  for (let i = 0; i < slides.length; i++) {
    const ch = slides[i].chapter
    if (!seen.has(ch)) seen.set(ch, { chapter: ch, index: i, count: 0 })
    seen.get(ch)!.count++
  }
  return [...seen.values()]
}

/* ─── Inline SVG icons ─── */

const icons: Record<string, React.ReactNode> = {
  'Brand Core': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
  ),
  'Logo System': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
  ),
  'Visual Identity': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a9.96 9.96 0 002.2 6.3l3.8-2.3"/></svg>
  ),
  'Typography': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
  ),
  'Photography': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
  ),
  'System Language': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  'Applications': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  'Moodboard': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
  ),
  'Delivery': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  ),
  'Welcome': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
  ),
  'Guide Structure': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
  ),
  'Additional Proposition 1': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  ),
  'Additional Proposition 2': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  ),
}

function getIcon(kicker: string) {
  return icons[kicker] ?? null
}

/* ─── Animation variants ─── */

const ease = [0.22, 1, 0.36, 1] as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
}

/* ─── Slide renderer ─── */

function Slide({
  slide,
  index,
  total,
  chapterList,
  onJump,
}: {
  slide: BrandGuideSlide
  index: number
  total: number
  chapterList: ChapterInfo[]
  onJump: (i: number) => void
}) {
  const L = slide.layout
  const icon = getIcon(slide.kicker)

  return (
    <article className="slide-card" data-layout={L}>
      {/* ── header bar ── */}
      {L !== 'cover' && L !== 'chapter' && L !== 'closing' && (
        <header className="s-header">
          <span className="s-kicker">
            {icon && <span className="s-kicker-icon">{icon}</span>}
            {slide.kicker}
          </span>
          <span className="s-page">{pad(index)} / {total}</span>
        </header>
      )}

      {/* ── COVER ── */}
      {L === 'cover' && (
        <motion.div className="layout-cover" variants={stagger} initial="hidden" animate="show">
          {slide.image && (
            <motion.img variants={scaleIn} src={slide.image} alt={slide.imageAlt ?? ''} className="cover-logo" />
          )}
          <motion.p variants={fadeUp} className="cover-kicker">{slide.kicker}</motion.p>
          <motion.h1 variants={fadeUp} className="cover-title">{slide.title}</motion.h1>
          {slide.subtitle && <motion.p variants={fadeUp} className="cover-sub">{slide.subtitle}</motion.p>}
          {slide.body && <motion.p variants={fadeUp} className="cover-meta">{slide.body}</motion.p>}
          <motion.div variants={fadeUp} className="cover-accent" />
        </motion.div>
      )}

      {/* ── TOC ── */}
      {L === 'toc' && (
        <motion.div className="layout-toc" variants={stagger} initial="hidden" animate="show">
          <motion.div className="toc-left" variants={fadeLeft}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </motion.div>
          <div className="toc-grid">
            {chapterList.map((ch, i) => (
              <motion.button
                key={ch.chapter}
                type="button"
                className="toc-item"
                onClick={() => onJump(ch.index)}
                variants={fadeUp}
                custom={i}
              >
                <span className="toc-num">{pad(ch.index)}</span>
                <strong>{ch.chapter}</strong>
                <small>{ch.count} slides</small>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── CHAPTER DIVIDER ── */}
      {L === 'chapter' && (
        <motion.div className="layout-chapter" variants={stagger} initial="hidden" animate="show">
          <motion.span className="ch-num" variants={fadeLeft}>{slide.chapterNum}</motion.span>
          <motion.div className="ch-text" variants={fadeRight}>
            <p className="ch-kicker">{slide.kicker}</p>
            <h2 className="ch-title">{slide.title}</h2>
            {slide.subtitle && <p className="ch-sub">{slide.subtitle}</p>}
          </motion.div>
          <motion.div className="ch-accent-bar" variants={fadeUp} />
        </motion.div>
      )}

      {/* ── TEXT ── */}
      {L === 'text' && (
        <motion.div className="layout-text" variants={stagger} initial="hidden" animate="show">
          <motion.h2 variants={fadeUp} className="s-title">{slide.title}</motion.h2>
          {slide.body && <motion.p variants={fadeUp} className="s-body">{slide.body}</motion.p>}
          {slide.bullets && (
            <motion.ul className="s-bullets" variants={stagger}>
              {slide.bullets.map((b) => <motion.li key={b} variants={fadeUp}>{b}</motion.li>)}
            </motion.ul>
          )}
          {slide.callout && <motion.blockquote variants={fadeUp} className="s-callout">{slide.callout}</motion.blockquote>}
        </motion.div>
      )}

      {/* ── SPLIT ── */}
      {L === 'split' && (
        <motion.div className="layout-split" variants={stagger} initial="hidden" animate="show">
          <motion.div className="split-copy" variants={fadeLeft}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            {slide.bullets && (
              <ul className="s-bullets">
                {slide.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </motion.div>
          {slide.image && (
            <motion.figure className="split-fig" variants={fadeRight}>
              <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
            </motion.figure>
          )}
        </motion.div>
      )}

      {/* ── IMAGE ── */}
      {L === 'image' && (
        <motion.div className="layout-image" variants={stagger} initial="hidden" animate="show">
          <motion.div className="img-top" variants={fadeUp}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </motion.div>
          {slide.image && (
            <motion.figure className="img-fig" variants={scaleIn}>
              <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
            </motion.figure>
          )}
        </motion.div>
      )}

      {/* ── PALETTE ── */}
      {L === 'palette' && (
        <motion.div className="layout-palette" variants={stagger} initial="hidden" animate="show">
          <motion.div className="pal-copy" variants={fadeUp}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </motion.div>
          {slide.swatches && (
            <motion.div className="swatch-row" variants={stagger}>
              {slide.swatches.map((sw) => (
                <motion.div key={sw.hex} className="swatch" variants={fadeUp}>
                  <div className="swatch-fill" style={{ backgroundColor: sw.hex }} />
                  <p className="swatch-name">{sw.label}</p>
                  <p className="swatch-hex">{sw.hex}</p>
                  <p className="swatch-role">{sw.role}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* ── TYPOGRAPHY ── */}
      {L === 'typography' && slide.specimen && (
        <motion.div className="layout-type" variants={stagger} initial="hidden" animate="show">
          <motion.div className="type-left" variants={fadeLeft}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            <div className="type-weights">
              {slide.specimen.weights.map((w) => (
                <span key={w} className="type-weight-tag">{w}</span>
              ))}
            </div>
          </motion.div>
          <motion.div className="type-right" variants={scaleIn}>
            <p
              className="type-big"
              style={{ fontFamily: slide.specimen.family }}
            >
              Aa
            </p>
            <pre
              className="type-sample"
              style={{ fontFamily: slide.specimen.family }}
            >
              {slide.specimen.sample}
            </pre>
          </motion.div>
        </motion.div>
      )}

      {/* ── GALLERY ── */}
      {L === 'gallery' && (
        <motion.div className="layout-gallery" variants={stagger} initial="hidden" animate="show">
          <motion.div className="gal-top" variants={fadeUp}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </motion.div>
          {slide.images && (
            <motion.div className="gal-grid" variants={stagger}>
              {slide.images.map((src, i) => (
                <motion.figure key={i} className="gal-item" variants={scaleIn}>
                  <img src={src} alt={`Moodboard ${i + 1}`} loading="lazy" />
                </motion.figure>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* ── SYMBOL ── */}
      {L === 'symbol' && (
        <motion.div className="layout-symbol" variants={stagger} initial="hidden" animate="show">
          <motion.figure className="sym-frame" variants={scaleIn}>
            {slide.image && <img src={slide.image} alt={slide.imageAlt ?? ''} />}
          </motion.figure>
          <motion.div className="sym-copy" variants={fadeRight}>
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            {slide.meanings && (
              <div className="sym-meanings">
                {slide.meanings.map((m: SymbolMeaning, i: number) => (
                  <motion.div
                    key={m.label}
                    className="sym-row"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease }}
                  >
                    <span className="sym-dot" style={{ background: m.color }} />
                    <div>
                      <p className="sym-label">{m.label}</p>
                      <p className="sym-desc">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* ── CLOSING ── */}
      {L === 'closing' && (
        <motion.div className="layout-closing" variants={stagger} initial="hidden" animate="show">
          {slide.image && (
            <motion.img variants={scaleIn} src={slide.image} alt="Wejden Spire" className="closing-icon" />
          )}
          <motion.h2 variants={fadeUp} className="closing-title">{slide.title}</motion.h2>
          {slide.body && <motion.p variants={fadeUp} className="closing-body">{slide.body}</motion.p>}
          <motion.p variants={fadeUp} className="closing-brand">Wejden Spire — 2026</motion.p>
        </motion.div>
      )}
    </article>
  )
}

/* ─── Deck shell ─── */

export default function BrandGuideDeck() {
  const [cur, setCur] = useState(0)
  const [touch, setTouch] = useState<{ x: number; y: number } | null>(null)
  const [dir, setDir] = useState(1)
  const total = brandGuideSlides.length
  const chapterList = useMemo(() => chapters(brandGuideSlides), [])

  const go = useCallback((i: number) => {
    const next = clamp(i, 0, total - 1)
    setDir(next > cur ? 1 : -1)
    setCur(next)
  }, [total, cur])

  const prev = useCallback(() => {
    setDir(-1)
    setCur((c) => clamp(c - 1, 0, total - 1))
  }, [total])

  const next = useCallback(() => {
    setDir(1)
    setCur((c) => clamp(c + 1, 0, total - 1))
  }, [total])

  // Hash sync
  useEffect(() => {
    const h = location.hash.replace('#', '')
    if (h) {
      const idx = brandGuideSlides.findIndex((s) => s.id === h)
      if (idx >= 0) setCur(idx)
    }
  }, [])

  useEffect(() => {
    history.replaceState(null, '', `#${brandGuideSlides[cur].id}`)
  }, [cur])

  // Keyboard
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next() }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
      if (e.key === 'Home') { e.preventDefault(); go(0) }
      if (e.key === 'End') { e.preventDefault(); go(total - 1) }
      if (e.key.toLowerCase() === 'p') { e.preventDefault(); window.print() }
    }
    addEventListener('keydown', fn)
    return () => removeEventListener('keydown', fn)
  }, [next, prev, go, total])

  // Touch swipe
  useEffect(() => {
    const start = (e: TouchEvent) => setTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    const end = (e: TouchEvent) => {
      if (!touch) return
      const dx = e.changedTouches[0].clientX - touch.x
      const dy = e.changedTouches[0].clientY - touch.y
      setTouch(null)
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      dx < 0 ? next() : prev()
    }
    addEventListener('touchstart', start, { passive: true })
    addEventListener('touchend', end, { passive: true })
    return () => { removeEventListener('touchstart', start); removeEventListener('touchend', end) }
  }, [touch, next, prev])

  const slide = brandGuideSlides[cur]
  const curChapter = chapterList.find(
    (ch) => cur >= ch.index && cur < ch.index + ch.count
  )

  return (
    <div className="deck">
      {/* Top bar */}
      <header className="deck-bar">
        <button type="button" className="deck-brand" onClick={() => go(0)}>
          <img src="/assets/wejden-spire-icon.svg" alt="" />
          <span>Wejden Spire</span>
        </button>

        <nav className="deck-chapters">
          {chapterList.map((ch) => (
            <button
              key={ch.chapter}
              type="button"
              className={`deck-ch ${curChapter?.chapter === ch.chapter ? 'active' : ''}`}
              onClick={() => go(ch.index)}
            >
              {ch.chapter}
            </button>
          ))}
        </nav>

        <div className="deck-counter">
          <span>{pad(cur)}</span>
          <div className="deck-progress">
            <div style={{ width: `${((cur + 1) / total) * 100}%` }} />
          </div>
          <span>{total}</span>
        </div>
      </header>

      {/* Slide area */}
      <main className="deck-stage">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={slide.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.35, ease } }}
            exit={{ opacity: 0, x: dir * -30, transition: { duration: 0.2, ease: 'easeIn' } }}
          >
            <Slide
              slide={slide}
              index={cur}
              total={total}
              chapterList={chapterList}
              onJump={go}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="deck-nav">
        <button type="button" onClick={prev} disabled={cur === 0} className="nav-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className="nav-dots">
          {chapterList.map((ch) => (
            <button
              key={ch.chapter}
              type="button"
              className={`nav-dot ${curChapter?.chapter === ch.chapter ? 'active' : ''}`}
              onClick={() => go(ch.index)}
              title={ch.chapter}
            />
          ))}
        </div>

        <button type="button" onClick={next} disabled={cur === total - 1} className="nav-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <button type="button" onClick={() => window.print()} className="nav-btn nav-print">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          <span>PDF</span>
        </button>
      </footer>

      {/* Print version */}
      <section className="print-slides">
        {brandGuideSlides.map((s, i) => (
          <Slide
            key={`p-${s.id}`}
            slide={s}
            index={i}
            total={total}
            chapterList={chapterList}
            onJump={go}
          />
        ))}
      </section>
    </div>
  )
}
