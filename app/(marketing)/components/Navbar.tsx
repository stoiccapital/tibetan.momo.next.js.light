export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-neutral-900 font-semibold text-lg">
            <span className="font-semibold tracking-tight">Tibetan Momo</span>
          </div>

          {/* Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-neutral-700 hover:text-neutral-900 text-sm">
              Über Uns
            </a>
            <a href="#menu" className="text-neutral-700 hover:text-neutral-900 text-sm">
              Speisekarte
            </a>
            <a href="#service" className="text-neutral-700 hover:text-neutral-900 text-sm">
              Service
            </a>
            <a href="#testimonials" className="text-neutral-700 hover:text-neutral-900 text-sm">
              Bewertungen
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Jetzt bestellen
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

