import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const baseClasses = `bg-white rounded-2xl shadow-md ${paddingClasses[padding]} ${className}`

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{
          y: -4,
          boxShadow:
            '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.03)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={baseClasses}>{children}</div>
}
