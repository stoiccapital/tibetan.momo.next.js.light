export default function FinalCTA() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Bereit für frische Momos?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Bestell jetzt oder schau spontan vorbei – wir freuen uns auf deinen Besuch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-100 text-[#050509] rounded-lg font-medium hover:bg-slate-200 transition-colors"
            >
              Jetzt per WhatsApp bestellen
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border border-white/5 text-slate-100 rounded-lg font-medium hover:bg-white/5 transition-colors"
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

