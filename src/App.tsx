import Hero from './components/Hero'
import Stats from './components/Stats'
import Pillars from './components/Pillars'
import LogoWall from './components/LogoWall'
import ScrubVideo from './components/ScrubVideo'
import Capabilities from './components/Capabilities'
import Industries from './components/Industries'
import GlobalReach from './components/GlobalReach'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-paper text-ink antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Hero />
      <Stats />
      <Pillars />
      <LogoWall />
      <ScrubVideo />
      <Capabilities />
      <Industries />
      <GlobalReach />
      <Contact />
      <Footer />
    </div>
  )
}
