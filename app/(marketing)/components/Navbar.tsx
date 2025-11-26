"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#about", label: "Über Uns" },
    { href: "#menu", label: "Speisekarte" },
    { href: "#service", label: "Service" },
    { href: "#testimonials", label: "Bewertungen" },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between rounded-full bg-white/90 border border-neutral-200/70 backdrop-blur-md shadow-soft px-4 py-2 md:px-6 md:py-2.5">
          {/* Logo */}
          <div className="text-neutral-900 font-semibold text-base md:text-lg">
            <span className="font-semibold tracking-tight">Tibetan Momo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
              Jetzt bestellen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors"
            aria-label="Menü öffnen"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-neutral-800 rounded-full" />
              <span className="block h-0.5 w-4 bg-neutral-800 rounded-full" />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-3 rounded-2xl bg-white border border-neutral-200 shadow-soft p-4 md:hidden">
            <div className="flex flex-col gap-3 mb-4 text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-700 hover:text-neutral-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/41765795926?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20Momos%20bestellen."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
              Jetzt bestellen
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

