import Reveal from './Reveal'
import { differences } from '../data'

export default function GlobalReach() {
  const locs = [
    { color: 'bg-brand-red', role: 'India — HQ & Talent Hub', title: 'Where the work gets built', body: 'Technology and engineering teams, the deep bench that staffs every pod.' },
    { color: 'bg-ink', role: 'MJC-Enabled GCC', title: 'Digital operations center', body: 'Automation, AI innovation, and 24/7 support running as one operation.' },
    { color: 'bg-brand-red2', role: 'United Kingdom', title: 'Strategy & client HQ', body: 'Where direction is set and global digital operations are steered.' },
  ]
  return (
    <section id="global" className="bg-paper">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-24 sm:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red font-mono">
              <span className="w-6 h-px bg-brand-red" /> Global Reach
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-[1.03] mt-5 mb-8 text-ink">
              One network,<br />two hemispheres.
            </h2>
            <div className="flex flex-col">
              {locs.map((l) => (
                <div key={l.role} className="grid grid-cols-[auto_1fr] gap-5 py-6 border-t border-ink/10 last:border-b">
                  <span className={`w-3 h-3 rounded-full mt-1.5 ${l.color}`} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 mb-1.5">{l.role}</div>
                    <h5 className="font-display font-semibold text-lg text-ink mb-1">{l.title}</h5>
                    <p className="text-ink/55 text-sm">{l.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45 mb-8">The MJC Difference</h3>
            <div className="grid sm:grid-cols-2 gap-x-8">
              {differences.map((d) => (
                <div key={d.di} className="py-5 border-t border-ink/10">
                  <span className="font-mono text-[13px] text-brand-red">{d.di}</span>
                  <h4 className="font-display font-semibold text-lg text-ink mt-2 mb-1.5">{d.title}</h4>
                  <p className="text-ink/55 text-sm">{d.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
