import Reveal from '../components/motion/Reveal'
import Card from '../components/ui/Card'

const audiences = [
  {
    title: 'Employees',
    color: 'bg-primary',
    bullets: [
      'A safe, anonymous space to express how you feel.',
      'Guidance and reflection \u2014 at your own pace.',
    ],
  },
  {
    title: 'HR & Leadership',
    color: 'bg-blue',
    bullets: [
      'Weak signals surfaced before they become problems.',
      'Actionable insights. Clear recommendations. Real impact.',
    ],
  },
]

export default function AudienceSection() {
  return (
    <section id="audience" className="slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Audience
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Who We Speak To
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={0.15 + i * 0.1}>
              <Card hover={false} padding="lg" className="h-full border border-border">
                <span className={`mb-4 block h-1 w-8 rounded-full ${a.color}`} />
                <h3 className="mb-6 text-lg font-semibold text-text">{a.title}</h3>
                <ul className="space-y-4">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text/20" />
                      <p className="text-base leading-relaxed text-text/70">{b}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
