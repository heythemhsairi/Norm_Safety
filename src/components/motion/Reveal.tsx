import { useRef } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type Variant,
} from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
}

function getInitialOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case 'up':
      return { x: 0, y: 40 }
    case 'down':
      return { x: 0, y: -40 }
    case 'left':
      return { x: 40, y: 0 }
    case 'right':
      return { x: -40, y: 0 }
  }
}

export default function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  const offset = getInitialOffset(direction)

  const hidden: Variant = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: offset.x, y: offset.y }

  const visible: Variant = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
