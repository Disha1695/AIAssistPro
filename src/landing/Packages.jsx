import { ArrowRight, Wallet, Cpu, LineChart, Bitcoin, Boxes, ShieldCheck } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const STEPS = [
  {
    icon: Wallet,
    title: 'Create & Fund',
    desc: 'Sign up in seconds and fund your account securely with USDT on the BEP20 network.',
  },
  {
    icon: Cpu,
    title: 'AI Mines & Trades',
    desc: 'Our AI engine puts your funds to work — mining and trading digital assets automatically, 24/7.',
  },
  {
    icon: LineChart,
    title: 'Track & Withdraw',
    desc: 'Monitor live performance from your dashboard and withdraw your earnings whenever you want.',
  },
]

const PAYMENTS = [
  { icon: Bitcoin, label: 'We Accept Crypto' },
  { icon: Boxes, label: 'BNB Smart Chain' },
  { icon: Wallet, label: 'USDT BEP20' },
  { icon: ShieldCheck, label: 'Secure & Trusted' },
]

export default function Packages({ onLaunch }) {
  return (
    <Section id="packages" className="bg-elevated/40">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="How It Works"
            title="Start earning in"
            highlight="3 simple steps"
            subtitle="From sign-up to withdrawal — Brinx automates the mining and trading in between."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <Tilt max={6}>
                <div className="card card-hover relative h-full p-7">
                  <span className="absolute right-6 top-6 text-5xl font-extrabold text-ink/[0.06]">
                    0{i + 1}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_10px_22px_-8px_rgba(37,99,235,0.6)]">
                    <step.icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Payment & security strip */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur sm:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Secure Transactions
              </p>
              <p className="mt-1 text-muted">
                Deposit & withdrawal in <span className="font-semibold text-ink">USDT BEP20</span> —
                fast, low-cost and fully on-chain.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {PAYMENTS.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-app/60 px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  <p.icon size={16} className="text-tether" /> {p.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 text-center">
            <button onClick={onLaunch} className="btn-primary text-base">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
