import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { useTypewriter } from '../lib/useTypewriter'
import { BG_VIDEO } from '../data'

export default function Hero() {
  const { displayed, done } = useTypewriter('AI that gets\npast the pilot.', 42, 500)
  const videoRef = useRef<HTMLVideoElement>(null)

  // React's `muted` JSX attr doesn't reliably set the DOM property,
  // which blocks autoplay. Force muted + retry play across load events,
  // with a first-interaction fallback for strict autoplay policies.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    const play = () => {
      const p = v.play()
      if (p) p.catch(() => {})
    }
    const events = ['loadeddata', 'canplay', 'canplaythrough']
    play()
    events.forEach((e) => v.addEventListener(e, play))
    const onInteract = () => {
      play()
      window.removeEventListener('pointerdown', onInteract)
    }
    window.addEventListener('pointerdown', onInteract)
    return () => {
      events.forEach((e) => v.removeEventListener(e, play))
      window.removeEventListener('pointerdown', onInteract)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Legibility scrim — dark only where text sits, footage stays visible top-right */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />

      <Navbar />

      {/* Hero content bottom-left */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-12 sm:pb-16 max-w-2xl font-geist">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-white/70 mb-5"
        >
          <span className="w-6 h-px bg-brand-red2" />
          AI-Powered Enterprise Transformation
        </motion.span>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-4 whitespace-pre-wrap min-h-[2.2em]">
          {displayed}
          {!done && (
            <span className="inline-block w-[3px] h-[0.9em] bg-white align-middle ml-[2px] animate-blink" />
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-sm sm:text-base leading-relaxed mb-7 max-w-md"
        >
          Most AI work dies in the demo. Ours runs the business. We build it inside a Global
          Capability Center, staff it with people who own the outcome, and have a pod live in 30 to
          45 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Map your AI roadmap
          </a>
          <a
            href="#model"
            className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </div>
  )
}
