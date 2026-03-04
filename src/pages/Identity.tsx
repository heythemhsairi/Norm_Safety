import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import Card from '../components/ui/Card'
import ColorSwatch from '../components/ui/ColorSwatch'
import SectionDivider from '../components/ui/SectionDivider'

/* ------------------------------------------------------------------ */
/*  Inline data                                                        */
/* ------------------------------------------------------------------ */

const palette = [
  {
    color: '#2FBF71',
    name: 'Primary Green',
    hex: '#2FBF71',
    usage: 'CTAs, links, interactive elements',
    ratio: '60 %',
  },
  {
    color: '#2F6BFF',
    name: 'Secondary Blue',
    hex: '#2F6BFF',
    usage: 'Supporting actions, informational accents',
    ratio: '25 %',
  },
  {
    color: '#7B61FF',
    name: 'Accent Purple',
    hex: '#7B61FF',
    usage: 'AI features, insights, highlights',
    ratio: '10 %',
  },
  {
    color: '#F7F9FC',
    name: 'Background',
    hex: '#F7F9FC',
    usage: 'Primary page background',
    ratio: '5 % (shared)',
  },
  {
    color: '#E8ECF3',
    name: 'Neutral',
    hex: '#E8ECF3',
    usage: 'Borders, dividers, secondary backgrounds',
    ratio: '5 % (shared)',
  },
  {
    color: '#1A1D2E',
    name: 'Text',
    hex: '#1A1D2E',
    usage: 'Primary text, headings',
  },
]

const interWeights = [
  { weight: 300, label: 'Light' },
  { weight: 400, label: 'Regular' },
  { weight: 500, label: 'Medium' },
  { weight: 600, label: 'SemiBold' },
  { weight: 700, label: 'Bold' },
  { weight: 800, label: 'ExtraBold' },
]

const typeScale = [
  { label: 'H1', size: '3.75rem / 60px', weight: 800, sample: 'Wejden Spire' },
  { label: 'H2', size: '3rem / 48px', weight: 700, sample: 'Section Heading' },
  { label: 'H3', size: '1.875rem / 30px', weight: 600, sample: 'Subsection Title' },
  { label: 'Body', size: '1rem / 16px', weight: 400, sample: 'Body text used for paragraphs and general content across the platform.' },
  { label: 'Caption', size: '0.75rem / 12px', weight: 500, sample: 'Caption or meta information' },
]

const iconData = [
  {
    name: 'Heart',
    path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  },
  {
    name: 'Shield',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    name: 'Chart',
    paths: ['M18 20V10', 'M12 20V4', 'M6 20v-6'],
  },
  {
    name: 'Brain',
    paths: [
      'M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z',
      'M9 21h6',
    ],
  },
  {
    name: 'Lock',
    paths: [
      'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z',
      'M7 11V7a5 5 0 0 1 10 0v4',
    ],
  },
  {
    name: 'Globe',
    paths: [
      'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
      'M2 12h20',
      'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z',
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Identity() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        {/* ============================================================ */}
        {/*  Hero                                                        */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Brand Identity
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-text md:text-5xl lg:text-6xl">
              Visual Identity
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              A visual language that balances warmth and precision
            </p>
          </section>
        </Reveal>

        {/* ============================================================ */}
        {/*  Color Palette                                                */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Color Palette</h2>
            <p className="mb-8 text-base text-text-muted">
              Six carefully chosen colors to convey trust, well-being, and intelligence.
            </p>
          </section>
        </Reveal>

        <Stagger className="mb-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map((c) => (
            <StaggerItem key={c.hex + c.name}>
              <ColorSwatch
                color={c.color}
                name={c.name}
                hex={c.hex}
                usage={c.usage}
                ratio={c.ratio}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Color usage ratio bar */}
        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-4 text-lg font-semibold text-text">
              Color Distribution
            </h3>
            <p className="mb-5 text-sm text-text-muted">
              60 % primary / 25 % blue / 10 % purple / 5 % neutral
            </p>
            <div className="flex h-5 w-full overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.div
                className="h-full bg-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.div
                className="h-full bg-purple"
                initial={{ width: 0 }}
                whileInView={{ width: '10%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.div
                className="h-full bg-neutral"
                initial={{ width: 0 }}
                whileInView={{ width: '5%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
            <div className="mt-3 flex gap-5 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                Primary 60 %
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue" />
                Blue 25 %
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple" />
                Purple 10 %
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-neutral" />
                Neutral 5 %
              </span>
            </div>
          </Card>
        </Reveal>

        <SectionDivider label="Typography" />

        {/* ============================================================ */}
        {/*  Typography                                                   */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Typography</h2>
            <p className="mb-8 text-base text-text-muted">
              A single typeface family for clean, consistent communication.
            </p>
          </section>
        </Reveal>

        {/* Inter */}
        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            <div className="mb-5 flex items-baseline gap-3">
              <h3 className="text-lg font-semibold text-text">Inter</h3>
              <span className="rounded-full bg-primary-light px-3 py-0.5 text-xs font-medium text-primary">
                Primary Typeface
              </span>
            </div>
            <div className="space-y-4">
              {interWeights.map((w) => (
                <div key={w.weight} className="flex items-baseline gap-4">
                  <span className="w-24 shrink-0 text-xs font-medium uppercase tracking-wide text-text-muted">
                    {w.label} ({w.weight})
                  </span>
                  <p
                    className="text-lg text-text"
                    style={{ fontWeight: w.weight }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Type scale */}
        <Reveal delay={0.15}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Type Scale</h3>
            <div className="space-y-6">
              {typeScale.map((t) => (
                <div key={t.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="inline-flex h-7 items-center rounded-md bg-neutral px-2 text-xs font-semibold text-text-muted">
                      {t.label}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{t.size}</span>
                  </div>
                  <p
                    className="text-text"
                    style={{
                      fontSize: t.size.split(' / ')[0],
                      fontWeight: t.weight,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <SectionDivider label="UI Components" />

        {/* ============================================================ */}
        {/*  UI Components Preview                                        */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">UI Components</h2>
            <p className="mb-8 text-base text-text-muted">
              A preview of the foundational components in the design system.
            </p>
          </section>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Buttons</h3>
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:shadow-lg"
              >
                Primary
              </button>
              {/* Secondary */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-neutral px-6 py-3 text-base font-medium text-text transition-colors hover:bg-neutral/80"
              >
                Secondary
              </button>
              {/* Ghost */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-transparent px-6 py-3 text-base font-medium text-text transition-colors hover:bg-neutral/50"
              >
                Ghost
              </button>
              {/* Outline */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-transparent px-6 py-3 text-base font-medium text-primary transition-colors hover:border-primary hover:bg-primary-light"
              >
                Outline
              </button>
            </div>
          </Card>
        </Reveal>

        {/* Sample Card */}
        <Reveal delay={0.15}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Cards</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Example card 1 */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 h-1 w-12 rounded-full bg-primary" />
                <h4 className="mb-2 text-base font-semibold text-text">
                  Emotional Tracking
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  Visualize your emotional trends over 30 days with intuitive charts and personalized recommendations.
                </p>
              </div>
              {/* Example card 2 */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 h-1 w-12 rounded-full bg-blue" />
                <h4 className="mb-2 text-base font-semibold text-text">
                  Breathing Exercises
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  Guided sessions tailored to your stress level, with haptic feedback and progress tracking.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Tags / Badges */}
        <Reveal delay={0.2}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Tags & Badges</h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                New
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-light px-3 py-1 text-xs font-semibold text-purple">
                Beta
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                Enterprise
              </span>
              <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold text-text-muted">
                Default
              </span>
            </div>
          </Card>
        </Reveal>

        {/* Alerts */}
        <Reveal delay={0.25}>
          <Card hover={false} padding="lg" className="mb-6">
            <h3 className="mb-5 text-lg font-semibold text-text">Alerts</h3>
            <div className="space-y-4">
              {/* Success */}
              <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary-light p-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-text">Success</p>
                  <p className="text-sm text-text-muted">
                    Your well-being session has been recorded successfully.
                  </p>
                </div>
              </div>
              {/* Info */}
              <div className="flex items-start gap-3 rounded-xl border border-blue/20 bg-blue-light p-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-text">Information</p>
                  <p className="text-sm text-text-muted">
                    A new application update is available.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <SectionDivider label="Iconography" />

        {/* ============================================================ */}
        {/*  Iconography                                                  */}
        {/* ============================================================ */}
        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-text">Iconography</h2>
            <p className="mb-8 text-base text-text-muted">
              Monoline style, rounded corners, 1.5px stroke on a consistent 24x24 grid.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <Card hover={false} padding="lg" className="mb-6">
            {/* Rules */}
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-bg p-4 text-center">
                <p className="text-sm font-semibold text-text">Style</p>
                <p className="mt-1 text-xs text-text-muted">Monoline, rounded corners</p>
              </div>
              <div className="rounded-xl bg-bg p-4 text-center">
                <p className="text-sm font-semibold text-text">Stroke</p>
                <p className="mt-1 text-xs text-text-muted">1.5px stroke width</p>
              </div>
              <div className="rounded-xl bg-bg p-4 text-center">
                <p className="text-sm font-semibold text-text">Grid</p>
                <p className="mt-1 text-xs text-text-muted">24 x 24 px</p>
              </div>
            </div>

            {/* Icon grid */}
            <Stagger className="grid grid-cols-3 gap-5 sm:grid-cols-6">
              {iconData.map((icon) => (
                <StaggerItem key={icon.name}>
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-md">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-text"
                    >
                      {icon.path && <path d={icon.path} />}
                      {icon.paths?.map((p, i) => <path key={i} d={p} />)}
                    </svg>
                    <span className="text-xs font-medium text-text-muted">
                      {icon.name}
                    </span>
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
