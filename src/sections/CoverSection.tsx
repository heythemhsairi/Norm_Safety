import Reveal from '../components/motion/Reveal'

export default function CoverSection() {
  return (
    <section id="cover" className="slide bg-bg">
      <div className="mx-auto w-full max-w-4xl px-8 text-center">
        <Reveal>
          <img
            src="/assets/wejden-spire-logo.svg"
            alt="Wejden Spire"
            className="mx-auto mb-12 h-16 w-auto sm:h-20"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-text md:text-6xl lg:text-7xl">
            Wejden Spire
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-text-muted">
            Brand Identity System
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="gradient-line mx-auto mb-12 w-24" />
        </Reveal>
        <Reveal delay={0.25}>
          <p className="text-lg font-light text-text-muted md:text-xl">
            A calm, trusted system for enterprise wellbeing.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
