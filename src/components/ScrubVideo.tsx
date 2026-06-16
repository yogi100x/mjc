import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { lifecycle, SCRUB_VIDEO } from '../data'

export default function ScrubVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Desktop: scrub on horizontal mouse movement. Mobile: normal autoplay.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.innerWidth < 1024) {
      video.muted = true
      video.loop = true
      video.autoplay = true
      void video.play().catch(() => {})
      return
    }

    let prevX: number | null = null
    let target = 0
    let seeking = false

    const onSeeked = () => {
      seeking = false
    }

    const onMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return
      const dur = video.duration
      if (!dur || Number.isNaN(dur)) return
      if (prevX === null) {
        prevX = e.clientX
        return
      }
      const delta = e.clientX - prevX
      prevX = e.clientX
      target += (delta / window.innerWidth) * 0.8 * dur
      target = Math.max(0, Math.min(dur, target))
      if (!seeking) {
        seeking = true
        video.currentTime = target
      }
    }

    video.addEventListener('seeked', onSeeked)
    window.addEventListener('mousemove', onMove)
    return () => {
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          src={SCRUB_VIDEO}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 py-28 sm:py-40">
        <Reveal className="max-w-[640px]">
          <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.26em] text-brand-red2 font-mono">
            <span className="w-6 h-px bg-brand-red2" /> GCC Lifecycle
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.03] mt-5 mb-5">
            Four stages. One operator from day one to steady state.
          </h2>
          <p className="text-white/55 text-lg max-w-[520px]">
            We don't hand off between strategy and run. The same team takes your capability center from
            a blank page to a humming operation.{' '}
            <span className="hidden lg:inline text-white/35">(Move your cursor to scrub.)</span>
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {lifecycle.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 h-full">
                <div className="font-display font-extrabold text-5xl leading-none bg-gradient-to-r from-brand-red to-brand-red2 bg-clip-text text-transparent opacity-90">
                  {s.num}
                </div>
                <div className="mt-5 text-xs uppercase tracking-[0.16em] font-mono text-brand-red2">{s.tag}</div>
                <h4 className="font-display font-semibold text-xl tracking-tight mt-2 mb-2">{s.title}</h4>
                <p className="text-white/50 text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
