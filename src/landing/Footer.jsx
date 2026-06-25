import { ArrowRight, Globe } from 'lucide-react'
import Logo from '../components/Logo'
import Coin from '../components/Coin'
import Tilt from '../components/Tilt'
import { Container, Reveal } from './ui'

export default function Footer({ onLaunch }) {
  return (
    <footer>
      {/* Final CTA */}
      <Container>
        <Reveal>
          <Tilt max={4}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center text-white shadow-3d sm:p-14">
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0a1530_0%,#12317a_50%,#0a1530_100%)]" />
              <div className="absolute -left-10 -top-10 -z-10 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
              <div className="absolute -bottom-12 right-0 -z-10 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />

              <div className="mx-auto mb-6 w-fit">
                <Coin size={72} />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Invest in <span className="text-gradient-gold">Brinx</span> Today!
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/70">
                Building wealth. Powered by AI. Start your automated mining & trading journey today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button onClick={onLaunch} className="btn-gold text-base">
                  Start Now <ArrowRight size={18} />
                </button>
                <button
                  onClick={onLaunch}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Open Dashboard
                </button>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </Container>

      {/* Footer bar */}
      <div className="mt-16 border-t border-line bg-surface/50 backdrop-blur">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <Logo />
          <div className="flex items-center gap-2 text-sm text-muted">
            <Globe size={15} className="text-brand" />
            <span className="font-medium text-ink">www.Brinx.world</span>
          </div>
          <p className="text-xs text-muted">© 2026 Brinx · All rights reserved.</p>
        </Container>
      </div>
    </footer>
  )
}
