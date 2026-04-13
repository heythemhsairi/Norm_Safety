import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

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

function MockupPlaceholder({ label }: { label: string }) {
  return (
    <div className="mockup-card">
      <div className="mockup-img-wrap" onClick={() => window.dispatchEvent(new CustomEvent('lightbox', { detail: LOGO.horizontal }))}>
        <div className="mockup-placeholder">
          <img src={LOGO.icon} alt={label} />
        </div>
      </div>
      <div className="mockup-label">{label}</div>
    </div>
  )
}

async function exportPDF() {
  const root = document.getElementById('root')
  if (!root) return
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach((el) => el.classList.add('visible'))

  const W = 1920
  const H = 1080
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] })
  const sections = root.querySelectorAll<HTMLElement>('section, footer')
  let first = true
  for (const section of sections) {
    if (!first) pdf.addPage([W, H], 'landscape')
    first = false
    const canvas = await html2canvas(section, { width: section.scrollWidth, scale: 2, useCORS: true, backgroundColor: null, logging: false })
    const imgData = canvas.toDataURL('image/jpeg', 0.92)
    const ratio = canvas.width / canvas.height
    let pw = W, ph = W / ratio
    if (ph > H) { ph = H; pw = H * ratio }
    pdf.addImage(imgData, 'JPEG', (W - pw) / 2, (H - ph) / 2, pw, ph)
  }
  pdf.save('NormSafety-Brand-Identity.pdf')
}

export default function BrandIdentity() {
  const navRef = useRef<HTMLElement>(null)
  const [exporting, setExporting] = useState(false)

  const handleExport = async () => {
    setExporting(true)
    try { await exportPDF() } finally { setExporting(false) }
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.01, rootMargin: '50px 0px -10px 0px' }
    )
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')
    els.forEach((el) => obs.observe(el))
    const fallback = setTimeout(() => els.forEach((el) => el.classList.add('visible')), 3000)
    const handleScroll = () => navRef.current?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { obs.disconnect(); clearTimeout(fallback); window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <>
      <Lightbox />

      {/* ═══════════ NAV ═══════════ */}
      <nav className="bi-nav" ref={navRef}>
        <a href="#" className="bi-nav-logo">
          <img src={LOGO.vertical} alt="NormSafety" />
        </a>
        <ul className="bi-nav-links">
          <li><a href="#essence">Essence</a></li>
          <li><a href="#positioning">Positioning</a></li>
          <li><a href="#logo">Logo</a></li>
          <li><a href="#colors">Colors</a></li>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#applications">Applications</a></li>
        </ul>
        <button className="pdf-download-btn" onClick={handleExport} disabled={exporting} title="Download PDF">
          {exporting ? <span className="pdf-spinner" /> : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )}
        </button>
      </nav>

      {/* ═══════════ HERO / COVER ═══════════ */}
      <section className="bi-hero">
        <div className="hero-inner">
          <img src={LOGO.vertical} alt="NormSafety" className="hero-vertical-logo" />
          <h1 className="hero-title">
            <span className="accent">Prevention</span>
            <br />
            Intelligence System
          </h1>
          <p className="hero-subtitle">
            The visual and verbal operating system behind NormSafety — the enterprise AI platform transforming workplace safety, compliance, and prevention into measurable operational performance.
          </p>
          <span className="hero-tag">
            <span className="dot" />
            Masterbrand System · 2026
          </span>
        </div>
        <div className="hero-scroll">
          Scroll
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ═══════════ ESSENCE ═══════════ */}
      <section className="bi-section text-section" id="essence">
        <div className="bi-container">
          <div className="text-block reveal">
            <div className="section-label">Brand Essence</div>
            <h2 className="section-title">Prevention, engineered as intelligence.</h2>
            <p>
              NormSafety is an AI-powered enterprise platform that transforms workplace safety, compliance, and prevention into measurable operational performance. We build the connective intelligence layer between people, risk, and executive decision-making.
            </p>
            <p>
              The brand stands for intelligent prevention, executive trust, predictive systems, and safer organizational performance — delivered with the clarity and discipline expected of a global enterprise SaaS company.
            </p>
          </div>
          <div className="quote-block reveal">Prévenir. Piloter. Performer.</div>
          <p className="reveal" style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 16, fontWeight: 500, letterSpacing: '.04em' }}>
            AI-Powered Prevention Intelligence
          </p>
        </div>
      </section>

      <div className="bi-container"><div className="bi-divider"></div></div>

      {/* ═══════════ POSITIONING ═══════════ */}
      <section className="bi-section text-section--alt" id="positioning">
        <div className="bi-container">
          <div className="bi-split">
            <div className="reveal-left">
              <div className="section-label">Vision</div>
              <h2 className="section-title">A world where safety is predictive, not reactive.</h2>
              <p style={{ fontSize: 'clamp(16px, 1.6vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 24 }}>
                We envision every enterprise operating from a unified prevention intelligence — where HSE, compliance, and operational performance converge into one executive decision surface.
              </p>
            </div>
            <div className="reveal-right">
              <div className="section-label">Mission</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', color: 'var(--midnight)' }}>
                Centralize SST data. Anticipate risk. Automate compliance. Elevate performance.
              </h2>
              <p style={{ fontSize: 'clamp(16px, 1.6vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 24 }}>
                NormSafety helps organizations centralize SST data, anticipate risks, automate compliance workflows, and elevate prevention culture through AI-powered analytics, predictive alerts, and executive dashboards.
              </p>
            </div>
          </div>

          {/* Positioning benchmarks */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Market Context</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>Built for the enterprise HSE category.</h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 12, maxWidth: 640 }}>
              NormSafety operates alongside — and ahead of — the most trusted enterprise HSE and compliance platforms worldwide. Our benchmark is the global leaders. Our advantage is AI-native prevention intelligence.
            </p>
          </div>
          <div className="comp-strip stagger">
            <div className="comp-cell">Cority</div>
            <div className="comp-cell">EcoOnline</div>
            <div className="comp-cell">VelocityEHS</div>
            <div className="comp-cell">Enablon</div>
            <div className="comp-cell">Quentic</div>
            <div className="comp-cell">Intelex</div>
          </div>
        </div>
      </section>

      {/* ═══════════ AUDIENCE ═══════════ */}
      <section className="bi-section text-section" id="audience">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Who We Serve</div>
            <h2 className="section-title">Built for decision-makers across the enterprise stack.</h2>
            <p className="section-subtitle">
              NormSafety speaks the language of executives, operators, and regulators — unifying them on a single prevention intelligence layer.
            </p>
          </div>

          <div className="audience-grid stagger" style={{ marginTop: 64 }}>
            <div className="audience-card"><div className="audience-role">Executive</div><div className="audience-name">CEO & C-Suite</div><div className="audience-desc">Operational performance, ESG signals, enterprise risk posture.</div></div>
            <div className="audience-card"><div className="audience-role">HSE / SST</div><div className="audience-name">HSE &amp; Safety Directors</div><div className="audience-desc">Incident intelligence, CAPA, audit-ready compliance.</div></div>
            <div className="audience-card"><div className="audience-role">People</div><div className="audience-name">HR &amp; Culture Leaders</div><div className="audience-desc">Prevention culture, training engagement, workforce safety KPIs.</div></div>
            <div className="audience-card"><div className="audience-role">Compliance</div><div className="audience-name">Compliance &amp; Legal</div><div className="audience-desc">ISO 45001, regulatory workflows, documented chain of action.</div></div>
            <div className="audience-card"><div className="audience-role">ESG</div><div className="audience-name">ESG &amp; Sustainability</div><div className="audience-desc">Non-financial reporting, social performance metrics.</div></div>
            <div className="audience-card"><div className="audience-role">Quality</div><div className="audience-name">CAPA &amp; Quality Managers</div><div className="audience-desc">Root-cause analysis, corrective actions, continuous improvement.</div></div>
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
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>The metrics that move boardrooms.</h3>
          </div>
          <div className="kpi-grid stagger">
            <div className="kpi-card">
              <div className="kpi-label">Prevention Index</div>
              <div className="kpi-value">94.2</div>
              <div className="kpi-delta kpi-delta--up">▲ +6.4 QoQ</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Open Incidents</div>
              <div className="kpi-value">18</div>
              <div className="kpi-delta kpi-delta--down">▼ −32%</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">CAPA Closure</div>
              <div className="kpi-value">87%</div>
              <div className="kpi-delta kpi-delta--up">▲ +12 pts</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Compliance Score</div>
              <div className="kpi-value">99.1%</div>
              <div className="kpi-delta kpi-delta--neutral">— ISO 45001</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ LOGO SYSTEM ═══════════ */}
      <section className="bi-section text-section--alt" id="logo">
        <div className="bi-container">

          <div className="reveal">
            <div className="section-label">Logo System</div>
            <h2 className="section-title">The master mark.</h2>
            <p className="section-subtitle">
              A precision symbol engineered to signal AI intelligence, enterprise governance, and protection — at any scale, across every surface.
            </p>
          </div>

          {/* Primary Logo — Vertical Stacked */}
          <div className="reveal" style={{ marginTop: 64 }}>
            <div className="logo-card" style={{ aspectRatio: '16/10', padding: 80 }}>
              <img src={LOGO.vertical} alt="NormSafety — Primary Vertical Lockup" style={{ maxHeight: 280, width: 'auto' }} />
            </div>
            <div className="logo-card-label" style={{ marginTop: 16 }}>Primary Vertical Lockup — Master</div>
          </div>

          {/* Symbol meaning */}
          <div className="bi-split" style={{ marginTop: 96 }}>
            <div className="split-visual split-visual--logo reveal-left">
              <img src={LOGO.icon} alt="NormSafety Icon" />
            </div>
            <div className="reveal-right">
              <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)', marginBottom: 24 }}>
                The symbol is the signal.
              </h3>
              <div className="symbol-meanings stagger">
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#0B1535' }}></span>The Shield</div>
                  <div className="meaning-desc">A precise, contained form — the language of protection, governance, and enterprise trust.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#14B8A6' }}></span>The Signal</div>
                  <div className="meaning-desc">Live AI pulse — prevention that listens continuously, never reactively.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#B8FF2C' }}></span>The Spark</div>
                  <div className="meaning-desc">Intelligence in motion — the premium accent reserved for moments of insight.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#1D4ED8' }}></span>The System</div>
                  <div className="meaning-desc">Modular, scalable, governed — a mark engineered for an enterprise OS.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Variations */}
          <h3 className="reveal" style={{ fontSize: 22, fontWeight: 700, marginTop: 96, color: 'var(--midnight)' }}>Logo Variations</h3>
          <div className="logo-variations-grid stagger" style={{ marginTop: 32 }}>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="Vertical Stacked — Primary" style={{ maxHeight: 180, width: 'auto' }} />
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
                <img src={LOGO.vertical} alt="On White" style={{ maxHeight: 160, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Fog White · #FFFFFF</div>
            </div>
            <div>
              <div className="logo-card" style={{ background: '#F8FAFC', aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Fog" style={{ maxHeight: 160, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Neutral Fog · #F8FAFC</div>
            </div>
            <div>
              <div className="logo-card" style={{ background: '#14B8A6', border: 'none', aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Teal" style={{ maxHeight: 160, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Signal Teal · #14B8A6</div>
            </div>
            <div>
              <div className="logo-card logo-card--dark" style={{ aspectRatio: '16/10', padding: 56 }}>
                <img src={LOGO.vertical} alt="On Midnight" style={{ maxHeight: 160, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Core Midnight · #0B1535</div>
            </div>
          </div>

          {/* Clear space */}
          <h3 className="reveal" style={{ fontSize: 22, fontWeight: 700, marginTop: 96, color: 'var(--midnight)' }}>Clear Space &amp; Scaling Rules</h3>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 12, maxWidth: 640, lineHeight: 1.7 }}>
            The mark must breathe. Reserve a minimum clear space equal to the height of the icon on every side. Never rotate, recolor, or distort the lockup.
          </p>
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
            <div className="section-label">Color System</div>
            <h2 className="section-title">A palette engineered for trust and signal.</h2>
            <p className="section-subtitle">
              Three primary tones define the NormSafety executive identity. Five secondary tones drive UI states, risk heatmaps, and compliance workflows.
            </p>
          </div>

          {/* Primary */}
          <div className="reveal" style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Primary</h3>
          </div>
          <div className="color-grid stagger">
            <div className="color-card">
              <div className="color-swatch" style={{ background: '#0B1535' }}><span className="color-swatch-hex">#0B1535</span></div>
              <div className="color-info">
                <div className="color-name">Core Midnight</div>
                <div className="color-hex">#0B1535</div>
                <div className="color-role">Executive trust, governance, enterprise authority. Our primary surface.</div>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch" style={{ background: '#14B8A6' }}><span className="color-swatch-hex">#14B8A6</span></div>
              <div className="color-info">
                <div className="color-name">Signal Teal</div>
                <div className="color-hex">#14B8A6</div>
                <div className="color-role">AI intelligence, live signal, action. The connective tissue of the brand.</div>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch" style={{ background: '#B8FF2C' }}><span className="color-swatch-hex color-swatch-hex--dark">#B8FF2C</span></div>
              <div className="color-info">
                <div className="color-name">AI Lime</div>
                <div className="color-hex">#B8FF2C</div>
                <div className="color-role">Premium signal accent. Used sparingly — only for moments of AI insight.</div>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="reveal" style={{ marginTop: 72 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Secondary — UI &amp; State</h3>
          </div>
          <div className="color-grid-sm stagger" style={{ marginTop: 20 }}>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#1D4ED8' }}></div><div className="color-chip-info"><div className="color-chip-name">Compliance Blue</div><div className="color-chip-hex">#1D4ED8</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#64748B' }}></div><div className="color-chip-info"><div className="color-chip-name">Slate Steel</div><div className="color-chip-hex">#64748B</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#34D399' }}></div><div className="color-chip-info"><div className="color-chip-name">Health Mint</div><div className="color-chip-hex">#34D399</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#F59E0B' }}></div><div className="color-chip-info"><div className="color-chip-name">Risk Amber</div><div className="color-chip-hex">#F59E0B</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#EF4444' }}></div><div className="color-chip-info"><div className="color-chip-name">Critical Coral</div><div className="color-chip-hex">#EF4444</div></div></div>
          </div>

          {/* Neutral */}
          <div className="reveal" style={{ marginTop: 72 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Neutral</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 20 }} className="stagger">
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border)' }}></div><div className="color-chip-info"><div className="color-chip-name">Fog White</div><div className="color-chip-hex">#F8FAFC</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#111827' }}></div><div className="color-chip-info"><div className="color-chip-name">Deep Text</div><div className="color-chip-hex">#111827</div></div></div>
          </div>

          {/* Signature gradient */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Signature Gradient</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>Midnight to Signal.</h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 12, maxWidth: 560 }}>
              The NormSafety signature gradient flows from enterprise governance (Midnight) into AI intelligence (Signal Teal). Used for hero surfaces, data visualizations, and premium moments only.
            </p>
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
            <h2 className="section-title">Bilingual by design. Enterprise by discipline.</h2>
            <p className="section-subtitle">
              A dual-script system: <strong>Sora</strong> for Latin, <strong>IBM Plex Sans Arabic</strong> for Arabic — with <strong>Meral Sans</strong> as a premium editorial accent for hero Arabic moments.
            </p>
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

          {/* Meral Sans accent */}
          <div className="type-specimen reveal" style={{ marginTop: 32 }}>
            <div className="type-name">Meral Sans — Premium Arabic Editorial Accent</div>
            <div className="type-alphabet" style={{ fontFamily: "'Meral Sans', sans-serif", direction: 'rtl' as const }}>
              الوقاية الذكية
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 8, fontStyle: 'italic' }}>
              Reserved for hero Arabic titles and cover treatments only.
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
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-light)', letterSpacing: '.14em', textTransform: 'uppercase' }}>NormSafety · Brand System · 2026</div>
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
            <p className="section-subtitle">
              The NormSafety visual system is built like the product itself — modular cards, precise grids, live data accents, and an AI signal layer.
            </p>
          </div>
          <div className="feature-grid stagger">
            <div className="feature-card">
              <div className="feature-icon feature-icon--teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>
              </div>
              <div className="feature-title">Modular Dashboards</div>
              <div className="feature-desc">Grid-native cards, composable KPIs, and editorial whitespace. Built to scale across product and presentation.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-7" /></svg>
              </div>
              <div className="feature-title">Predictive Data Viz</div>
              <div className="feature-desc">Clean lines, risk heatmaps, signal pulses. Charts that executives trust and operators can act on.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--midnight">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <div className="feature-title">Governance Surfaces</div>
              <div className="feature-desc">Dark mode-first executive views. Signal-over-decoration. Authority made legible.</div>
            </div>
          </div>

          {/* Iconography */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Iconography</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>A precise icon system for every surface.</h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 12, maxWidth: 620 }}>
              1.5px stroke. Round caps. Built on a 24px grid. Every icon is engineered for dashboards, executive reports, mobile apps, and enterprise slide decks.
            </p>
          </div>
          <div className="icon-grid stagger" style={{ marginTop: 40 }}>
            <div className="icon-card">
              <div className="icon-box"><img src={LOGO.icon} alt="Brand" style={{ width: 34, height: 34 }} /></div>
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
            <div className="section-label">Design Principles</div>
            <h2 className="section-title">Clarity over cleverness. Signal over decoration.</h2>
          </div>
          <div className="bi-principles stagger">
            <div className="bi-principle"><div className="principle-num">01</div><div><div className="principle-title">Executive Clarity</div><div className="principle-desc">Every pixel earns its place. No ornament. No marketing fluff. Built for decision-makers who need answers in seconds.</div></div></div>
            <div className="bi-principle"><div className="principle-num">02</div><div><div className="principle-title">8-Point Grid</div><div className="principle-desc">All spacing and sizing on an 8px rhythm. Enterprise-grade consistency across every surface.</div></div></div>
            <div className="bi-principle"><div className="principle-num">03</div><div><div className="principle-title">AI Signal Discipline</div><div className="principle-desc">AI Lime is reserved. Signal Teal is active. Midnight governs. Every accent means something.</div></div></div>
            <div className="bi-principle"><div className="principle-num">04</div><div><div className="principle-title">WCAG 2.1 AA Native</div><div className="principle-desc">Accessible color contrast, 44px touch targets, 2px focus rings. Built for global enterprise deployment.</div></div></div>
            <div className="bi-principle"><div className="principle-num">05</div><div><div className="principle-title">Bilingual Parity</div><div className="principle-desc">English and Arabic treated as first-class citizens. Mirrored layouts, balanced type weights, culturally-aware spacing.</div></div></div>
            <div className="bi-principle"><div className="principle-num">06</div><div><div className="principle-title">Dark-Mode First</div><div className="principle-desc">Executive dashboards live in dark surfaces. Light mode is an adaptation, not the default.</div></div></div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND VOICE ═══════════ */}
      <section className="bi-section text-section" id="voice">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Brand Voice</div>
            <h2 className="section-title">Executive. Visionary. Strategic.</h2>
            <p className="section-subtitle">
              NormSafety speaks like a trusted advisor to the C-suite — measured, informed, and always anchored in evidence.
            </p>
          </div>
          <div className="voice-grid stagger">
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--teal)' }}>Executive</div>
              <div className="voice-example">Board-ready language. No jargon. Every claim is a number.</div>
              <div className="voice-do">{'\u2713'} "CAPA closure improved 32% after AI triage deployment."</div>
              <div className="voice-dont">{'\u2717'} "Our amazing new tool supercharges safety!"</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--compliance)' }}>Visionary</div>
              <div className="voice-example">Frame the shift — from reactive HSE to predictive intelligence.</div>
              <div className="voice-do">{'\u2713'} "The next decade of safety is predictive, not reactive."</div>
              <div className="voice-dont">{'\u2717'} "Revolutionary disruption of the safety industry."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--midnight)' }}>Strategic</div>
              <div className="voice-example">Speak to operational outcomes, not features.</div>
              <div className="voice-do">{'\u2713'} "Centralize SST data. Anticipate risk. Elevate performance."</div>
              <div className="voice-dont">{'\u2717'} "Our platform has dozens of advanced features."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--teal-dark)' }}>Trustworthy</div>
              <div className="voice-example">Evidence over enthusiasm. Always.</div>
              <div className="voice-do">{'\u2713'} "ISO 45001 aligned. SOC 2 Type II. Enterprise-grade governance."</div>
              <div className="voice-dont">{'\u2717'} "Trust us — it's the best tool out there."</div>
            </div>
          </div>

          {/* Messaging bars */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Key Messages</div>
            <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--midnight)' }}>Anchors by audience.</h3>
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
            <h2 className="section-title">The brand in the real world.</h2>
            <p className="section-subtitle">
              Enterprise dashboards, executive reports, factory-floor tablets, compliance workflows, trade-show rollups, LinkedIn banners, business cards, and mobile app icons — one unified system.
            </p>
          </div>
          <div className="mockup-gallery stagger">
            <MockupPlaceholder label="Executive Dashboard" />
            <MockupPlaceholder label="Compliance Workflow" />
            <MockupPlaceholder label="Tablet Factory Analytics" />
            <MockupPlaceholder label="CAPA Board" />
            <MockupPlaceholder label="Booth Rollup" />
            <MockupPlaceholder label="LinkedIn Banner" />
            <MockupPlaceholder label="Business Card" />
            <MockupPlaceholder label="Mobile App Icon" />
          </div>
        </div>
      </section>

      {/* ═══════════ DELIVERABLES ═══════════ */}
      <section className="bi-section text-section">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Deliverables</div>
            <h2 className="section-title">Everything in the NormSafety masterbrand system.</h2>
            <p className="section-subtitle">A complete, enterprise-ready identity — built for global sales, pilots, tenders, and investor rooms.</p>
          </div>

          <div className="deliv-grid stagger">
            {[
              'Primary horizontal logo',
              'Vertical stacked lockup',
              'Icon / master symbol',
              'Monochrome black &amp; white',
              'Dark-mode reversed variants',
              'Full favicon set',
              'Primary + secondary color system',
              'Signature gradient library',
              'Sora + IBM Plex Sans Arabic setup',
              'Meral Sans editorial accent',
              'Iconography grid (24px)',
              'Dashboard / KPI card system',
              'Risk heatmap palette',
              'Executive report template',
              'Mobile app icon variants',
              'LinkedIn / social banner kit',
              'Business cards &amp; letterhead',
              'Trade-show rollup templates',
              'Pitch deck master layouts',
              'Bilingual (EN / AR) ready',
            ].map((item) => (
              <div className="deliv-row" key={item}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEXT STEPS ═══════════ */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Next Steps</div>
            <h2 className="section-title">From identity to enterprise deployment.</h2>
            <p className="section-subtitle">
              The NormSafety brand system is ready for investor meetings, client demos, government tenders, corporate pilots, ISO / ESG proposals, and international trade shows.
            </p>
          </div>

          <div className="feature-grid stagger" style={{ marginTop: 64 }}>
            <div className="feature-card">
              <div className="feature-icon feature-icon--teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <div className="feature-title">01 · Masterbrand Lock</div>
              <div className="feature-desc">Finalize logo system, clear-space rules, and master file delivery.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg>
              </div>
              <div className="feature-title">02 · Product UI System</div>
              <div className="feature-desc">Extend the brand into the NormSafety application — tokens, components, dashboards.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--midnight">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v14H2z" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <div className="feature-title">03 · Go-to-Market Kit</div>
              <div className="feature-desc">Pitch deck, sales collateral, pilot proposals, ISO / tender templates, investor deck.</div>
            </div>
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
          <p className="closing-sub reveal">NormSafety · AI-Powered Prevention Intelligence · 2026</p>
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
          <div className="footer-bottom">NormSafety Brand Identity System · 2026 · Confidential</div>
        </div>
      </footer>
    </>
  )
}
