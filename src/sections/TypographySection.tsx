import Reveal from '../components/motion/Reveal'

export default function TypographySection() {
  return (
    <section id="typography" className="slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Typography
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Type System
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mb-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Primary Typeface
            </p>
            <p className="mb-6 text-4xl font-bold text-text md:text-5xl">Inter</p>
            <div className="space-y-3 border-t border-border pt-6">
              <p className="text-sm font-light text-text/60">
                Light &mdash; The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-text/70">
                Regular &mdash; The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm font-medium text-text/80">
                Medium &mdash; The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm font-semibold text-text/90">
                Semibold &mdash; The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm font-bold text-text">
                Bold &mdash; The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Arabic Typeface
            </p>
            <p
              className="mb-6 text-4xl font-bold text-text md:text-5xl"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              IBM Plex Sans Arabic
            </p>
            <div className="border-t border-border pt-6" dir="rtl" lang="ar">
              <p
                className="text-lg leading-loose text-text/70"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {'\u0648\u062C\u062F\u0627\u0646 \u0633\u0628\u064E\u0627\u064A\u0631 \u2014 \u0646\u0638\u0627\u0645 \u0631\u0641\u0627\u0647\u064A\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
