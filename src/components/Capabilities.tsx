import Reveal from './Reveal'
import { capabilities } from '../data'

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-24 sm:py-36">
        <Reveal className="max-w-[760px] mb-14">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red font-mono">
            <span className="w-6 h-px bg-brand-red" /> Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-[1.02] mt-5 text-ink">
            The whole stack, one team accountable for it.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_16px_40px_rgba(32,16,32,0.08)]">
                <div className="font-mono text-xs text-ink/40 mb-6">{c.ix}</div>
                <h4 className="font-display font-semibold text-xl tracking-tight mb-2 text-ink">{c.title}</h4>
                <p className="text-ink/55 text-sm">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
