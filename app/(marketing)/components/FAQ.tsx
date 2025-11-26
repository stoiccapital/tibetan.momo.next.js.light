export default function FAQ() {
  const faqs = [
    {
      question: 'Macht ihr alles frisch?',
      answer: 'Ja. Unsere Momos werden frisch zubereitet – bitte rechne ca. 10 Minuten ein.',
    },
    {
      question: 'Brauche ich eine Reservation?',
      answer: 'Für Take-away nicht. Für grössere Bestellungen oder Events melde dich bitte frühzeitig.',
    },
    {
      question: 'Gibt es vegetarische Optionen?',
      answer: 'Ja, wir haben vegetarische Momos und weitere fleischlose Gerichte.',
    },
    {
      question: 'Bietet ihr Catering an?',
      answer: 'Ja, für Partys, Firmen-Events, Geburtstage und mehr – einfach anfragen.',
    },
    {
      question: 'Wo genau befindet ihr euch?',
      answer: 'Im Zentrum 1, 8105 Regensdorf – Haupteingang West, Zentrum Regensdorf.',
    },
    {
      question: 'Wie kann ich bestellen?',
      answer: 'Am einfachsten per WhatsApp oder Telefon – die Buttons auf der Website führen dich direkt dorthin.',
    },
  ]

  return (
    <section id="faq" className="bg-white text-neutral-900 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-serif">
            Häufige Fragen
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 bg-white/90 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

