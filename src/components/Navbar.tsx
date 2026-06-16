import { useState } from 'react'
import { Infinity as InfinityIcon, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-5 font-geist">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-medium text-base">
          <InfinityIcon size={22} strokeWidth={1.5} className="text-brand-red2" />
          <span>
            MJC <span className="text-white/60 font-normal">GlobalTech</span>
          </span>
        </a>

        {/* Center pill nav */}
        <div className="liquid-glass hidden md:flex items-center gap-1 rounded-xl px-2 py-2">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                i === 0 ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Insights
          </a>
          <a
            href="#contact"
            className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Start a conversation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden liquid-glass text-white p-2 rounded-lg"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1 font-geist">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm text-white/80 hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
            <a
              href="#contact"
              className="flex-1 text-center liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="flex-1 text-center bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full"
            >
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </>
  )
}
