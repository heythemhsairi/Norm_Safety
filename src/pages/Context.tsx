import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'
import SectionDivider from '../components/ui/SectionDivider'

const touchpoints = [
  {
    src: '/assets/mockup-pin-badge.png',
    label: 'Pin Badge',
    description: 'A subtle, everyday reminder of your commitment to employee wellbeing.',
  },
  {
    src: '/assets/mockup-fabric-print.png',
    label: 'Fabric Print',
    description: 'Premium textile applications for branded environments and events.',
  },
  {
    src: '/assets/mockup-keychain.jpg',
    label: 'Keychain',
    description: 'A tactile touchpoint that travels with every team member.',
  },
]

export default function Context() {
  return (
    <PageTransition className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-28 pb-24">
        <Reveal>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Brand in Context
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mb-6 text-center text-5xl font-bold tracking-tight text-text md:text-6xl">
            Brand in <span className="text-gradient">Context</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl text-center text-xl font-light leading-relaxed text-text/80 md:text-2xl">
            See how the Wejden Spire identity comes to life across real-world applications.
          </p>
        </Reveal>
      </section>

      {/* ── Mockup 1: Mobile Application (image left, text right) ── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            <Reveal direction="left" delay={0.1}>
              <motion.div
                className="overflow-hidden rounded-3xl bg-white p-5 shadow-lg ring-1 ring-border/50"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <img
                  src="/assets/mockup-phone-app.jpg"
                  alt="Wejden Spire mobile application"
                  className="w-full rounded-2xl object-cover"
                />
              </motion.div>
            </Reveal>
            <div>
              <Reveal direction="right" delay={0.15}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Digital Product
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <h2 className="mb-5 text-3xl font-bold text-text md:text-4xl">
                  Mobile Application
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.25}>
                <p className="text-lg leading-relaxed text-text/60">
                  The app icon captures the essence of the brand in a compact format.
                  The Spire symbol, clean and recognizable, ensures a strong presence on
                  every user's home screen.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-text/50">iOS & Android</span>
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  <span className="text-sm font-medium text-text/50">Adaptive icon</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mockup 2: Corporate ID Card (text left, image right) ── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div className="order-2 md:order-1">
              <Reveal direction="left" delay={0.15}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Corporate Identity
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <h2 className="mb-5 text-3xl font-bold text-text md:text-4xl">
                  Corporate ID Card
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.25}>
                <p className="text-lg leading-relaxed text-text/60">
                  The corporate ID card reflects the rigor and professionalism
                  of Wejden Spire. Every team member carries the brand identity with
                  elegance and consistency.
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-text/50">Printed & digital</span>
                  <span className="h-2 w-2 rounded-full bg-purple" />
                  <span className="text-sm font-medium text-text/50">NFC-ready</span>
                </div>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.1} className="order-1 md:order-2">
              <motion.div
                className="overflow-hidden rounded-3xl bg-white p-5 shadow-lg ring-1 ring-border/50"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <img
                  src="/assets/mockup-id-card.png"
                  alt="Wejden Spire corporate ID card"
                  className="w-full rounded-2xl object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider label="Touchpoints" />

      {/* ── Brand Touchpoints ── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-primary">
              Physical Applications
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-4 text-center text-3xl font-bold text-text md:text-4xl">
              Brand Touchpoints
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mb-16 max-w-xl text-center text-lg text-text/60">
              Everyday objects that reinforce the brand's presence and create tangible connections.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {touchpoints.map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/50 transition-shadow hover:shadow-lg"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-base font-semibold text-text">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  )
}
