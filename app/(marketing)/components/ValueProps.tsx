export default function ValueProps() {
  const valueProps = [
    {
      icon: '🏔️',
      title: 'Familienrezepte aus dem Himalaya',
      description: 'Wir kochen nach Originalrezepten, mit denen wir selbst aufgewachsen sind.',
    },
    {
      icon: '👨‍🍳',
      title: 'Frisch und handgemacht',
      description: 'Jede Momo wird von Hand gefüllt und frisch zubereitet – keine Massenware.',
    },
    {
      icon: '🥩',
      title: 'Ehrliche Zutaten',
      description: 'Schweizer Fleisch, frisches Gemüse und ausgewählte Gewürze.',
    },
    {
      icon: '📍',
      title: 'Zentral in Regensdorf',
      description: 'Einfach erreichbar im Zentrum Regensdorf – ideal für Take-away oder eine kurze Pause.',
    },
  ]

  return (
    <section id="about" className="bg-gray-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center font-serif">
          Warum Tibetan Momo?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 bg-white/90 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

