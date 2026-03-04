import { motion, useReducedMotion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import Card from '../components/ui/Card'
import SectionDivider from '../components/ui/SectionDivider'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const siteArchitecture = [
  { num: 1, title: 'Hero', desc: 'Accroche \u00e9motionnelle + CTA' },
  { num: 2, title: 'Pour les collaborateurs', desc: 'Espace s\u00fbr, expression anonyme' },
  { num: 3, title: 'Pour les RH', desc: 'Dashboard, insights, actions' },
  { num: 4, title: 'Assistant IA', desc: 'Conversation naturelle, bienveillance' },
  { num: 5, title: 'R\u00e9sultats', desc: 'M\u00e9triques d\u2019impact, t\u00e9moignages' },
  { num: 6, title: 'Comment \u00e7a marche', desc: '3 \u00e9tapes simples' },
  { num: 7, title: 'S\u00e9curit\u00e9', desc: 'Chiffrement, anonymat, conformit\u00e9' },
  { num: 8, title: 'T\u00e9moignages', desc: 'Quotes d\u2019entreprises' },
  { num: 9, title: 'CTA final', desc: 'Demander une d\u00e9mo' },
]

const motionPrinciples = [
  {
    title: 'Respiration',
    desc: 'L\u2019ic\u00f4ne hero respire doucement (scale 1.0 \u2192 1.02), symbolisant le calme et la pr\u00e9sence.',
    demo: 'breathe',
  },
  {
    title: 'R\u00e9v\u00e9lation',
    desc: 'Le contenu se r\u00e9v\u00e8le au scroll (fade + translate Y), d\u2019une mani\u00e8re progressive et organique.',
    demo: 'reveal',
  },
  {
    title: 'Fluidit\u00e9',
    desc: 'Transitions douces entre les pages, sans coupure brusque \u2014 l\u2019exp\u00e9rience reste un flux continu.',
    demo: 'fluid',
  },
  {
    title: 'Retenue',
    desc: 'Aucune distraction en boucle. Respect de prefers-reduced-motion. Le mouvement sert le sens.',
    demo: 'restraint',
  },
]

const bilingualPoints = [
  {
    title: 'Support RTL',
    desc: 'Mise en page enti\u00e8rement adapt\u00e9e pour l\u2019arabe avec direction droite-\u00e0-gauche native.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12H3M3 12l6-6M3 12l6 6" />
      </svg>
    ),
  },
  {
    title: 'IBM Plex Sans Arabic',
    desc: 'Typographie arabe soigneusement choisie pour la lisibilit\u00e9 et l\u2019harmonie avec Inter.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'Toggle / Page d\u00e9di\u00e9e',
    desc: 'Bascule linguistique int\u00e9gr\u00e9e ou page /arabic d\u00e9di\u00e9e selon le contexte.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Adaptation culturelle',
    desc: 'Pas une simple traduction \u2014 le ton, les images et les r\u00e9f\u00e9rences sont adapt\u00e9s culturellement.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

/* ------------------------------------------------------------------ */
/*  Motion demos                                                       */
/* ------------------------------------------------------------------ */

function BreathDemo() {
  const shouldReduce = useReducedMotion()
  return (
    <motion.div
      className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2F6BFF] to-[#7B61FF]"
      animate={shouldReduce ? {} : { scale: [1.0, 1.02, 1.0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function RevealDemo() {
  const shouldReduce = useReducedMotion()
  return (
    <div className="flex gap-1.5 items-end">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-8 rounded bg-[#2FBF71]/70"
          style={{ height: 12 + i * 8 }}
          animate={
            shouldReduce
              ? { opacity: 1 }
              : { opacity: [0, 1], y: [8, 0] }
          }
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
          }}
        />
      ))}
    </div>
  )
}

function FluidDemo() {
  const shouldReduce = useReducedMotion()
  return (
    <div className="relative h-10 w-16 overflow-hidden rounded-lg bg-[#EBF0FF]">
      <motion.div
        className="absolute inset-y-0 left-0 w-8 rounded-lg bg-[#2F6BFF]/50"
        animate={shouldReduce ? {} : { x: [0, 32, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function RestraintDemo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-[#2FBF71]" />
      <div className="h-[2px] w-10 bg-[#E2E8F0] rounded-full" />
      <div className="h-3 w-3 rounded-full bg-[#E8ECF3]" />
    </div>
  )
}

const demoComponents: Record<string, React.FC> = {
  breathe: BreathDemo,
  reveal: RevealDemo,
  fluid: FluidDemo,
  restraint: RestraintDemo,
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Website() {
  return (
    <PageTransition className="min-h-screen bg-[#F7F9FC]">
      {/* ---- Hero ---- */}
      <section className="flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2F6BFF] mb-3">
            Direction du site web
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1D2E] tracking-tight mb-6">
            Direction du <span className="text-gradient">site web</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-[#1A1D2E]/70 font-light max-w-2xl leading-relaxed">
            Architecture, motion et exp&eacute;rience
          </p>
        </Reveal>
      </section>

      {/* ---- Architecture de l'information ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2F6BFF] mb-2">
              Structure
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] mb-14">
              Architecture de l&apos;information
            </h2>
          </Reveal>

          {/* Vertical flow with connecting line */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#2F6BFF] via-[#7B61FF] to-[#2FBF71]" />

            <Stagger className="flex flex-col gap-0">
              {siteArchitecture.map((item) => (
                <StaggerItem key={item.num}>
                  <div className="relative flex items-start gap-5 py-4">
                    {/* Number badge */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md border border-[#E2E8F0]">
                      <span className="text-sm font-bold text-[#2F6BFF]">
                        {String(item.num).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5">
                      <h3 className="font-semibold text-[#1A1D2E] text-base mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#1A1D2E]/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <SectionDivider label="Motion" />

      {/* ---- Principes de motion ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2F6BFF] mb-2">
              Langage visuel
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] mb-12">
              Principes de motion
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {motionPrinciples.map((principle) => {
              const DemoComponent = demoComponents[principle.demo]
              return (
                <StaggerItem key={principle.title}>
                  <Card hover padding="lg" className="border border-[#E2E8F0] h-full">
                    <div className="flex items-start gap-5">
                      {/* Motion demo */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F7F9FC]">
                        <DemoComponent />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1D2E] text-lg mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-sm text-[#1A1D2E]/60 leading-relaxed">
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <SectionDivider label="Bilingue" />

      {/* ---- Approche bilingue ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2F6BFF] mb-2">
              Fran&ccedil;ais &amp; Arabe
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] mb-12">
              Approche bilingue
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bilingualPoints.map((point) => (
              <StaggerItem key={point.title}>
                <Card hover={false} padding="lg" className="border border-[#E2E8F0] h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBF0FF] text-[#2F6BFF]">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1D2E] mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-[#1A1D2E]/60 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionDivider label="Aper\u00e7u" />

      {/* ---- Apercu des sections ---- */}
      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2F6BFF] mb-2">
              Wireframes
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1D2E] mb-12">
              Aper&ccedil;u des sections
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hero mockup */}
            <StaggerItem>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">
                    Hero
                  </p>
                </div>
                <div className="relative h-56 bg-gradient-to-br from-[#2F6BFF]/10 via-[#7B61FF]/8 to-[#2FBF71]/6 flex flex-col items-center justify-center gap-3 px-6">
                  {/* Abstract icon */}
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2F6BFF] to-[#7B61FF] opacity-60" />
                  {/* Title lines */}
                  <div className="h-3 w-32 rounded-full bg-[#1A1D2E]/15" />
                  <div className="h-2 w-44 rounded-full bg-[#1A1D2E]/8" />
                  <div className="h-2 w-36 rounded-full bg-[#1A1D2E]/6" />
                  {/* CTA buttons */}
                  <div className="flex gap-2 mt-3">
                    <div className="h-7 w-20 rounded-lg bg-[#2F6BFF]/40" />
                    <div className="h-7 w-20 rounded-lg bg-[#E8ECF3]" />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Dashboard mockup */}
            <StaggerItem>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">
                    Dashboard RH
                  </p>
                </div>
                <div className="relative h-56 bg-[#F7F9FC] p-4 flex flex-col gap-3">
                  {/* Metric cards row */}
                  <div className="flex gap-2">
                    <div className="flex-1 h-14 rounded-lg bg-white shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center gap-1">
                      <div className="h-3 w-8 rounded-full bg-[#2FBF71]/40" />
                      <div className="h-1.5 w-12 rounded-full bg-[#1A1D2E]/8" />
                    </div>
                    <div className="flex-1 h-14 rounded-lg bg-white shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center gap-1">
                      <div className="h-3 w-8 rounded-full bg-[#2F6BFF]/40" />
                      <div className="h-1.5 w-12 rounded-full bg-[#1A1D2E]/8" />
                    </div>
                    <div className="flex-1 h-14 rounded-lg bg-white shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center gap-1">
                      <div className="h-3 w-8 rounded-full bg-[#7B61FF]/40" />
                      <div className="h-1.5 w-12 rounded-full bg-[#1A1D2E]/8" />
                    </div>
                  </div>
                  {/* Chart area */}
                  <div className="flex-1 rounded-lg bg-white shadow-sm border border-[#E2E8F0] p-3 flex items-end gap-1.5">
                    {[40, 55, 35, 65, 50, 72, 60, 80].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t bg-gradient-to-t from-[#2F6BFF]/30 to-[#2F6BFF]/10"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Chat mockup */}
            <StaggerItem>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">
                    Assistant IA
                  </p>
                </div>
                <div className="relative h-56 bg-[#F7F9FC] p-4 flex flex-col justify-end gap-3">
                  {/* AI message */}
                  <div className="flex gap-2 items-end">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#2F6BFF] opacity-50" />
                    <div className="flex flex-col gap-1.5 max-w-[75%]">
                      <div className="rounded-2xl rounded-bl-md bg-white shadow-sm border border-[#E2E8F0] px-3 py-2">
                        <div className="h-1.5 w-28 rounded-full bg-[#1A1D2E]/10 mb-1.5" />
                        <div className="h-1.5 w-20 rounded-full bg-[#1A1D2E]/7" />
                      </div>
                    </div>
                  </div>
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-br-md bg-[#2F6BFF]/15 px-3 py-2 max-w-[65%]">
                      <div className="h-1.5 w-24 rounded-full bg-[#2F6BFF]/25 mb-1.5" />
                      <div className="h-1.5 w-16 rounded-full bg-[#2F6BFF]/15" />
                    </div>
                  </div>
                  {/* AI response */}
                  <div className="flex gap-2 items-end">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#2F6BFF] opacity-50" />
                    <div className="flex flex-col gap-1.5 max-w-[75%]">
                      <div className="rounded-2xl rounded-bl-md bg-white shadow-sm border border-[#E2E8F0] px-3 py-2">
                        <div className="h-1.5 w-32 rounded-full bg-[#1A1D2E]/10 mb-1.5" />
                        <div className="h-1.5 w-24 rounded-full bg-[#1A1D2E]/7 mb-1.5" />
                        <div className="h-1.5 w-16 rounded-full bg-[#1A1D2E]/5" />
                      </div>
                    </div>
                  </div>
                  {/* Input area */}
                  <div className="flex gap-2 mt-1">
                    <div className="flex-1 h-8 rounded-full bg-white border border-[#E2E8F0] shadow-sm" />
                    <div className="h-8 w-8 rounded-full bg-[#2F6BFF]/30 shrink-0" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </PageTransition>
  )
}
