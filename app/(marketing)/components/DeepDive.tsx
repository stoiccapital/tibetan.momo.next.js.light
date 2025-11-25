export default function DeepDive() {
  const steps = [
    {
      number: '01',
      title: 'Bestellen',
      description: 'Schreib uns per WhatsApp oder ruf kurz an und sag uns, was du möchtest.',
    },
    {
      number: '02',
      title: 'Wir bereiten frisch zu',
      description: 'Wir kochen deine Momos frisch – meist brauchen wir ca. 10 Minuten.',
    },
    {
      number: '03',
      title: 'Abholen oder liefern lassen',
      description: 'Hol deine Bestellung im Zentrum Regensdorf ab oder nutze Lieferdienste wie Uber Eats (falls aktiv).',
    },
    {
      number: '04',
      title: 'Geniessen',
      description: 'Noch heiss, direkt aus unserer Küche – am besten sofort geniessen. 😉',
    },
  ]

  return (
    <section id="service">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            So einfach geht's
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Von der Bestellung bis zu deinen Momos
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ob spontan oder geplant – so kommst du schnell zu deinen frisch zubereiteten Momos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-white/5" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/5 bg-slate-900/20 flex items-center justify-center text-slate-300 font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Placeholder */}
          <div>
            <div className="h-96 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

