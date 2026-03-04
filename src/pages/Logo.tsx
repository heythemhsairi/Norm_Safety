import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import Card from '../components/ui/Card'
import SectionDivider from '../components/ui/SectionDivider'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const symbolMeanings = [
  {
    title: 'The Circle',
    description: 'Safe space, protection, community. The circle envelops and welcomes — embodying trust and inclusion.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <circle cx="16" cy="16" r="12" />
      </svg>
    ),
    color: 'blue' as const,
  },
  {
    title: 'The Wave',
    description: 'Emotional signal, natural rhythm, breathing. The wave represents the flow of inner life and wellbeing.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M4 16c2-4 4-6 6-6s4 4 6 4 4-4 6-4 4 2 6 6" />
      </svg>
    ),
    color: 'green' as const,
  },
  {
    title: 'The Central Peak',
    description: 'Spire, elevation, growth, aspiration. The summit symbolizes ambition and personal fulfillment.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
        <path d="M16 4L16 28" />
        <path d="M10 12l6-8 6 8" />
      </svg>
    ),
    color: 'purple' as const,
  },
]

const colorSchemeMap = {
  blue: { bg: 'bg-blue-light', text: 'text-blue' },
  green: { bg: 'bg-primary-light', text: 'text-primary' },
  purple: { bg: 'bg-purple-light', text: 'text-purple' },
}

const lockups = [
  {
    label: 'Primary Bilingual (EN + AR)',
    description: 'Primary version with full logotype. Used in headers, official documents, and external communications.',
    src: '/assets/wejden-spire-logo.svg',
    alt: 'Wejden Spire — full bilingual logo',
  },
  {
    label: 'English only',
    description: 'English variant for international markets and technical materials.',
    src: '/assets/wejden-spire-logo-english.svg',
    alt: 'Wejden Spire — English logo',
  },
  {
    label: 'Vertical',
    description: 'Stacked vertical layout for documents, presentations, and tall spaces.',
    src: '/assets/wejden-spire-logo-vertical.svg',
    alt: 'Wejden Spire — vertical logo',
  },
  {
    label: 'Icon only',
    description: 'Used for favicons, avatars, app icons, and constrained spaces (< 120px).',
    src: '/assets/wejden-spire-icon.svg',
    alt: 'Wejden Spire — icon mark',
  },
]

const donts = [
  {
    label: 'Do not stretch',
    description: 'Always preserve the original aspect ratio.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-red-400">
        <rect x="8" y="14" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M4 24H8M40 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 20l4 4-4 4M46 20l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Do not rotate',
    description: 'The logo must always remain horizontal.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-red-400">
        <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" transform="rotate(15 24 24)" />
        <path d="M36 8a16 16 0 0 1 0 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 8l2 4-4 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Do not recolor',
    description: 'Only use the approved colors from the brand palette.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-red-400">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="18" cy="20" r="3" fill="#FF6B6B" opacity="0.5" />
        <circle cx="28" cy="18" r="3" fill="#FFD93D" opacity="0.5" />
        <circle cx="26" cy="28" r="3" fill="#6BCB77" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Do not add effects',
    description: 'No drop shadows, bevels, glows, or additional outlines.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-red-400">
        <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="14" y="14" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <rect x="16" y="16" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Logo() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        {/* ============================================================ */}
        {/*  Hero                                                        */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Logo
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-text md:text-5xl lg:text-6xl">
              The Wejden Spire Symbol
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              A logo that breathes
            </p>
          </section>
        </Reveal>

        {/* ============================================================ */}
        {/*  Full logo display                                            */}
        {/* ============================================================ */}
        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-6 text-center text-lg font-semibold text-text">Full Logo</h3>
            <div className="flex items-center justify-center rounded-xl bg-white p-12 ring-1 ring-border">
              <img
                src="/assets/wejden-spire-logo.svg"
                alt="Wejden Spire full logo"
                className="h-20 w-auto sm:h-28 lg:h-36"
              />
            </div>
            <p className="mt-4 text-center text-base text-text-muted" dir="rtl" lang="ar">
              وجدان سبَاير
            </p>
          </Card>
        </Reveal>

        {/* ============================================================ */}
        {/*  Icon display                                                 */}
        {/* ============================================================ */}
        <Reveal delay={0.15}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-6 text-center text-lg font-semibold text-text">Icon</h3>
            <div className="flex items-center justify-center rounded-xl bg-white p-12 ring-1 ring-border">
              <img
                src="/assets/wejden-spire-icon.svg"
                alt="Wejden Spire icon mark"
                className="h-20 w-auto sm:h-24 lg:h-28"
              />
            </div>
          </Card>
        </Reveal>

        <SectionDivider label="Meaning" />

        {/* ============================================================ */}
        {/*  Symbol meaning                                               */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Symbol Meaning</h2>
            <p className="mb-8 text-base text-text-muted">
              Every element of the logo carries a specific intention.
            </p>
          </section>
        </Reveal>

        <Stagger className="mb-12 grid gap-5 sm:grid-cols-3">
          {symbolMeanings.map((item) => {
            const scheme = colorSchemeMap[item.color]
            return (
              <StaggerItem key={item.title}>
                <Card hover padding="lg" className="h-full">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${scheme.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-text">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                </Card>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.15}>
          <Card hover={false} padding="lg" className="mb-12">
            <h3 className="mb-5 text-center text-lg font-semibold text-text">Symbol Construction</h3>
            <img
              src="/assets/visual-symbol.svg"
              alt="Visual symbol construction"
              className="w-full max-w-2xl mx-auto"
            />
          </Card>
        </Reveal>

        <SectionDivider label="Lockups" />

        {/* ============================================================ */}
        {/*  Lockup variations                                            */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Logo Lockups</h2>
            <p className="mb-8 text-base text-text-muted">
              Four variants to cover every usage context.
            </p>
          </section>
        </Reveal>

        <Stagger className="mb-12 grid gap-5 sm:grid-cols-2">
          {lockups.map((l) => (
            <StaggerItem key={l.label}>
              <Card hover={false} padding="lg" className="h-full">
                <div className="mb-5 flex items-center justify-center rounded-xl bg-white p-8 ring-1 ring-border">
                  <img
                    src={l.src}
                    alt={l.alt}
                    className="h-12 w-auto sm:h-16"
                  />
                </div>
                <h4 className="mb-1 text-base font-semibold text-text">{l.label}</h4>
                <p className="text-sm leading-relaxed text-text-muted">{l.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <SectionDivider label="Usage Rules" />

        {/* ============================================================ */}
        {/*  Usage rules                                                  */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Usage Rules</h2>
            <p className="mb-8 text-base text-text-muted">
              Following these guidelines ensures brand consistency and legibility.
            </p>
          </section>
        </Reveal>

        {/* Clear space */}
        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Clear Space</h3>
            <p className="mb-5 text-sm text-text-muted">
              A minimum breathing room must surround the logo. No graphic element or text should encroach on this zone.
            </p>
            <div className="flex items-center justify-center rounded-xl bg-bg p-8">
              <img
                src="/assets/savezone.svg"
                alt="Logo safe zone / clear space diagram"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <p className="mt-4 text-sm text-text-muted text-center">
              Maintain a minimum clear space of &ldquo;X&rdquo; around the logo to ensure legibility.
            </p>
          </Card>
        </Reveal>

        {/* Minimum size */}
        <Reveal delay={0.15}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Minimum Size</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-bg p-6 ring-1 ring-border">
                  <img
                    src="/assets/wejden-spire-logo.svg"
                    alt="Logo minimum size"
                    className="w-[120px]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-text">Full logo</p>
                  <p className="text-xs text-text-muted">Minimum 120px wide</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-bg p-6 ring-1 ring-border">
                  <img
                    src="/assets/wejden-spire-icon.svg"
                    alt="Icon minimum size"
                    className="w-[32px]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-text">Icon only</p>
                  <p className="text-xs text-text-muted">Minimum 32px wide</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Don'ts */}
        <Reveal delay={0.2}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Don&rsquo;ts</h3>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {donts.map((d) => (
                <StaggerItem key={d.label}>
                  <div className="relative flex flex-col items-center rounded-xl border border-red-200 bg-red-50/40 p-5 text-center">
                    {/* Red X badge */}
                    <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                      X
                    </span>
                    <div className="mb-3">{d.icon}</div>
                    <p className="mb-1 text-sm font-semibold text-text">{d.label}</p>
                    <p className="text-xs leading-relaxed text-text-muted">{d.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Card>
        </Reveal>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </PageTransition>
  )
}
