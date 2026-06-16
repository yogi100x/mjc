import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const dur = 1300
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <div ref={ref} className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight text-ink">
      {val}
      <span className="bg-gradient-to-r from-brand-red to-brand-red2 bg-clip-text text-transparent">
        {suffix}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-paper2 border-y border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter to={s.to} suffix={s.suffix} />
              <div className="text-ink/55 text-sm mt-3 max-w-[20ch]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
