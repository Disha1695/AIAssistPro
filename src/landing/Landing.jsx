import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Mining from './Mining'
import Income from './Income'
import Packages from './Packages'
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
        <Packages onLaunch={onLaunch} />
        <Projects />
        <Footer onLaunch={onLaunch} />
      </main>
    </div>
  )
}
