export default function FinalCTA() {
  return (
    <section className="bg-gray-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Bereit für frische Momos?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Bestell jetzt oder schau spontan vorbei – wir freuen uns auf deinen Besuch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              Jetzt per WhatsApp bestellen
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border border-neutral-300 text-neutral-900 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

