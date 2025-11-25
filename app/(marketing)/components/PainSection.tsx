export default function PainSection() {
  const painPoints = [
    {
      title: 'Industrie-Food statt echter Küche',
      description: 'Viele Restaurants setzen auf Massenware und Fertigprodukte – ohne Seele und echte Geschmackserlebnisse.',
    },
    {
      title: 'Liebloses Take-away ohne Persönlichkeit',
      description: 'Standardisierte Gerichte, die überall gleich schmecken – ohne Charakter und persönliche Note.',
    },
    {
      title: 'Keine authentischen Momos in der Nähe',
      description: 'Echte tibetische Momos sind schwer zu finden – viele Imitate, aber wenig Authentizität.',
    },
    {
      title: 'Unklare Öffnungszeiten & komplizierte Bestellungen',
      description: 'Unklare Informationen, komplizierte Bestellprozesse und unzuverlässige Servicezeiten.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 text-center">
          Wenn du mehr willst als Fast Food…
        </h2>
        <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto">
          Viele Restaurants schmecken gleich – vieles ist industriell, schnell und ohne Seele. Du suchst etwas, das wirklich hausgemacht ist, mit echten Gewürzen und einem Gefühl von Zuhause?
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {pain.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

