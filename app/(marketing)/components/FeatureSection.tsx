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
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRight ? 'md:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={isRight ? 'md:col-start-2' : ''}>
            {eyebrow && (
              <div className="text-sm text-neutral-600 uppercase tracking-wider mb-4">
                {eyebrow}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-serif">
              {title}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {description}
            </p>
            {defaultBullets.length > 0 && (
              <ul className="space-y-4">
                {defaultBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✓</span>
                    <span className="text-neutral-700">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Placeholder Screenshot */}
          <div className={isRight ? 'md:col-start-1 md:row-start-1' : ''}>
            <div className="h-64 md:h-80 rounded-3xl border border-neutral-200 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-soft overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs md:text-sm">
                Platzhalter für Event- / Küchenfoto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

