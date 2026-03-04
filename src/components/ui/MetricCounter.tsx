import { useRef, useEffect, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface MetricCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  className?: string
}

export default function MetricCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
  className = '',
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <p className="text-4xl font-bold tracking-tight text-text md:text-5xl">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-text-muted">{label}</p>
    </div>
  )
}
