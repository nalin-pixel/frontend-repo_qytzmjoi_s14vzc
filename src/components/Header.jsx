import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="font-serif text-xl tracking-tight text-neutral-900">woodkind</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
          <span>About</span>
          <span>Craft</span>
          <span>Contact</span>
        </nav>
      </div>
    </header>
  )
}

export default Header
