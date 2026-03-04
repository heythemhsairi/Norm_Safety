import Reveal from '../components/motion/Reveal'
import Card from '../components/ui/Card'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const pillars = [
  {
    title: 'Listen',
    description: 'Anonymous, judgment-free expression for every employee.',
    color: 'bg-primary',
  },
  {
    title: 'Understand',
    description: 'AI-powered analysis that surfaces weak signals early.',
    color: 'bg-blue',
  },
  {
    title: 'Act',
    description: 'Clear, actionable recommendations for leadership.',
    color: 'bg-purple',
  },
]

export default function PositioningSection() {
  return (
    <section id="positioning" className="slide bg-bg">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Positioning
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 max-w-3xl text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            The trusted wellbeing layer for modern enterprises.
          </h2>
        </Reveal>
        <Stagger className="grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <Card hover padding="lg" className="h-full">
                <span className={`mb-4 block h-2 w-8 rounded-full ${p.color}`} />
                <h3 className="mb-2 text-lg font-semibold text-text">{p.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{p.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
