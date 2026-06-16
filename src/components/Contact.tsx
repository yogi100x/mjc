import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const OPTIONS = ['AI & Analytics', 'GCC Enablement', 'Staffing', 'ERP & Cloud', 'Other']

export default function Contact() {
  const [services, setServices] = useState<string[]>([])

  const toggle = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  return (
    <section id="contact" className="bg-paper2">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-[30px] border border-ink/10 bg-gradient-to-br from-white to-paper2 px-7 sm:px-14 py-16 sm:py-20">
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-72 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(194,25,6,.16), transparent 65%)' }} />
          <div className="pointer-events-none absolute -bottom-52 -right-20 w-[340px] h-[340px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(229,57,30,.12), transparent 65%)' }} />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red font-mono">
              <span className="w-6 h-px bg-brand-red" /> Let's talk
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1] mt-5 mb-4 text-ink">
              Tell us what's not moving.
            </h2>
            <p className="text-ink/55 text-lg mb-10">
              Bring the problem that's been sitting on your roadmap. We'll show you the center and the
              team that can shift it.
            </p>

            <h3 className="text-2xl font-medium tracking-tight mb-1 text-ink">What sort of engagement?</h3>
            <p className="opacity-85 text-ink/50 mb-8 text-sm">Select all that apply</p>

            <div className="flex flex-wrap gap-3">
              {OPTIONS.map((opt) => {
                const active = services.includes(opt)
                return (
                  <motion.button
                    key={opt}
                    type="button"
                    onClick={() => toggle(opt)}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                        : 'bg-white text-ink border border-ink/10 hover:bg-ink/5'
                    }`}
                  >
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="flex"
                        >
                          <Check size={15} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {opt}
                  </motion.button>
                )
              })}
            </div>

            {/* feedback banner */}
            <div className="mt-7">
              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="italic text-xs text-ink"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-5 py-4">
                      <span className="text-sm text-ink/70">
                        Ready to inquire about:{' '}
                        <span className="font-medium text-ink">{services.join(', ')}</span>
                      </span>
                      <a
                        href="mailto:hello@mjcglobaltech.com"
                        className="inline-flex items-center gap-1.5 text-brand-red uppercase text-xs font-semibold tracking-wide hover:gap-2.5 transition-all"
                      >
                        Let's Go <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
