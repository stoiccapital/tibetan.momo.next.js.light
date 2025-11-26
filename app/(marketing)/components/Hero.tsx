export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-neutral-600 uppercase tracking-wider">
              Authentische tibetische Küche
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Authentische tibetische Momos – frisch, handgemacht, voller Herz
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              So schmeckt Tibet: traditionelle Rezepte, frische Zutaten und echte Familienküche im Zentrum Regensdorf.
            </p>
            <div className="text-neutral-600 text-sm">
              📍 Regensdorf Zentrum · ⏰ Di–Sa 11–20 Uhr
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#menu"
                className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors text-center"
              >
                Speisekarte ansehen
              </a>
              <a
                href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 text-neutral-900 rounded-lg font-medium hover:bg-neutral-50 transition-colors text-center"
              >
                Jetzt bestellen
              </a>
            </div>
          </div>

          {/* Right Placeholder */}
          <div>
            <div className="h-64 md:h-80 rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

