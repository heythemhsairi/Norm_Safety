import { useRef } from 'react'
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion'

/* ------------------------------------------------------------------ */
/*  Stagger container                                                  */
/* ------------------------------------------------------------------ */

interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  containerDelay?: number
}

const containerVariants = (
  staggerDelay: number,
  containerDelay: number,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: containerDelay,
    },
  },
})

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  containerDelay = 0,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants(staggerDelay, containerDelay)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  StaggerItem                                                        */
/* ------------------------------------------------------------------ */

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
