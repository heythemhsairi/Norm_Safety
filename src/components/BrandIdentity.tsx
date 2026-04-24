import { useEffect, useRef, useState } from 'react'

/* ──────────────────────────────────────────────────────────────
   NormSafety — Brand Identity System
   Enterprise AI SaaS • Workplace Safety • Prevention Intelligence
   Tagline: Prévenir. Piloter. Performer.
   ────────────────────────────────────────────────────────────── */

const LOGO = {
  horizontal: '/assets/norm/normsafety-logo-horizontal.svg',
  vertical:   '/assets/norm/normsafety-logo-vertical.svg',
  icon:       '/assets/norm/normsafety-icon.svg',
}

function Lightbox() {
  const [src, setSrc] = useState<string | null>(null)
  useEffect(() => {
    const open = (e: Event) => setSrc((e as CustomEvent).detail)
    window.addEventListener('lightbox', open)
    return () => window.removeEventListener('lightbox', open)
  }, [])
  if (!src) return null
  return (
    <div className="lightbox-overlay" onClick={() => setSrc(null)}>
      <button className="lightbox-close" onClick={() => setSrc(null)}>&times;</button>
      <img src={src} alt="" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function MockupSingle({ src, label }: { src: string; label: string }) {
  return (
    <div className="mockup-card">
      <div className="mockup-img-wrap" onClick={() => window.dispatchEvent(new CustomEvent('lightbox', { detail: src }))}>
        <img src={src} alt={label} className="mockup-img" />
      </div>
      <div className="mockup-label">{label}</div>
    </div>
  )
}

function MockupHover({ srcA, srcB, label }: { srcA: string; srcB: string; label: string }) {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="mockup-card mockup-card--interactive">
      <div
        className="mockup-img-wrap"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => window.dispatchEvent(new CustomEvent('lightbox', { detail: hovering ? srcB : srcA }))}
      >
        <img src={srcA} alt={label} className="mockup-img mockup-img--default" />
        <img src={srcB} alt={label} className="mockup-img mockup-img--hover" />
      </div>
      <div className="mockup-label">{label}</div>
    </div>
  )
}

function AnimatedNumber({ value, decimals = 0, pad = 0, suffix = '', duration = 1600 }: {
  value: number; decimals?: number; pad?: number; suffix?: string; duration?: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(value * eased)
            if (t < 1) requestAnimationFrame(step)
            else setDisplay(value)
          }
          requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, duration])
  let text = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString()
  if (pad) {
    const [i, d] = text.split('.')
    text = i.padStart(pad, '0') + (d ? '.' + d : '')
  }
  return <span ref={ref}>{text}{suffix}</span>
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

const NAV_IDS = ['essence', 'positioning', 'logo', 'colors', 'typography', 'applications']

export default function BrandIdentity() {
  const navRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState<string>('essence')
  const [showTop, setShowTop] = useState(false)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex).then(() => {
      setCopiedHex(hex)
      setTimeout(() => setCopiedHex((c) => (c === hex ? null : c)), 1400)
    }).catch(() => {})
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.01, rootMargin: '50px 0px -10px 0px' }
    )
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')
    els.forEach((el) => obs.observe(el))
    const fallback = setTimeout(() => els.forEach((el) => el.classList.add('visible')), 3000)

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id) }),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })

    const handleScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const pct = (scrolled / Math.max(doc.scrollHeight - doc.clientHeight, 1)) * 100
      if (progressRef.current) progressRef.current.style.width = pct + '%'
      setShowTop(scrolled > 800)
      navRef.current?.classList.toggle('scrolled', scrolled > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      obs.disconnect(); spy.disconnect(); clearTimeout(fallback)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Lightbox />

      {/* Scroll progress bar */}
      <div className="scroll-progress"><div className="scroll-progress-bar" ref={progressRef} /></div>

      {/* ═══════════ NAV ═══════════ */}
      <nav className="bi-nav" ref={navRef}>
        <a href="#" className="bi-nav-logo">
          <img src={LOGO.vertical} alt="NormSafety" />
        </a>
        <ul className="bi-nav-links">
          {[
            ['essence', 'Essence'],
            ['positioning', 'Positioning'],
            ['logo', 'Logo'],
            ['colors', 'Colors'],
            ['typography', 'Typography'],
            ['applications', 'Applications'],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Back to top */}
      <button
        className={'back-to-top' + (showTop ? ' visible' : '')}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>

      {/* Copied toast */}
      <div className={'copy-toast' + (copiedHex ? ' visible' : '')}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        <span>Copied <strong>{copiedHex}</strong></span>
      </div>

      {/* ═══════════ HERO / COVER ═══════════ */}
      <section className="bi-hero bi-hero--gradient">
        <div className="hero-inner">
          <img src={LOGO.vertical} alt="NormSafety" className="hero-vertical-logo" />
          <h1 className="hero-title">
            <span className="accent">Prevention</span>
            <br />
            <span className="hero-title-nowrap">Intelligence System</span>
          </h1>
          <p className="hero-subtitle">
            The visual and verbal system of NormSafety — enterprise AI for workplace safety, compliance, and prevention.
          </p>
          <span className="hero-tag">
            <span className="dot" />
            Brand Identity Guidelines · 2026
          </span>
        </div>
        <div className="hero-scroll">
          Scroll
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ═══════════ BRAND STATS BAND ═══════════ */}
      <section className="brand-stats-band">
        <div className="bi-container">
          <div className="brand-stats-row stagger">
            <div className="brand-stat">
              <div className="brand-stat-value"><AnimatedNumber value={1} pad={2} /></div>
              <div className="brand-stat-label">Master Identity</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-value"><AnimatedNumber value={8} pad={2} duration={1400} /></div>
              <div className="brand-stat-label">Brand Colors</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-value"><AnimatedNumber value={2} pad={2} duration={1200} /></div>
              <div className="brand-stat-label">Typefaces</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-value">EN · AR</div>
              <div className="brand-stat-label">Bilingual System</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ESSENCE ═══════════ */}
      <section className="bi-section text-section" id="essence">
        <div className="bi-container">
          <div className="text-block reveal">
            <div className="section-label">Essence</div>
            <h2 className="section-title">Prevention, engineered as intelligence.</h2>
            <p>
              The connective intelligence layer between people, risk, and executive decision-making — delivered with enterprise-grade clarity and discipline.
            </p>
          </div>
          <div className="quote-block reveal">Prévenir. Piloter. Performer.</div>
        </div>
      </section>

      <div className="bi-container"><div className="bi-divider"></div></div>

      {/* ═══════════ POSITIONING ═══════════ */}
      <section className="bi-section text-section--alt" id="positioning">
        <div className="bi-container">
          <div className="bi-split">
            <div className="reveal-left">
              <div className="section-label">Vision</div>
              <h2 className="section-title">Safety that is predictive, not reactive.</h2>
            </div>
            <div className="reveal-right">
              <div className="section-label">Mission</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', color: 'var(--midnight)' }}>
                Centralize SST data. Anticipate risk. Automate compliance. Elevate performance.
              </h2>
            </div>
          </div>

          {/* Positioning benchmarks */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Market Context</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>Built for the enterprise HSE category.</h3>
          </div>
          <div className="comp-strip reveal">
            <div className="comp-strip-track">
              {['Cority','EcoOnline','VelocityEHS','Enablon','Quentic','Intelex','Cority','EcoOnline','VelocityEHS','Enablon','Quentic','Intelex'].map((b, i) => (
                <div className="comp-cell" key={i}>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AUDIENCE ═══════════ */}
      <section className="bi-section text-section" id="audience">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Audience</div>
            <h2 className="section-title">Built for decision-makers across the enterprise stack.</h2>
          </div>

          <div className="audience-grid stagger" style={{ marginTop: 64 }}>
            <div className="audience-card"><div className="audience-role">Executive</div><div className="audience-name">CEO & C-Suite</div></div>
            <div className="audience-card"><div className="audience-role">HSE / SST</div><div className="audience-name">Safety Directors</div></div>
            <div className="audience-card"><div className="audience-role">People</div><div className="audience-name">HR &amp; Culture</div></div>
            <div className="audience-card"><div className="audience-role">Compliance</div><div className="audience-name">Compliance &amp; Legal</div></div>
            <div className="audience-card"><div className="audience-role">ESG</div><div className="audience-name">ESG &amp; Sustainability</div></div>
            <div className="audience-card"><div className="audience-role">Quality</div><div className="audience-name">CAPA &amp; Quality</div></div>
          </div>

          <div className="reveal" style={{ marginTop: 96 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--midnight)', marginBottom: 20 }}>Core industries</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Construction', 'Industrial Groups', 'Healthcare', 'Pharma', 'Logistics', 'Energy', 'Government', 'Manufacturing'].map((s) => (
                <span key={s} style={{ background: 'var(--bg-alt)', color: 'var(--midnight)', padding: '10px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, border: '1px solid var(--border)' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* KPI dashboard preview */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Executive Signal</div>
          </div>
          <div className="kpi-grid stagger">
            <TiltCard className="kpi-card">
              <div className="kpi-label">Prevention Index</div>
              <div className="kpi-value"><AnimatedNumber value={94.2} decimals={1} /></div>
              <div className="kpi-delta kpi-delta--up">▲ +6.4 QoQ</div>
            </TiltCard>
            <TiltCard className="kpi-card">
              <div className="kpi-label">Open Incidents</div>
              <div className="kpi-value"><AnimatedNumber value={18} /></div>
              <div className="kpi-delta kpi-delta--down">▼ −32%</div>
            </TiltCard>
            <TiltCard className="kpi-card">
              <div className="kpi-label">CAPA Closure</div>
              <div className="kpi-value"><AnimatedNumber value={87} suffix="%" /></div>
              <div className="kpi-delta kpi-delta--up">▲ +12 pts</div>
            </TiltCard>
            <TiltCard className="kpi-card">
              <div className="kpi-label">Compliance Score</div>
              <div className="kpi-value"><AnimatedNumber value={99.1} decimals={1} suffix="%" /></div>
              <div className="kpi-delta kpi-delta--neutral">— ISO 45001</div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══════════ LOGO SYSTEM ═══════════ */}
      <section className="bi-section text-section--alt" id="logo">
        <div className="bi-container">

          <div className="reveal">
            <div className="section-label">Logo</div>
            <h2 className="section-title">The master mark.</h2>
          </div>

          {/* Primary Logo — Vertical Stacked */}
          <div className="reveal" style={{ marginTop: 64 }}>
            <div className="logo-card" style={{ aspectRatio: '16/10', padding: 72, background: 'linear-gradient(135deg, #0B1535, #14B8A6)', border: 'none' }}>
              <img src={LOGO.vertical} alt="NormSafety — Primary Vertical Lockup" style={{ maxHeight: 210, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="logo-card-label" style={{ marginTop: 16 }}>Primary Vertical Lockup — Signature Gradient · Logo in Fog White #F8FAFC</div>
          </div>

          {/* Symbol meaning */}
          <div className="symbol-architecture reveal" style={{ marginTop: 96 }}>
            <h3 className="symbol-architecture-title">The architecture of intelligence.</h3>
            <div className="split-visual split-visual--logo symbol-architecture-visual">
              <img src={LOGO.icon} alt="NormSafety Icon" />
            </div>
            <div className="symbol-meanings stagger">
              <div className="meaning-item">
                <div className="meaning-label"><span className="meaning-dot" style={{ background: '#0B1535' }}></span>The Core</div>
                <div className="meaning-desc">The N — intelligence engine where prevention, compliance, and performance converge.</div>
              </div>
              <div className="meaning-item">
                <div className="meaning-label"><span className="meaning-dot" style={{ background: '#14B8A6' }}></span>The Pillars</div>
                <div className="meaning-desc">Detect, analyze, act, optimize — the four anchors of the prevention cycle.</div>
              </div>
              <div className="meaning-item">
                <div className="meaning-label"><span className="meaning-dot" style={{ background: '#B8FF2C' }}></span>The Framework</div>
                <div className="meaning-desc">Governance, compliance boundaries, and enterprise discipline.</div>
              </div>
              <div className="meaning-item">
                <div className="meaning-label"><span className="meaning-dot" style={{ background: '#0D9488' }}></span>The Balance</div>
                <div className="meaning-desc">Symmetry and precision — the signature of trust and control.</div>
              </div>
            </div>
          </div>

          {/* Logo Variations */}
          <h3 className="reveal" style={{ fontSize: 22, fontWeight: 700, marginTop: 120, color: 'var(--midnight)' }}>Logo Variations</h3>
          <div className="logo-variations-grid stagger" style={{ marginTop: 32 }}>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="Vertical Stacked — Primary" style={{ maxHeight: 140, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Vertical Stacked · Primary</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/10', padding: 48 }}>
                <img src={LOGO.horizontal} alt="Horizontal" style={{ maxHeight: 64, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Horizontal · Secondary</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/10', padding: 48 }}>
                <img src={LOGO.icon} alt="Icon" style={{ maxHeight: 96, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Icon / Symbol</div>
            </div>
          </div>

          {/* Logo on Backgrounds */}
          <h3 className="reveal" style={{ fontSize: 22, fontWeight: 700, marginTop: 96, color: 'var(--midnight)' }}>Logo on Backgrounds</h3>
          <div className="logo-bg-grid stagger" style={{ marginTop: 32 }}>
            <div>
              <div className="logo-card" style={{ background: '#FFFFFF', aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On White" style={{ maxHeight: 124, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Fog White · #FFFFFF</div>
            </div>
            <div>
              <div className="logo-card" style={{ background: '#F8FAFC', aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Fog" style={{ maxHeight: 124, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Neutral Fog · #F8FAFC</div>
            </div>
            <div>
              <div className="logo-card" style={{ background: 'linear-gradient(135deg, #0B1535, #14B8A6)', border: 'none', aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Signature Gradient" style={{ maxHeight: 124, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Signature Gradient · Logo in Fog White #F8FAFC</div>
            </div>
            <div>
              <div className="logo-card logo-card--dark" style={{ aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Midnight" style={{ maxHeight: 124, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Core Midnight · #0B1535</div>
            </div>
          </div>

          {/* Clear space */}
          <h3 className="reveal" style={{ fontSize: 22, fontWeight: 700, marginTop: 96, color: 'var(--midnight)' }}>Clear Space &amp; Scaling</h3>
          <div style={{ display: 'flex', gap: 32, marginTop: 32, flexWrap: 'wrap' }} className="reveal">
            <div className="check check--ok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Respect clear space</div>
            <div className="check check--ok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Min digital: 24px</div>
            <div className="check check--ok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Min print: 10mm</div>
            <div className="check check--no"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Never stretch or rotate</div>
            <div className="check check--no"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Never recolor outside the palette</div>
          </div>
        </div>
      </section>

      {/* ═══════════ COLORS ═══════════ */}
      <section className="bi-section text-section" id="colors">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Color</div>
            <h2 className="section-title">A palette for trust and signal.</h2>
          </div>

          {/* Primary */}
          <div className="reveal" style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Primary</h3>
          </div>
          <div className="color-grid stagger">
            <button type="button" className="color-card" onClick={() => copyHex('#0B1535')}>
              <div className="color-swatch" style={{ background: '#0B1535' }}><span className="color-swatch-hex">#0B1535</span></div>
              <div className="color-info">
                <div className="color-name">Core Midnight</div>
                <div className="color-hex">#0B1535</div>
                <div className="color-role">Executive trust, governance, enterprise authority. Our primary surface.</div>
              </div>
            </button>
            <button type="button" className="color-card" onClick={() => copyHex('#14B8A6')}>
              <div className="color-swatch" style={{ background: '#14B8A6' }}><span className="color-swatch-hex">#14B8A6</span></div>
              <div className="color-info">
                <div className="color-name">Signal Teal</div>
                <div className="color-hex">#14B8A6</div>
                <div className="color-role">AI intelligence, live signal, action. The connective tissue of the brand.</div>
              </div>
            </button>
            <button type="button" className="color-card" onClick={() => copyHex('#B8FF2C')}>
              <div className="color-swatch" style={{ background: '#B8FF2C' }}><span className="color-swatch-hex color-swatch-hex--dark">#B8FF2C</span></div>
              <div className="color-info">
                <div className="color-name">AI Lime</div>
                <div className="color-hex">#B8FF2C</div>
                <div className="color-role">Premium signal accent. Used sparingly — only for moments of AI insight.</div>
              </div>
            </button>
          </div>

          {/* Secondary — UI & State */}
          <div className="reveal" style={{ marginTop: 72 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Secondary — UI &amp; State</h3>
          </div>
          <div className="color-grid-sm stagger" style={{ marginTop: 20 }}>
            {[
              { hex: '#1D4ED8', name: 'Compliance Blue' },
              { hex: '#64748B', name: 'Slate Steel' },
              { hex: '#34D399', name: 'Health Mint' },
              { hex: '#F59E0B', name: 'Risk Amber' },
              { hex: '#EF4444', name: 'Critical Coral' },
            ].map((c) => (
              <button key={c.hex} type="button" className="color-chip" onClick={() => copyHex(c.hex)}>
                <div className="color-chip-sw" style={{ background: c.hex }}></div>
                <div className="color-chip-info">
                  <div className="color-chip-name">{c.name}</div>
                  <div className="color-chip-hex">{c.hex}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Neutral */}
          <div className="reveal" style={{ marginTop: 72 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Neutral</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 20 }} className="stagger">
            <button type="button" className="color-chip" onClick={() => copyHex('#F8FAFC')}>
              <div className="color-chip-sw" style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border)' }}></div>
              <div className="color-chip-info"><div className="color-chip-name">Fog White</div><div className="color-chip-hex">#F8FAFC</div></div>
            </button>
            <button type="button" className="color-chip" onClick={() => copyHex('#111827')}>
              <div className="color-chip-sw" style={{ background: '#111827' }}></div>
              <div className="color-chip-info"><div className="color-chip-name">Deep Text</div><div className="color-chip-hex">#111827</div></div>
            </button>
          </div>

          {/* Signature gradient */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Signature Gradient</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>Midnight to Signal.</h3>
          </div>
          <div className="reveal" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <div style={{ height: 140, borderRadius: 16, background: 'linear-gradient(135deg, #0B1535, #14B8A6)' }}></div>
            <div style={{ height: 140, borderRadius: 16, background: 'linear-gradient(135deg, #14B8A6, #B8FF2C)' }}></div>
            <div style={{ height: 140, borderRadius: 16, background: 'linear-gradient(135deg, #34D399, #F59E0B 50%, #EF4444)' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 10 }}>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Signature</div>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>AI Signal</div>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>Risk Heatmap</div>
          </div>
        </div>
      </section>

      {/* ═══════════ TYPOGRAPHY ═══════════ */}
      <section className="bi-section text-section--alt" id="typography">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Typography</div>
            <h2 className="section-title">Bilingual by design.</h2>
          </div>

          {/* Sora specimen */}
          <div className="type-specimen reveal">
            <div className="type-name">Sora — Primary Latin Typeface</div>
            <div className="type-alphabet">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
            <div style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7 }}>Prévenir. Piloter. Performer. 0123456789</div>
            <div className="bi-type-weights">
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 400 }}>NormSafety</div><div className="type-weight-label">Regular 400</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 500 }}>NormSafety</div><div className="type-weight-label">Medium 500</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 600 }}>NormSafety</div><div className="type-weight-label">SemiBold 600</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 700 }}>NormSafety</div><div className="type-weight-label">Bold 700</div></div>
            </div>
          </div>

          {/* IBM Plex Sans Arabic specimen */}
          <div className="type-specimen reveal" style={{ marginTop: 32 }}>
            <div className="type-name">IBM Plex Sans Arabic — Primary Arabic Typeface</div>
            <div className="type-alphabet" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", direction: 'rtl' as const }}>
              أ ب ت ث ج ح خ د ذ ر ز س س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
            </div>
            <div style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, fontFamily: "'IBM Plex Sans Arabic', sans-serif", direction: 'rtl' as const }}>
              الوقاية. القيادة. الأداء. ٠١٢٣٤٥٦٧٨٩
            </div>
            <div className="bi-type-weights">
              <div className="type-weight"><div className="type-weight-sample" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontWeight: 400 }}>نورم سيفتي</div><div className="type-weight-label">Regular 400</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontWeight: 500 }}>نورم سيفتي</div><div className="type-weight-label">Medium 500</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontWeight: 600 }}>نورم سيفتي</div><div className="type-weight-label">SemiBold 600</div></div>
            </div>
          </div>

          {/* Type scale */}
          <div className="type-scale reveal" style={{ marginTop: 64 }}>
            <div className="type-scale-row">
              <div className="type-scale-label">Display</div>
              <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.02, color: 'var(--midnight)' }}>Prévention intelligente</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Heading 1</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.1, color: 'var(--midnight)' }}>Executive dashboards</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Heading 2</div>
              <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.25, color: 'var(--midnight)' }}>Predictive compliance workflows</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Body</div>
              <div style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.65 }}>AI-powered prevention intelligence for the modern enterprise.</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Mono / Data</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: 'var(--teal)', letterSpacing: '.04em' }}>PREVENTION_INDEX: 94.2 ▲</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Caption</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-light)', letterSpacing: '.14em', textTransform: 'uppercase' }}>NormSafety · Brand Guidelines · 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VISUAL LANGUAGE + ICONOGRAPHY ═══════════ */}
      <section className="bi-section text-section">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Visual Language</div>
            <h2 className="section-title">Modular. Structural. Signal-driven.</h2>
          </div>
          <div className="feature-grid stagger">
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>
              </div>
              <div className="feature-title">Modular Dashboards</div>
              <div className="feature-desc">Grid-native cards. Composable KPIs.</div>
            </TiltCard>
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-7" /></svg>
              </div>
              <div className="feature-title">Predictive Data Viz</div>
              <div className="feature-desc">Risk heatmaps and signal pulses.</div>
            </TiltCard>
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--midnight">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <div className="feature-title">Governance Surfaces</div>
              <div className="feature-desc">Dark-mode-first executive views.</div>
            </TiltCard>
          </div>

          {/* Iconography */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Iconography</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>1.5px stroke. 24px grid.</h3>
          </div>
          <div className="icon-grid stagger" style={{ marginTop: 40 }}>
            <div className="icon-card">
              <div className="icon-box"><span className="icon-brand-mask" role="img" aria-label="Brand" /></div>
              <div className="icon-card-label">Brand Mark</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7z" /></svg></div>
              <div className="icon-card-label">Prevention</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div className="icon-card-label">Site Risk</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg></div>
              <div className="icon-card-label">Compliance</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg></div>
              <div className="icon-card-label">Dashboard</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
              <div className="icon-card-label">Analytics</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></div>
              <div className="icon-card-label">Alerts</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div className="icon-card-label">Audit</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
              <div className="icon-card-label">Real-Time</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg></div>
              <div className="icon-card-label">AI Signal</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg></div>
              <div className="icon-card-label">Workforce</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg></div>
              <div className="icon-card-label">CAPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ UI PRINCIPLES ═══════════ */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Principles</div>
            <h2 className="section-title">Clarity over cleverness.</h2>
          </div>
          <div className="bi-principles stagger">
            <div className="bi-principle"><div className="principle-num">01</div><div><div className="principle-title">Executive Clarity</div><div className="principle-desc">Every pixel earns its place.</div></div></div>
            <div className="bi-principle"><div className="principle-num">02</div><div><div className="principle-title">8-Point Grid</div><div className="principle-desc">All spacing on an 8px rhythm.</div></div></div>
            <div className="bi-principle"><div className="principle-num">03</div><div><div className="principle-title">Signal Discipline</div><div className="principle-desc">AI Lime reserved. Teal active. Midnight governs.</div></div></div>
            <div className="bi-principle"><div className="principle-num">04</div><div><div className="principle-title">WCAG 2.1 AA</div><div className="principle-desc">Accessible contrast. 44px targets. 2px focus rings.</div></div></div>
            <div className="bi-principle"><div className="principle-num">05</div><div><div className="principle-title">Bilingual Parity</div><div className="principle-desc">English and Arabic as first-class citizens.</div></div></div>
            <div className="bi-principle"><div className="principle-num">06</div><div><div className="principle-title">Dark-Mode First</div><div className="principle-desc">Executive views live in dark surfaces.</div></div></div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND VOICE ═══════════ */}
      <section className="bi-section text-section" id="voice">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Voice</div>
            <h2 className="section-title">Executive. Visionary. Strategic.</h2>
          </div>
          <div className="voice-grid stagger">
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--teal)' }}>Executive</div>
              <div className="voice-do">{'\u2713'} "CAPA closure improved 32% after AI triage deployment."</div>
              <div className="voice-dont">{'\u2717'} "Our amazing new tool supercharges safety!"</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--compliance)' }}>Visionary</div>
              <div className="voice-do">{'\u2713'} "The next decade of safety is predictive, not reactive."</div>
              <div className="voice-dont">{'\u2717'} "Revolutionary disruption of the safety industry."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--midnight)' }}>Strategic</div>
              <div className="voice-do">{'\u2713'} "Centralize SST data. Anticipate risk. Elevate performance."</div>
              <div className="voice-dont">{'\u2717'} "Our platform has dozens of advanced features."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--teal-dark)' }}>Trustworthy</div>
              <div className="voice-do">{'\u2713'} "ISO 45001 aligned. SOC 2 Type II. Enterprise-grade governance."</div>
              <div className="voice-dont">{'\u2717'} "Trust us — it's the best tool out there."</div>
            </div>
          </div>

          {/* Messaging bars */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Key Messages</div>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gap: 14 }} className="stagger">
            <div className="msg-bar" style={{ background: 'var(--teal-light)' }}>
              <span className="msg-label" style={{ color: 'var(--teal-dark)' }}>Primary</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--midnight)' }}>"Prévenir. Piloter. Performer."</span>
            </div>
            <div className="msg-bar" style={{ background: 'var(--compliance-light)' }}>
              <span className="msg-label" style={{ color: 'var(--compliance)' }}>Executive</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--midnight)' }}>"Centralize SST data. Anticipate risk. Elevate operational performance."</span>
            </div>
            <div className="msg-bar" style={{ background: '#E9ECF7' }}>
              <span className="msg-label" style={{ color: 'var(--midnight)' }}>HSE / SST</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--midnight)' }}>"AI-powered prevention intelligence — built for CAPA, audits, and ISO 45001."</span>
            </div>
            <div className="msg-bar" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <span className="msg-label" style={{ color: 'var(--text-muted)' }}>ESG / Board</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--midnight)' }}>"The prevention intelligence layer for the modern enterprise."</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ APPLICATIONS / MOCKUPS ═══════════ */}
      <section className="bi-section text-section--alt" id="applications">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Applications</div>
            <h2 className="section-title">The identity in the real world.</h2>
          </div>
          <div className="mockup-gallery stagger">
            <MockupHover
              srcA="/assets/mockups/normsafety-keychain-a.png"
              srcB="/assets/mockups/normsafety-keychain-b.png"
              label="Strap Keychain · Hover"
            />
            <MockupSingle
              src="/assets/mockups/normsafety-stamp.png"
              label="Wooden Stamp"
            />
            <MockupHover
              srcA="/assets/mockups/normsafety-flyer-a.png"
              srcB="/assets/mockups/normsafety-flyer-b.png"
              label="A4 Flyer · Hover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ NEXT STEPS ═══════════ */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Rollout</div>
            <h2 className="section-title">Enterprise rollout.</h2>
          </div>

          <div className="feature-grid stagger" style={{ marginTop: 64 }}>
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <div className="feature-title">01 · Masterbrand</div>
              <div className="feature-desc">Logo system, clear-space rules, master files.</div>
            </TiltCard>
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg>
              </div>
              <div className="feature-title">02 · Product UI</div>
              <div className="feature-desc">Tokens, components, dashboards.</div>
            </TiltCard>
            <TiltCard className="feature-card">
              <div className="feature-icon feature-icon--midnight">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v14H2z" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <div className="feature-title">03 · Go-to-Market</div>
              <div className="feature-desc">Decks, collateral, tender templates.</div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══════════ CLOSING ═══════════ */}
      <section className="bi-closing">
        <div className="bi-container">
          <div className="closing-logo reveal">
            <img src={LOGO.vertical} alt="NormSafety" />
          </div>
          <h2 className="bi-closing-title reveal">
            <span className="accent">Prévenir. Piloter.</span>
            <br />
            Performer.
          </h2>
          <p className="closing-sub reveal">NormSafety · Prevention Intelligence · 2026</p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bi-footer">
        <div className="bi-container">
          <div className="footer-credit">
            <div className="footer-brand">
              <span className="footer-made-by">Crafted by</span>
              <img src="/assets/areen-creative.svg" alt="Areen Creative" className="footer-areen-logo" />
            </div>
            <div className="footer-contact-title">Contact</div>
            <div className="footer-contact">
              <span>+216 52 148 184</span>
              <span>areencubs.com</span>
              <span>areencubs@gmail.com</span>
            </div>
          </div>
          <div className="footer-bottom">NormSafety Brand Identity Guidelines · 2026 · Confidential</div>
        </div>
      </footer>
    </>
  )
}
