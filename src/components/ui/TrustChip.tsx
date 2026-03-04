import { type ReactNode } from 'react'

interface TrustChipProps {
  icon?: ReactNode
  label: string
  className?: string
}

export default function TrustChip({ icon, label, className = '' }: TrustChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-primary-light border border-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary ${className}`}
    >
      {icon && <span className="flex-shrink-0 text-[1em]">{icon}</span>}
      {label}
    </span>
  )
}
