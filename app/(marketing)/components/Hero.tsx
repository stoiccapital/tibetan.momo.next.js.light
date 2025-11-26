export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-brand-700 uppercase tracking-[0.2em]">
              Authentische tibetische Küche
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight font-serif">
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
                className="px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors text-center shadow-soft"
              >
                Speisekarte ansehen
              </a>
              <a
                href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 text-neutral-900 rounded-xl font-medium hover:bg-neutral-50 transition-colors text-center"
              >
                Jetzt bestellen
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="h-64 md:h-80 rounded-3xl border border-neutral-200 bg-gradient-to-br from-brand-100 via-white to-brand-50 shadow-soft overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
              {/* Placeholder for image – replace with real img later */}
              <div className="w-full h-full flex items-center justify-center text-neutral-300 text-sm">
                Foto von frischen Momos hier einfügen
              </div>
            </div>

            {/* Floating badge card */}
            <div className="absolute -bottom-6 left-6 w-56 rounded-2xl bg-white border border-neutral-200 shadow-soft px-4 py-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center text-lg">
                🥟
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-600">
                  Heute frisch gemacht
                </div>
                <div className="text-sm font-medium text-neutral-900">
                  70+ Gäste ★ 5.0 in Zürich
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

