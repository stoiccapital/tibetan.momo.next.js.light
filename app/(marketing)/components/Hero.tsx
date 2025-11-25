export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-slate-400 uppercase tracking-wider">
              Authentische tibetische Küche
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              Authentische tibetische Momos – frisch, handgemacht, voller Herz
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              So schmeckt Tibet: traditionelle Rezepte, frische Zutaten und echte Familienküche im Zentrum Regensdorf.
            </p>
            <div className="text-slate-400 text-sm">
              📍 Regensdorf Zentrum · ⏰ Di–Sa 11–20 Uhr
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#menu"
                className="px-6 py-3 bg-slate-100 text-[#050509] rounded-lg font-medium hover:bg-slate-200 transition-colors text-center"
              >
                Speisekarte ansehen
              </a>
              <a
                href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/5 text-slate-100 rounded-lg font-medium hover:bg-white/5 transition-colors text-center"
              >
                Jetzt bestellen
              </a>
            </div>
          </div>

          {/* Right Placeholder */}
          <div>
            <div className="h-64 md:h-80 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

