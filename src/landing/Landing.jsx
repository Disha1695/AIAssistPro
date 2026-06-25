import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Mining from './Mining'
import Income from './Income'
import Preview from './Preview'
import Packages from './Packages'
import Security from './Security'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Projects from './Projects'
import Footer from './Footer'

export default function Landing({ onLaunch }) {
  return (
    <div className="min-h-screen bg-app">
      <Navbar onLaunch={onLaunch} />
      <main>
        <Hero onLaunch={onLaunch} />
        <About />
        <Mining />
        <Income />
        <Preview />
        <Packages onLaunch={onLaunch} />
        <Security />
        <Testimonials />
        <FAQ />
        <Projects />
        <Footer onLaunch={onLaunch} />
      </main>
    </div>
  )
}
