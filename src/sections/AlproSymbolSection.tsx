import Reveal from '../components/motion/Reveal'

const meanings = [
  { label: 'The Ascent', desc: 'The rising form represents ambition and forward motion — a brand that climbs toward excellence in every project.', color: 'bg-primary' },
  { label: 'The Flow', desc: 'Organic curves convey creativity and adaptability — fluid thinking that shapes tailored solutions for each client.', color: 'bg-blue' },
  { label: 'The Anchor', desc: 'The grounded base symbolizes reliability and professional integrity — a partner you can count on.', color: 'bg-purple' },
]

export default function AlproSymbolSection() {
  return (
    <section id="symbol-alpro" className="slide bg-bg">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Icon & Symbol
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Additional Proposition 1 — Symbol Meaning
          </h2>
        </Reveal>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="flex items-center justify-center rounded-2xl bg-white p-12 ring-1 ring-border sm:p-16">
              <img
                src="/assets/alpro.svg"
                alt="Alpro icon"
                className="w-full max-w-[140px]"
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            {meanings.map((m, i) => (
              <Reveal key={m.label} delay={0.2 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${m.color}`} />
                  <div>
                    <p className="mb-1 text-sm font-semibold text-text">{m.label}</p>
                    <p className="text-sm leading-relaxed text-text-muted">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
