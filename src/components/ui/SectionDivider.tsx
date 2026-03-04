interface SectionDividerProps {
  label?: string
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

const spacingClasses: Record<NonNullable<SectionDividerProps['spacing']>, string> = {
  sm: 'my-8',
  md: 'my-16',
  lg: 'my-24',
}

export default function SectionDivider({
  label,
  spacing = 'md',
  className = '',
}: SectionDividerProps) {
  return (
    <div className={`relative ${spacingClasses[spacing]} ${className}`}>
      <div className="gradient-line w-full" />

      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-bg px-4 text-sm font-medium text-text-muted">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
