export default function Footer() {
  return (
    <footer className="bg-gray-100 text-neutral-700 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-neutral-900 font-semibold text-lg mb-4">Tibetan Momo</div>
            <p className="text-neutral-600 text-sm mb-4">
              Im Zentrum 1<br />
              8105 Regensdorf<br />
              Haupteingang West, Zentrum Regensdorf
            </p>
            <p className="text-neutral-600 text-sm mb-2">
              <strong className="text-neutral-800">Öffnungszeiten:</strong><br />
              Dienstag – Samstag: 11:00 – 20:00
            </p>
            <p className="text-neutral-600 text-sm">
              <strong className="text-neutral-800">Kontakt:</strong><br />
              Telefon: <a href="tel:+41765795926" className="hover:text-neutral-900">+41 76 579 59 26</a><br />
              Email: <a href="mailto:lamotibo8@yahoo.com" className="hover:text-neutral-900">lamotibo8@yahoo.com</a>
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4">Restaurant</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#menu" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Speisekarte
                </a>
              </li>
              <li>
                <a href="#service" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600">
          © 2025 Tibetan Momo. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

