import Reveal from '../components/motion/Reveal'

export default function CoverSection() {
  return (
    <section id="cover" className="slide bg-bg">
      <div className="mx-auto w-full max-w-4xl px-8 text-center">
        {/* Logo */}
        <Reveal>
          <img
            src="/assets/wejden-spire-logo.svg"
            alt="Wejden Spire"
            className="mx-auto mb-16 h-20 w-auto sm:h-24"
          />
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Brand Identity Proposal
          </p>
        </Reveal>

        {/* Main headline */}
        <Reveal delay={0.15}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-text md:text-5xl lg:text-6xl">
            Elevate Wellbeing,
            <br />
            <span className="text-primary">Empower Growth</span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="mx-auto mb-12 max-w-lg text-base font-light leading-relaxed text-text-muted md:text-lg">
            A calm, trusted system for enterprise wellbeing &mdash;
            designed to inspire confidence at every touchpoint.
          </p>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.25}>
          <div className="gradient-line mx-auto mb-12 w-20" />
        </Reveal>

        {/* Info chips */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-text-muted shadow-sm">
              Wejden Spire
            </span>
            <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-text-muted shadow-sm">
              2026
            </span>
            <span className="rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
              Confidential
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
