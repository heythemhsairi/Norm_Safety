import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import TrustChip from '../components/ui/TrustChip';
import Button from '../components/ui/Button';
import MetricCounter from '../components/ui/MetricCounter';
import Reveal from '../components/motion/Reveal';

export default function Cover() {
  return (
    <PageTransition className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-28 pb-20">
        {/* Breathing Icon */}
        <motion.img
          src="/assets/wejden-spire-icon.svg"
          alt="Wejden Spire"
          className="w-20 h-20 mb-10"
          animate={{ scale: [1.0, 1.02, 1.0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Headline */}
        <Reveal>
          <h1 className="text-gradient text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Wejden Spire
          </h1>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl text-text/80 font-light max-w-2xl text-center leading-relaxed mb-4">
            The brand built to lead workplace mental health.
          </p>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.2}>
          <p className="text-base md:text-lg text-text/60 max-w-2xl text-center leading-relaxed mb-14">
            A strategic rebrand positioning Wejden Spire as the trusted enterprise
            standard for emotional wellbeing.
          </p>
        </Reveal>

        {/* Trust Chips */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <TrustChip
              label="Privacy-first"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            />
            <TrustChip
              label="Anonymous insights"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              }
            />
            <TrustChip
              label="Enterprise security"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
            <TrustChip
              label="Global-ready"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
            />
          </div>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            <Button variant="primary" size="lg" href="/strategy">
              View Strategy
            </Button>
            <Button variant="secondary" size="lg" href="/deliverables">
              View Deliverables
            </Button>
            <Button variant="outline" size="lg" href="/present">
              Presentation Mode
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Market Context Section */}
      <section className="px-6 pb-28">
        <Reveal>
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary text-center mb-2">
              Why it matters
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-16">
              A brand shaped by market momentum
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <MetricCounter
                value={20}
                suffix="%"
                label="CAGR of the global workplace wellbeing market through 2030"
              />
              <MetricCounter
                value={85}
                suffix="%"
                label="of enterprises plan to increase mental-health investment"
              />
              <MetricCounter
                value={11}
                suffix="x"
                label="higher brand recall when purpose aligns with positioning"
              />
              <MetricCounter
                value={2}
                suffix="in3"
                label="employees consider wellbeing support when choosing an employer"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
