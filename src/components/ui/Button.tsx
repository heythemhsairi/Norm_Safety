import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-neutral text-text hover:bg-neutral/80',
  ghost:
    'bg-transparent text-text hover:bg-neutral/50',
  outline:
    'bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary-light',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'

  const disabledClasses = disabled ? 'opacity-50 pointer-events-none' : ''

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabledClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a href={href} className={classes}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
