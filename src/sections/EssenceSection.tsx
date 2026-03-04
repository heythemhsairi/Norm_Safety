import Reveal from '../components/motion/Reveal'

export default function EssenceSection() {
  return (
    <section id="essence" className="slide bg-white">
      <div className="mx-auto w-full max-w-3xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Brand Essence
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            What We Stand For
          </h2>
        </Reveal>
        <div className="space-y-8">
          <Reveal delay={0.15}>
            <div className="flex items-start gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="text-lg leading-relaxed text-text/80 md:text-xl">
                Listen first. Every voice matters, every signal counts.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-start gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue" />
              <p className="text-lg leading-relaxed text-text/80 md:text-xl">
                Privacy-first by design. Trust is non-negotiable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex items-start gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple" />
              <p className="text-lg leading-relaxed text-text/80 md:text-xl">
                Signals &rarr; insights &rarr; action. Data that moves the needle.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
