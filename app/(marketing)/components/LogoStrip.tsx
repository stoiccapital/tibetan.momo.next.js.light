export default function LogoStrip() {
  const trustItems = [
    '★ 5.0/5 auf Google',
    '70+ Bewertungen',
    'Frisch zubereitete Momos',
    'Familienbetrieb in Regensdorf',
  ]

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <p className="text-center text-sm text-neutral-600 mb-8">Geliebt von Gästen aus ganz Zürich</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, i) => (
            <span
              key={i}
              className="text-neutral-700 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

