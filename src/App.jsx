import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'

function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-neutral-900 font-sans">
      <Header />
      <Hero />
      <Benefits />
      <section className="py-12 md:py-16 bg-[#f7f3ee]">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-neutral-500 leading-relaxed">
          <p>
            Minimal, warm, natural landing page design for a premium children's wooden toy brand. Full-width hero video at top, soft beige and natural wood tone palette, elegant serif + clean sans-serif pairing, centered email capture box, refined “COMING SOON” label. Three benefit sections with soft icons and simple layout. Style inspired by Rare Beauty website + Scandinavian calm interior aesthetics. Light, breathable spacing, premium brand feel.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-xs font-medium">Aspect Ratio (Desktop Hero Video)</p>
              <p className="text-base font-semibold mt-1">16:9</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-xs font-medium">Aspect Ratio (Phone Hero Video)</p>
              <p className="text-base font-semibold mt-1">9:16</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
