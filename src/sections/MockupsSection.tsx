import { motion } from 'framer-motion'
import Reveal from '../components/motion/Reveal'

const mockups = [
  { src: '/assets/mockup-phone-app.jpg', label: 'Mobile Application' },
  { src: '/assets/mockup-id-card.png', label: 'Corporate ID' },
  { src: '/assets/mockup-pin-badge.png', label: 'Pin Badge' },
  { src: '/assets/mockup-fabric-print.png', label: 'Fabric Print' },
]

export default function MockupsSection() {
  return (
    <section id="context" className="slide bg-white">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Brand in Context
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Real-World Applications
          </h2>
        </Reveal>
        <div className="grid gap-4 grid-cols-2">
          {mockups.map((m, i) => (
            <Reveal key={m.label} delay={0.15 + i * 0.08}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-bg ring-1 ring-border"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.src}
                    alt={m.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-medium text-text-muted">{m.label}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
