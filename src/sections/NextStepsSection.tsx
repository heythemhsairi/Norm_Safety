import Reveal from '../components/motion/Reveal'

const steps = [
  { number: '01', title: 'Review', desc: 'Stakeholder presentation and feedback collection.' },
  { number: '02', title: 'Refine', desc: 'Incorporate feedback. Finalize all brand elements.' },
  { number: '03', title: 'Deliver', desc: 'Final files, guidelines, and development handoff.' },
  { number: '04', title: 'Launch', desc: 'Implementation support and brand rollout.' },
]

export default function NextStepsSection() {
  return (
    <section id="next-steps" className="slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Next Steps
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Moving Forward
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={0.15 + i * 0.08}>
              <div>
                <p className="mb-3 text-3xl font-bold text-primary/20">{s.number}</p>
                <h3 className="mb-2 text-base font-semibold text-text">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
