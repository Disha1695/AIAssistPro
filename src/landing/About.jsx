import { Cpu, Pickaxe, ShieldCheck, TrendingUp, Target, Eye, BarChart3, Network } from 'lucide-react'
import Tilt from '../components/Tilt'
import Coin from '../components/Coin'
import { Section, Container, SectionHeading, Reveal } from './ui'

const CHIPS = [
  { icon: Cpu, label: 'AI Powered Technology' },
  { icon: Pickaxe, label: 'Crypto Mining' },
  { icon: ShieldCheck, label: 'Secure & Transparent' },
  { icon: TrendingUp, label: 'Maximize Profits' },
]

export default function About() {
  return (
    <Section id="about" className="bg-app">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="About Us"
            title="The next generation of"
            highlight="crypto mining"
            subtitle="AI Digital Assets combines high-performance mining infrastructure, real-time analytics and secure systems to optimize digital asset generation — with a global network transforming the future of digital wealth creation."
          />
        </Reveal>

        {/* About: text + 3D visual */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5">
            {[
              'A next-generation crypto mining platform powered by advanced blockchain technology and intelligent automation.',
              'High-performance infrastructure, real-time analytics and secure systems work together to ensure reliability, transparency and efficiency.',
              'With innovative technology and a truly global network, we are transforming cryptocurrency mining and digital wealth creation.',
            ].map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/12 text-xs font-bold text-brand ring-1 ring-inset ring-brand/25">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-muted">{t}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <Tilt max={8}>
              <div className="card relative overflow-hidden p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Mining Power</p>
                    <p className="mt-1 text-3xl font-extrabold text-ink">512.98 EH/s</p>
                  </div>
                  <Coin size={64} />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: BarChart3, k: 'Uptime', v: '99.9%' },
                    { icon: Network, k: 'Efficiency', v: '98.6%' },
                    { icon: TrendingUp, k: 'Growth', v: '+25%' },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border border-line bg-app/60 p-3 text-center">
                      <m.icon size={16} className="mx-auto text-brand" />
                      <p className="mt-1 text-sm font-bold text-ink">{m.v}</p>
                      <p className="text-[11px] text-muted">{m.k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]">
                <Eye size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">Our Vision</h3>
              <p className="mt-2 leading-relaxed text-muted">
                To utilize every moment of every person to build a more powerful, perfectly
                transparent system — a program highly recommended by our investors and partners.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 shadow-[0_8px_18px_-6px_rgba(245,158,11,0.6)]">
                <Target size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">Our Mission</h3>
              <p className="mt-2 leading-relaxed text-muted">
                To provide clients competitive, premium-quality services with the lowest possible
                investment and the highest profit — always serving and improving from client
                feedback.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CHIPS.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm font-medium text-ink backdrop-blur"
              >
                <c.icon size={16} className="text-gold" /> {c.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
