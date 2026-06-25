import {
  ShieldCheck,
  CheckCircle2,
  Coins,
  Boxes,
  Zap,
  PiggyBank,
  Lock,
  Network,
  Pickaxe,
  TrendingUp,
  Globe2,
} from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const FEATURES = [
  { icon: ShieldCheck, label: 'Secures the Network' },
  { icon: CheckCircle2, label: 'Verifies Transactions' },
  { icon: Coins, label: 'Earn Rewards' },
  { icon: Boxes, label: 'Decentralized & Trusted' },
  { icon: Zap, label: 'Powers the Digital Future' },
]

const BENEFITS = [
  { icon: PiggyBank, title: 'Passive Income', desc: 'Earn consistent rewards by contributing to the blockchain network.' },
  { icon: Lock, title: 'Network Security', desc: 'Strengthen and secure the blockchain through decentralized validation.' },
  { icon: Network, title: 'Decentralization', desc: 'Support a decentralized ecosystem, reducing reliance on central authorities.' },
  { icon: Pickaxe, title: 'Low Entry Barrier', desc: 'Start mining with accessible, flexible options — no expensive hardware or setup required.' },
  { icon: TrendingUp, title: 'High Return Potential', desc: 'Maximize rewards with efficient strategies and the right technology.' },
  { icon: Globe2, title: 'Supports the Future', desc: 'Empower the next generation of financial innovation, worldwide.' },
]

export default function Mining() {
  return (
    <Section id="mining" className="bg-elevated/40">
      <Container>
        {/* What is crypto mining */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              center={false}
              kicker="What is Crypto Mining?"
              title="Validating the blockchain,"
              highlight="earning rewards"
              subtitle="Crypto mining validates and adds transactions to the blockchain using powerful computers to solve complex problems. Miners are rewarded with cryptocurrency for securing the network, maintaining decentralization and keeping it running efficiently."
            />
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/12 text-brand ring-1 ring-inset ring-brand/20">
                  <f.icon size={18} />
                </span>
                <span className="text-sm font-semibold text-ink">{f.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Benefits */}
        <Reveal className="mt-20">
          <SectionHeading
            kicker="Benefits"
            title="Why mine with"
            highlight="Brinx"
            subtitle="Powering the digital future. Rewarding today."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100}>
              <Tilt max={6}>
                <div className="card card-hover group h-full p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]">
                    <b.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.desc}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
