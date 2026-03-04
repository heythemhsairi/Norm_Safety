import Reveal from '../components/motion/Reveal'

const deliverables = [
  'Logo files \u2014 SVG, PNG, all variants',
  'Brand guidelines \u2014 usage rules, clear space, color specs',
  'Color palette \u2014 primary, secondary, neutrals',
  'Typography specification \u2014 fonts, weights, scales',
  'Mockup presentations \u2014 digital & print applications',
  'Icon library \u2014 UI icons, brand marks',
  'Development handoff \u2014 design tokens, CSS variables',
]

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="slide bg-bg">
      <div className="mx-auto w-full max-w-3xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Deliverables
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            What You Receive
          </h2>
        </Reveal>
        <ul className="space-y-5">
          {deliverables.map((d, i) => (
            <Reveal key={d} delay={0.15 + i * 0.05}>
              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-base text-text/80">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
