export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Nicht nur das Essen ist unglaublich – auch die herzliche Atmosphäre macht den Besuch besonders.',
      name: 'Simona',
    },
    {
      quote: 'Saftige Momos, perfekte Gewürze, super freundliche Familie. Ein echtes Highlight in Regensdorf!',
      name: 'Diellza',
    },
    {
      quote: 'Die besten Momos, die ich je gegessen habe – frisch, authentisch und mit viel Liebe gekocht.',
      name: 'Friederike',
    },
    {
      quote: 'Ich esse seit meiner Kindheit Momos – so authentisch wie hier habe ich sie in der Schweiz kaum gefunden.',
      name: 'Trinley',
    },
    {
      quote: 'Sehr nette Leute, frische Qualität, faire Preise. Wer in Regensdorf ist und hier nicht isst, verpasst etwas.',
      name: 'Leandro',
    },
  ]

  return (
    <section id="testimonials" className="bg-white text-neutral-900 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-serif">
            Was Gäste über uns sagen
          </h2>
          <p className="text-lg text-neutral-700 mb-2">
            ★ 5.0/5 basierend auf 70+ Google-Bewertungen
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 bg-white/90 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
            >
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-neutral-900">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

