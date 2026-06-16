import Reveal from './Reveal'
import { logos } from '../data'

export default function LogoWall() {
  return (
    <section className="bg-paper2 border-y border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-16">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.22em] font-mono text-ink/45 mb-10">
            Platforms & technologies we deliver on
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
            {logos.map((l) => (
              <div key={l.name} className="flex items-center justify-center">
                <img
                  src={l.src}
                  alt={l.name}
                  loading="lazy"
                  className="max-h-9 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
