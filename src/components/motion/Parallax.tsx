import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

type Direction = 'up' | 'down'

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: Direction
}

export default function Parallax({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const distance = speed * 100
  const range = direction === 'up' ? [distance, -distance] : [-distance, distance]

  const y = useTransform(scrollYProgress, [0, 1], range)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: shouldReduceMotion ? 0 : y }}
    >
      {children}
    </motion.div>
  )
}
