export default function Pricing() {
  const menuItems = [
    {
      name: 'Klassische Rind-Momo',
      description: 'Saftiges Schweizer Rindfleisch, authentisch gewürzt.',
      prices: [
        '5 Stück – 10 CHF',
        '8 Stück – 15 CHF',
      ],
    },
    {
      name: 'Vegetarische Momo',
      description: 'Spinat, Kartoffeln, Weisskohl & Käse – perfekt ausgewogen.',
      prices: [
        '5 Stück – 10 CHF',
        '8 Stück – 15 CHF',
      ],
      popular: true,
    },
    {
      name: 'Frittierte Momo',
      description: 'Knusprig frittiert – mit Rind oder vegetarisch.',
      prices: [
        '5 Stück – 12 CHF',
        '8 Stück – 17 CHF',
      ],
    },
  ]

  return (
    <section id="menu" className="bg-gray-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-serif">
            Unsere beliebtesten Momos
          </h2>
          <a
            href="#menu"
            className="text-neutral-700 hover:text-neutral-900 text-sm underline"
          >
            Komplette Speisekarte ansehen →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                item.popular
                  ? 'border-neutral-300 bg-white shadow-soft ring-1 ring-brand-100 hover:shadow-2xl hover:-translate-y-1'
                  : 'border-neutral-200 bg-white/90 shadow-sm hover:shadow-soft hover:-translate-y-1'
              } transition-all duration-200`}
            >
              {item.popular && (
                <div className="text-xs font-semibold text-brand-700 bg-brand-50 inline-block px-3 py-1 rounded-full mb-4">
                  Beliebt
                </div>
              )}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{item.name}</h3>
              <p className="text-neutral-700 mb-6">{item.description}</p>
              <ul className="space-y-3 mb-8">
                {item.prices.map((price, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">✓</span>
                    <span className="text-neutral-700">{price}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-medium transition-colors block text-center ${
                  item.popular
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                Bestellen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

