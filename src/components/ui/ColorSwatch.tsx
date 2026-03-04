interface ColorSwatchProps {
  color: string
  name: string
  hex: string
  usage?: string
  ratio?: string
  className?: string
}

export default function ColorSwatch({
  color,
  name,
  hex,
  usage,
  ratio,
  className = '',
}: ColorSwatchProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Color swatch */}
      <div
        className="h-20 w-full rounded-xl shadow-sm border border-black/5"
        style={{ backgroundColor: color }}
      />

      {/* Info */}
      <div className="mt-3 space-y-0.5">
        <p className="text-sm font-semibold text-text">{name}</p>
        <p className="font-mono text-xs text-text-muted uppercase">{hex}</p>
        {usage && (
          <p className="text-xs text-text-muted">{usage}</p>
        )}
        {ratio && (
          <p className="text-xs font-medium text-text-muted">
            {ratio}
          </p>
        )}
      </div>
    </div>
  )
}
