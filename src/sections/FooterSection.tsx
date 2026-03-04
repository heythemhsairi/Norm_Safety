import Reveal from '../components/motion/Reveal'

export default function FooterSection() {
  return (
    <section id="footer" className="slide bg-text">
      <div className="mx-auto w-full max-w-4xl px-8 text-center">
        <Reveal>
          <img
            src="/assets/wejden-spire-icon.svg"
            alt="Wejden Spire"
            className="mx-auto mb-8 h-12 w-auto brightness-0 invert"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-lg font-light text-white/60">
            Wejden Spire &mdash; Brand Identity 2026
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/40">
            Confidential
          </span>
        </Reveal>
      </div>
    </section>
  )
}
