import { Snowflake, Lock, Boxes, Wifi, KeyRound, FileCheck2 } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const FEATURES = [
  { icon: Snowflake, title: 'Cold Wallet Storage', desc: 'The majority of funds are held in offline cold storage — safe from online threats.' },
  { icon: Lock, title: 'Bank-Grade Encryption', desc: 'End-to-end AES-256 encryption protects your data and every single transaction.' },
  { icon: Boxes, title: 'Blockchain Transparency', desc: 'Every deposit and withdrawal is recorded on-chain and fully verifiable.' },
  { icon: Wifi, title: 'DDoS Protection', desc: 'Enterprise-grade infrastructure keeps the platform resilient and online 24/7.' },
  { icon: KeyRound, title: '2FA Authentication', desc: 'Two-factor authentication adds an extra layer of protection to your account.' },
  { icon: FileCheck2, title: 'Audited Infrastructure', desc: 'Our systems are continuously monitored and independently reviewed.' },
]

const STATS = [
  { value: '50,000+', label: 'Active Miners' },
  { value: '120+', label: 'Countries' },
  { value: '$120M+', label: 'Assets Secured' },
  { value: '99.9%', label: 'Platform Uptime' },
]

export default function Security() {
  return (
    <Section id="security" className="bg-app">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Security & Trust"
            title="Your funds are"
            highlight="fully protected"
            subtitle="Brinx is built on enterprise-grade security and blockchain transparency — so you can invest with complete confidence."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <Tilt max={6}>
                <div className="card card-hover h-full p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]">
                    <f.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Trust stats band */}
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-surface/60 p-8 backdrop-blur sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tight text-gradient-brand">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
