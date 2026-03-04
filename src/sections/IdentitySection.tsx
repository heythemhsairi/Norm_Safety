import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const colors = [
  { name: 'Primary Green', hex: '#2FBF71', usage: 'Primary actions, success states, brand accent' },
  { name: 'Signal Blue', hex: '#2F6BFF', usage: 'Links, data visualization, secondary accent' },
  { name: 'Accent Purple', hex: '#7B61FF', usage: 'Highlights, premium features, tertiary accent' },
]

const neutrals = [
  { name: 'Background', hex: '#F7F9FC' },
  { name: 'Text', hex: '#1A1D2E' },
  { name: 'Muted', hex: '#6B7280' },
  { name: 'Border', hex: '#E2E8F0' },
]

export default function IdentitySection() {
  return (
    <section id="identity" className="slide bg-bg">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visual Identity
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Color System
          </h2>
        </Reveal>
        <Stagger className="mb-12 grid gap-6 sm:grid-cols-3">
          {colors.map((c) => (
            <StaggerItem key={c.hex}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
                <div className="h-24" style={{ backgroundColor: c.hex }} />
                <div className="p-5">
                  <p className="mb-1 text-sm font-semibold text-text">{c.name}</p>
                  <p className="mb-2 font-mono text-xs text-text-muted">{c.hex}</p>
                  <p className="text-xs leading-relaxed text-text-muted">{c.usage}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
            Neutrals
          </p>
          <div className="flex flex-wrap gap-4">
            {neutrals.map((n) => (
              <div key={n.hex} className="flex items-center gap-3">
                <span
                  className="h-8 w-8 rounded-lg ring-1 ring-border"
                  style={{ backgroundColor: n.hex }}
                />
                <div>
                  <p className="text-xs font-medium text-text">{n.name}</p>
                  <p className="font-mono text-[10px] text-text-muted">{n.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
