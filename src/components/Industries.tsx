import Reveal from './Reveal'
import { industries } from '../data'

export default function Industries() {
  return (
    <section id="industries" className="bg-paper2 border-y border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal className="max-w-[760px] mb-12">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red font-mono">
            <span className="w-6 h-px bg-brand-red" /> Industries
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-[1.02] mt-5 text-ink">
            Trusted across diverse business verticals.
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind} delay={(i % 6) * 0.05}>
              <span className="inline-block rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm text-ink/80 hover:border-brand-red hover:text-brand-red transition-colors">
                {ind}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
