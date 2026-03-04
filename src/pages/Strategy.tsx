import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Reveal from '../components/motion/Reveal';
import SectionDivider from '../components/ui/SectionDivider';
import PillarCard from '../components/ui/PillarCard';
import Card from '../components/ui/Card';
import { Stagger, StaggerItem } from '../components/motion/Stagger';

export default function Strategy() {
  return (
    <PageTransition className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-28 pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 text-center">
            Brand Proposal
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-text text-center tracking-tight mb-6">
            Brand Strategy
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-text/70 font-light max-w-2xl text-center leading-relaxed">
            From Moodicament to Wejden Spire &mdash; a strategic transformation.
          </p>
        </Reveal>
      </section>

      <SectionDivider label="Diagnostic" spacing="lg" />

      {/* Diagnostic */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-4">
            Why rebrand?
          </h2>
          <p className="text-lg text-text/70 leading-relaxed mb-10">
            The Moodicament name, while creative, posed several strategic challenges
            that limited the brand's growth potential across both French-speaking
            and international markets.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StaggerItem>
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Clinical connotation</h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    The suffix "-cament" directly evokes the French word
                    "m&eacute;dicament" (medication), creating an unintended association
                    with medical treatment rather than holistic wellbeing.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Too metric-focused</h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    The brand was perceived as data-driven and KPI-centric, lacking human
                    warmth. Its visual identity and tone felt like a generic SaaS tool,
                    not a platform built around people.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">Lacked warmth</h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    The human-first philosophy was not reflected in the brand identity.
                    Employees did not feel genuinely invited to express themselves
                    in an authentic, safe way.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">International barrier</h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    The French wordplay does not translate into other languages, making
                    the brand difficult to position in English-speaking and Gulf markets
                    where growth opportunities are strongest.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        </Stagger>
      </section>

      <SectionDivider label="Positioning" spacing="lg" />

      {/* Positioning Statement */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-8">
            Positioning Statement
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative rounded-2xl bg-white border border-primary/10 p-10 md:p-14">
            <div className="absolute top-6 left-8 text-6xl font-serif text-primary/15 leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="text-lg md:text-xl text-text/80 leading-relaxed italic relative z-10 pl-4">
              Wejden Spire is the emotional-wellbeing platform that transforms
              anonymous employee signals into actionable insights for HR
              &mdash; uniting artificial intelligence with human intelligence.
            </blockquote>
            <div className="absolute bottom-6 right-8 text-6xl font-serif text-primary/15 leading-none select-none rotate-180">
              &ldquo;
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider label="Audiences" spacing="lg" />

      {/* Key Audiences */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-4">
            Key Audiences
          </h2>
          <p className="text-lg text-text/60 mb-12 max-w-2xl">
            Three distinct groups, one shared goal: a healthier,
            higher-performing work environment.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <Card hover padding="lg" className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2FBF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Employees</h3>
              <ul className="space-y-3 text-sm text-text/60 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">&#10003;</span>
                  A safe, confidential space to express how they feel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">&#10003;</span>
                  Guaranteed anonymity at every interaction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">&#10003;</span>
                  Personal development and growth tools
                </li>
              </ul>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg" className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">HR & Leadership</h3>
              <ul className="space-y-3 text-sm text-text/60 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-1 shrink-0">&#10003;</span>
                  Real-time data on emotional climate
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-1 shrink-0">&#10003;</span>
                  Trend detection and alerts for proactive action
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-1 shrink-0">&#10003;</span>
                  Actionable insights to guide decisions
                </li>
              </ul>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg" className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#7B61FF]/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">IT & Security</h3>
              <ul className="space-y-3 text-sm text-text/60 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] mt-1 shrink-0">&#10003;</span>
                  GDPR compliance and international standards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] mt-1 shrink-0">&#10003;</span>
                  End-to-end data encryption
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] mt-1 shrink-0">&#10003;</span>
                  Certified privacy-by-design architecture
                </li>
              </ul>
            </Card>
          </StaggerItem>
        </Stagger>
      </section>

      <SectionDivider label="Brand Pillars" spacing="lg" />

      {/* Brand Pillars */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-4">
            The four pillars
          </h2>
          <p className="text-lg text-text/60 mb-12 max-w-2xl">
            Four foundations that guide every product decision, every interaction,
            and every communication from Wejden Spire.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem>
            <PillarCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              }
              title="Human Wellbeing"
              description="People at the center of every decision"
              color="green"
            />
          </StaggerItem>

          <StaggerItem>
            <PillarCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
              title="Data & Insights"
              description="Emotional signals transformed into intelligence"
              color="blue"
            />
          </StaggerItem>

          <StaggerItem>
            <PillarCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
              title="Security & Privacy"
              description="Absolute trust in confidentiality"
              color="purple"
            />
          </StaggerItem>

          <StaggerItem>
            <PillarCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              }
              title="Measurable Impact"
              description="Concrete, provable results for the organization"
              color="blue"
            />
          </StaggerItem>
        </Stagger>
      </section>

      <SectionDivider label="Value Chain" spacing="lg" />

      {/* Value Chain — Flow Diagram */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-4">
            Our value chain
          </h2>
          <p className="text-lg text-text/60 mb-14 max-w-2xl">
            From raw emotion to concrete action &mdash; a unique pipeline that
            transforms human signals into strategic intelligence.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1: Emotions */}
            <motion.div
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white border border-primary/20 min-w-[160px]"
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(47, 191, 113, 0.12)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2FBF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text">Emotions</span>
              <span className="text-xs text-text/50 mt-1">Free expression</span>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center text-text/20 px-2">
              <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                <path d="M0 8h36M30 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden text-text/20">
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none">
                <path d="M8 0v36M2 30l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2: Signals */}
            <motion.div
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white border border-blue/20 min-w-[160px]"
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(47, 107, 255, 0.12)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text">Signals</span>
              <span className="text-xs text-text/50 mt-1">Anonymization</span>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center text-text/20 px-2">
              <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                <path d="M0 8h36M30 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden text-text/20">
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none">
                <path d="M8 0v36M2 30l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3: Insights */}
            <motion.div
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white border border-purple/20 min-w-[160px]"
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(123, 97, 255, 0.12)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7B61FF]/10 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text">Insights</span>
              <span className="text-xs text-text/50 mt-1">AI intelligence</span>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center text-text/20 px-2">
              <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                <path d="M0 8h36M30 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden text-text/20">
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none">
                <path d="M8 0v36M2 30l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 4: Actions */}
            <motion.div
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white border border-blue/20 min-w-[160px]"
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(47, 107, 255, 0.12)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text">Actions</span>
              <span className="text-xs text-text/50 mt-1">Real impact</span>
            </motion.div>
          </div>
        </Reveal>
      </section>

      <SectionDivider label="Target Market" spacing="lg" />

      {/* Target Market */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <Reveal>
          <h2 className="text-3xl font-bold text-text mb-4">
            Target market & opportunity
          </h2>
          <p className="text-lg text-text/60 mb-12 max-w-2xl">
            A dual-region strategy combining European enterprise with the
            dynamism of the Gulf market.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StaggerItem>
            <Card hover padding="lg" className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Enterprise</h3>
              <p className="text-sm text-text/60 leading-relaxed mb-4">
                Large corporations and mid-cap European companies seeking GDPR-compliant
                wellbeing solutions, with structured HR teams and a dedicated budget
                for quality of work life.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-blue/5 text-blue font-medium">
                  500+ employees
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-blue/5 text-blue font-medium">
                  GDPR-native
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-blue/5 text-blue font-medium">
                  Measurable ROI
                </span>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card hover padding="lg" className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2FBF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Gulf & Khalij</h3>
              <p className="text-sm text-text/60 leading-relaxed mb-4">
                The Gulf market is investing heavily in HR transformation and
                workplace modernization. The name "Wejden" &mdash; derived from the
                Arabic word meaning "deep feelings" &mdash; carries strong cultural
                resonance across the region.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">
                  Vision 2030
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">
                  Cultural resonance
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">
                  High growth
                </span>
              </div>
            </Card>
          </StaggerItem>
        </Stagger>
      </section>
    </PageTransition>
  );
}
