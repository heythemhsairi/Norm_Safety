import Reveal from '../components/motion/Reveal'

export default function ClearSpaceSection() {
  return (
    <section id="clearspace" className="slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Clear Space
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Safe Zone
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mb-10 flex items-center justify-center rounded-2xl bg-bg p-8 ring-1 ring-border sm:p-12">
            <img
              src="/assets/savezone.svg"
              alt="Logo safe zone diagram"
              className="w-full max-w-lg"
            />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <p className="text-base leading-relaxed text-text/70">
                Maintain a minimum clear space of &ldquo;X&rdquo; around the logo at all times.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <p className="text-base leading-relaxed text-text/70">
                No text, graphic, or border should enter the exclusion zone.
              </p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
