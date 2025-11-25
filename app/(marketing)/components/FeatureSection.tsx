interface FeatureSectionProps {
  variant: 'left' | 'right'
  eyebrow?: string
  title: string
  description: string
  bullets?: string[]
}

export default function FeatureSection({ variant, eyebrow, title, description, bullets }: FeatureSectionProps) {
  const isRight = variant === 'right'
  const defaultBullets = bullets || []

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRight ? 'md:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={isRight ? 'md:col-start-2' : ''}>
            {eyebrow && (
              <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
                {eyebrow}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {description}
            </p>
            {defaultBullets.length > 0 && (
              <ul className="space-y-4">
                {defaultBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">✓</span>
                    <span className="text-slate-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Placeholder Screenshot */}
          <div className={isRight ? 'md:col-start-1 md:row-start-1' : ''}>
            <div className="h-64 md:h-80 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

