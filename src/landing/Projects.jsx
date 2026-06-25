import { LineChart, Bot, Coins, Boxes, Wallet, ArrowLeftRight, CheckCircle2 } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const PROJECTS = [
  { icon: LineChart, title: 'Forex Broker House' },
  { icon: Bot, title: 'Advanced AI Robot Trading' },
  { icon: Coins, title: 'Token' },
  { icon: Boxes, title: 'Blockchain' },
  { icon: Wallet, title: 'Decentralized Wallet' },
  { icon: ArrowLeftRight, title: 'Crypto Exchange' },
]

const HIGHLIGHTS = [
  'AI-powered crypto mining and trading, fully automated.',
  'Secure deposits & withdrawals in USDT (BEP20).',
  'Real-time analytics and 24/7 portfolio monitoring.',
  'Bank-grade security and blockchain transparency.',
  'High-performance mining infrastructure with 99.9% uptime.',
  'Smart machine-learning models that adapt to the market.',
  'Global access — mine and trade from anywhere.',
  'Dedicated 24×7 customer support.',
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-app">
      <Container>
        <Reveal>
          <SectionHeading kicker="Upcoming Projects" title="The roadmap ahead for" highlight="Brinx" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <Tilt max={6}>
                <div className="card card-hover group flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]">
                      <p.icon size={19} />
                    </span>
                    <span className="font-semibold text-ink">{p.title}</span>
                  </div>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Soon
                  </span>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Platform highlights */}
        <Reveal className="mt-20">
          <SectionHeading kicker="Why Brinx" title="What makes us" highlight="different" />
        </Reveal>

        <Reveal>
          <div className="mt-10 card p-7">
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-positive" />
                  <span className="text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
