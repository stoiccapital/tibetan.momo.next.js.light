export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-slate-100 font-semibold text-lg mb-4">Tibetan Momo</div>
            <p className="text-slate-400 text-sm mb-4">
              Im Zentrum 1<br />
              8105 Regensdorf<br />
              Haupteingang West, Zentrum Regensdorf
            </p>
            <p className="text-slate-400 text-sm mb-2">
              <strong className="text-slate-300">Öffnungszeiten:</strong><br />
              Dienstag – Samstag: 11:00 – 20:00
            </p>
            <p className="text-slate-400 text-sm">
              <strong className="text-slate-300">Kontakt:</strong><br />
              Telefon: <a href="tel:+41765795926" className="hover:text-slate-100">+41 76 579 59 26</a><br />
              Email: <a href="mailto:lamotibo8@yahoo.com" className="hover:text-slate-100">lamotibo8@yahoo.com</a>
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Restaurant</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-slate-100 text-sm">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#menu" className="text-slate-400 hover:text-slate-100 text-sm">
                  Speisekarte
                </a>
              </li>
              <li>
                <a href="#service" className="text-slate-400 hover:text-slate-100 text-sm">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-slate-100 text-sm">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-slate-100 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-400">
          © 2025 Tibetan Momo. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

