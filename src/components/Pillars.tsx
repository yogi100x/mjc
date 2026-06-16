import Reveal from './Reveal'
import { pillars } from '../data'

export default function Pillars() {
  return (
    <section id="model" className="bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-24 sm:py-36">
        <Reveal className="max-w-[760px] mb-16">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red font-mono">
            <span className="w-6 h-px bg-brand-red" /> The Model
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] mt-5 mb-5 text-ink">
            Three pillars. One accountable team.
          </h2>
          <p className="text-ink/55 text-lg max-w-[560px]">
            AI is the strategy. A capability center is where it ships. People keep it running. We own
            all three.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-ink/10 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(32,16,32,0.10)]">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-3 left-5 text-xs uppercase tracking-[0.16em] font-mono text-white/85">
                    {p.kicker}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-3 text-ink">{p.title}</h3>
                  <p className="text-ink/55 text-[15px] mb-6">{p.body}</p>
                  <ul className="flex flex-col gap-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="relative pl-7 text-[14.5px] text-ink/80">
                        <span className="absolute left-0 top-[10px] w-4 h-px bg-brand-red" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
