import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PillarCardProps {
  icon: ReactNode
  title: string
  description: string
  color: 'blue' | 'green' | 'purple'
  className?: string
}

const colorMap = {
  blue: {
    bg: 'bg-blue-light',
    text: 'text-blue',
    accent: 'bg-blue',
  },
  green: {
    bg: 'bg-primary-light',
    text: 'text-primary',
    accent: 'bg-primary',
  },
  purple: {
    bg: 'bg-purple-light',
    text: 'text-purple',
    accent: 'bg-purple',
  },
} as const

export default function PillarCard({
  icon,
  title,
  description,
  color,
  className = '',
}: PillarCardProps) {
  const scheme = colorMap[color]

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-white shadow-md ${className}`}
      whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.03)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full ${scheme.accent}`} />

      <div className="p-6">
        {/* Icon area */}
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${scheme.bg} ${scheme.text} text-xl`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className={`mb-2 text-lg font-semibold text-text`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
