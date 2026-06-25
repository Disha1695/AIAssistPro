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

const TERMS = [
  'Joining package starts from $15 only.',
  'Deposit and withdrawal in USDT (BEP20).',
  'Working income 3x, non-working income 2x — total 5x.',
  'Re-topup after 200% income in non-working 2x.',
  'User-to-user fund transfer available (min $15).',
  'First matching is 1:2 or 2:1, then continues 1:1.',
  'Power-leg business volume carries forward.',
  'Matching capping applies Monday to Monday.',
  'Withdrawals processed every Tuesday, once a week.',
  'Withdrawal deduction is 15%. 24×7 support available.',
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

        {/* Terms */}
        <Reveal className="mt-20">
          <SectionHeading kicker="Terms & Conditions" title="Clear, transparent" highlight="rules" />
        </Reveal>

        <Reveal>
          <div className="mt-10 card p-7">
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {TERMS.map((t) => (
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
