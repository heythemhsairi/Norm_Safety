import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import ProcessTimeline from '../components/ui/ProcessTimeline'

const deliverables = [
  {
    title: 'Strategy Document',
    description: 'This website serves as the complete brand strategy document.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Logo Pack',
    description: 'SVG and PNG files in all sizes, mono and color versions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Icon Pack',
    description: 'Consistent monoline icons for interface and communication.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Color & Typography Guidelines',
    description: 'Palette, ratios, type scales, and usage rules.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: 'Pattern System',
    description: 'Wave motifs, subtle textures, and decorative elements.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    title: 'Brand Collateral Templates',
    description: 'Business cards, email signatures, presentation templates, and social media assets.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

const timelineSteps = [
  {
    phase: 'Phase 1',
    title: 'Discovery',
    description: 'Brand analysis, competitive audit, stakeholder interviews',
    status: 'done' as const,
  },
  {
    phase: 'Phase 2',
    title: 'Strategy',
    description: 'Positioning, naming, brand pillars, tone & voice',
    status: 'done' as const,
  },
  {
    phase: 'Phase 3',
    title: 'Design',
    description: 'Visual identity, logo, palette, typography, components',
    status: 'active' as const,
  },
  {
    phase: 'Phase 4',
    title: 'Review',
    description: 'Presentation, feedback, adjustments, validation',
    status: 'upcoming' as const,
  },
  {
    phase: 'Phase 5',
    title: 'Delivery',
    description: 'Final files, guidelines, development handoff',
    status: 'upcoming' as const,
  },
]

const nextSteps = [
  'Approve the strategic direction',
  'Finalize the color palette',
  'Validate the logo lockups',
  'Deliver final brand assets',
]

export default function Deliverables() {
  return (
    <PageTransition className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-28 pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-4">
            Deliverables
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-gradient text-5xl md:text-6xl font-bold tracking-tight text-center mb-6">
            Deliverables & Next Steps
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-text/80 font-light max-w-2xl text-center leading-relaxed">
            Everything included in this rebrand proposal.
          </p>
        </Reveal>
      </section>

      {/* Deliverables Grid Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-4">
              What's Included
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-text/60 text-center max-w-xl mx-auto mb-14">
              Each deliverable ensures a smooth, cohesive brand transition.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <StaggerItem key={item.title}>
                <Card padding="lg" className="h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionDivider label="Timeline" />

      {/* Timeline Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-4">
              Project Timeline
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-text/60 text-center max-w-xl mx-auto mb-14">
              Where we are in the rebranding process.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ProcessTimeline steps={timelineSteps} />
          </Reveal>
        </div>
      </section>

      <SectionDivider label="Next Steps" />

      {/* Next Steps Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-4">
              Next Steps
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-text/60 text-center max-w-xl mx-auto mb-14">
              The actions to validate in order to move the project forward.
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-4">
            {nextSteps.map((step, index) => (
              <StaggerItem key={step}>
                <Card padding="md" className="flex items-center gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-base font-medium text-text">
                    {step}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="px-6 pb-28">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Ready to Move Forward?
            </h2>
            <p className="text-lg text-text/60 mb-10">
              Let's validate the next steps of your rebrand together.
            </p>
            <Button variant="primary" size="lg">
              Contact the Team
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
