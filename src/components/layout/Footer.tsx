export default function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="gradient-line" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-medium text-text-muted">
            Wejden Spire{' '}
            <span className="mx-1 text-border">&mdash;</span>{' '}
            Brand Proposal 2026
          </p>

          <span className="inline-block rounded-full border border-border bg-neutral/40 px-3 py-0.5 text-xs font-medium tracking-wider text-text-muted uppercase">
            Confidential
          </span>
        </div>
      </div>
    </footer>
  )
}
