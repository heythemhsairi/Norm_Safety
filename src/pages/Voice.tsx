import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import Reveal from '../components/motion/Reveal'
import Card from '../components/ui/Card'
import SectionDivider from '../components/ui/SectionDivider'
import Button from '../components/ui/Button'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const toneSegments = [
  { label: '50% Human', color: '#2F6BFF', width: '50%', desc: 'Empathetic, warm, accessible' },
  { label: '30% Corporate', color: '#2FBF71', width: '30%', desc: 'Credible, structured, professional' },
  { label: '20% Tech', color: '#7B61FF', width: '20%', desc: 'Modern, precise, data-driven' },
]

const wordBankDisplay: Record<string, string[]> = {
  positive: ['elevate', 'support', 'clarify', 'balance', 'breathe', 'grow', 'listen'],
  analytical: ['signals', 'insights', 'trends', 'data', 'measure', 'impact'],
  avoid: ['monitor', 'control', 'diagnose', 'pathology', 'medication'],
}

type AudienceKey = 'employees' | 'hr' | 'ai'

interface AudienceTab {
  key: AudienceKey
  label: string
  icon: string
  messages: string[]
}

const audienceTabs: AudienceTab[] = [
  {
    key: 'employees',
    label: 'For Employees',
    icon: '\ud83d\udc65',
    messages: [
      'Your wellbeing matters. Express yourself with confidence \u2014 your words stay anonymous, but their impact is real.',
      'Take a moment. Breathe. How are you feeling today?',
    ],
  },
  {
    key: 'hr',
    label: 'For HR & Leadership',
    icon: '\ud83d\udcca',
    messages: [
      'Identify weak signals before they become problems. Wejden Spire turns listening into action.',
      '87% of your teams feel heard. Here are the 3 recommended actions this month.',
    ],
  },
  {
    key: 'ai',
    label: 'For the AI Assistant',
    icon: '\ud83e\udd16',
    messages: [
      'I\u2019m here to listen, not to judge. Share what weighs on you, at your own pace.',
      'Based on what you describe, here are some avenues for reflection\u2026',
    ],
  },
]

const ctaExamples = [
  {
    tier: 'Primary',
    variant: 'primary' as const,
    examples: ['Get Started', 'Discover Wejden Spire'],
  },
  {
    tier: 'Secondary',
    variant: 'secondary' as const,
    examples: ['Learn More', 'See Results'],
  },
  {
    tier: 'Soft',
    variant: 'ghost' as const,
    examples: ['Take a Moment', 'Explore at My Pace'],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Voice() {
  const [activeTab, setActiveTab] = useState<AudienceKey>('employees')

  return (
    <PageTransition className="min-h-screen bg-bg">
      {/* ---- Hero ---- */}
      <section className="flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Tone & Voice
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold text-text tracking-tight mb-6">
            Tone <span className="text-gradient">&</span> Voice
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-text/70 font-light max-w-2xl leading-relaxed">
            Warm, professional, intelligent &mdash; never clinical.
          </p>
        </Reveal>
      </section>

      {/* ---- Our Tone ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              The Formula
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
              Our Tone
            </h2>
          </Reveal>

          {/* Stacked bar */}
          <Reveal delay={0.1}>
            <div className="w-full h-14 rounded-2xl overflow-hidden flex shadow-md mb-8">
              {toneSegments.map((seg) => (
                <motion.div
                  key={seg.label}
                  className="h-full flex items-center justify-center"
                  style={{ backgroundColor: seg.color, width: seg.width }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap px-2">
                    {seg.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Descriptions */}
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toneSegments.map((seg) => (
              <StaggerItem key={seg.label}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 block h-3 w-3 rounded-full shrink-0"
                    style={{ backgroundColor: seg.color }}
                  />
                  <div>
                    <p className="font-semibold text-text mb-1">{seg.label}</p>
                    <p className="text-sm text-text/60 leading-relaxed">{seg.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionDivider label="Words" />

      {/* ---- Word Bank ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Vocabulary
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
              Word Bank
            </h2>
          </Reveal>

          {/* Positive */}
          <Reveal delay={0.1}>
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Positive
              </h3>
              <div className="flex flex-wrap gap-3">
                {wordBankDisplay.positive.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-light text-primary border border-primary/10"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Analytical */}
          <Reveal delay={0.2}>
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-[#7B61FF] mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7B61FF]" />
                Analytical
              </h3>
              <div className="flex flex-wrap gap-3">
                {wordBankDisplay.analytical.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#F0ECFF] text-[#7B61FF] border border-[#7B61FF]/10"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Avoid */}
          <Reveal delay={0.3}>
            <div>
              <h3 className="text-lg font-semibold text-red-500 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Avoid
              </h3>
              <div className="flex flex-wrap gap-3">
                {wordBankDisplay.avoid.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-50 text-red-400 border border-red-200 line-through decoration-red-400/60"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider label="Messaging" />

      {/* ---- Messaging Examples ---- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              By Audience
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
              Messaging Examples
            </h2>
          </Reveal>

          {/* Tab bar */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {audienceTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-text/70 hover:bg-white/80 shadow-sm'
                  }`}
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {audienceTabs
              .filter((t) => t.key === activeTab)
              .map((tab) => (
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-4"
                >
                  {tab.messages.map((msg, i) => (
                    <Card key={i} hover={false} padding="lg" className="border border-border">
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm">
                          {tab.icon}
                        </span>
                        <p className="text-text/80 leading-relaxed italic text-base md:text-lg">
                          &laquo; {msg} &raquo;
                        </p>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </section>

      <SectionDivider label="CTAs" />

      {/* ---- CTA Styles ---- */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Calls to Action
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
              CTA Styles
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaExamples.map((group) => (
              <StaggerItem key={group.tier}>
                <Card hover={false} padding="lg" className="border border-border text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
                    {group.tier}
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    {group.examples.map((label) => (
                      <Button key={label} variant={group.variant} size="md">
                        {label}
                      </Button>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  )
}
