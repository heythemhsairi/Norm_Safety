import { motion } from 'framer-motion'

interface TimelineStep {
  phase: string
  title: string
  description: string
  status?: 'done' | 'active' | 'upcoming'
}

interface ProcessTimelineProps {
  steps: TimelineStep[]
  className?: string
}

const statusConfig = {
  done: {
    dot: 'bg-primary border-primary-light',
    line: 'bg-primary',
    phase: 'text-primary',
    ring: 'ring-primary-light',
  },
  active: {
    dot: 'bg-primary border-primary-light',
    line: 'bg-primary',
    phase: 'text-primary',
    ring: 'ring-primary-light',
  },
  upcoming: {
    dot: 'bg-neutral border-neutral',
    line: 'bg-neutral',
    phase: 'text-text-muted',
    ring: 'ring-neutral',
  },
} as const

export default function ProcessTimeline({
  steps,
  className = '',
}: ProcessTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {steps.map((step, index) => {
        const status = step.status ?? 'upcoming'
        const config = statusConfig[status]
        const isLast = index === steps.length - 1

        return (
          <motion.div
            key={index}
            className="relative flex gap-6 pb-10 last:pb-0"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Timeline column: dot + line */}
            <div className="relative flex flex-col items-center">
              {/* Dot */}
              <div
                className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ring-4 ${config.dot} ${config.ring}`}
              >
                {status === 'done' && (
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {status === 'active' && (
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                )}
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div
                  className={`absolute top-8 h-[calc(100%-2rem)] w-0.5 ${config.line} opacity-30`}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-0.5">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${config.phase}`}
              >
                {step.phase}
              </span>
              <h4 className="mt-1 text-base font-semibold text-text">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
