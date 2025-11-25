"use client"

import React from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050509] text-slate-100">
      <h1 className="text-2xl font-semibold mb-4">Etwas ist schiefgelaufen.</h1>
      <p className="mb-6 text-sm opacity-70">{error?.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-slate-100 text-[#050509] text-sm font-medium hover:bg-slate-200 transition-colors"
      >
        Seite neu laden
      </button>
    </div>
  )
}

