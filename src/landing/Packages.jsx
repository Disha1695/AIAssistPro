import { Check, Star, ArrowRight, Bitcoin, Boxes, Wallet, TrendingUp, Clock, ShieldCheck, BarChart3, PiggyBank } from 'lucide-react'
import Tilt from '../components/Tilt'
import Coin from '../components/Coin'
import { Section, Container, SectionHeading, Reveal } from './ui'
import { packages } from '../data'

function PlanCard({ pkg, onLaunch }) {
  const featured = pkg.popular
  return (
    <Tilt max={6}>
      <div className={`card relative flex h-full flex-col overflow-hidden p-7 ${featured ? 'glow-brand' : ''}`}>
        {featured && (
          <>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
            <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand ring-1 ring-inset ring-brand/30">
              <Star size={11} /> Popular
            </span>
          </>
        )}
        <div className="flex items-center gap-3">
          <Coin size={44} float={false} />
          <div>
            <h3 className="font-bold text-ink">{pkg.name}</h3>
            <p className="text-xs text-muted">{pkg.range}</p>
          </div>
        </div>
        <div className="mt-5 flex items-baseline gap-1.5">
          <span className={`text-4xl font-extrabold tracking-tight ${featured ? 'text-gradient-brand' : 'text-ink'}`}>
            {pkg.daily}
          </span>
          <span className="text-sm text-muted">daily</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-gradient-gold">{pkg.roi} total return</p>
        <div className="my-5 h-px bg-line" />
        <ul className="space-y-2.5 text-sm">
          {['Automated daily payout', 'AI-powered mining', 'Secure USDT (BEP20)', '24×7 monitoring'].map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-positive/12 text-positive ring-1 ring-inset ring-positive/25">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-muted">{f}</span>
            </li>
          ))}
        </ul>
        <button onClick={onLaunch} className={`mt-6 w-full ${featured ? 'btn-primary' : 'btn-ghost'}`}>
          Get Started <ArrowRight size={16} />
        </button>
      </div>
    </Tilt>
  )
}

const PAYMENTS = [
  { icon: Bitcoin, label: 'We Accept Crypto' },
  { icon: Boxes, label: 'BNB Smart Chain' },
  { icon: Wallet, label: 'USDT BEP20' },
]

export default function Packages({ onLaunch }) {
  return (
    <Section id="packages" className="bg-elevated/40">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Daily Mining Income"
            title="Start with only"
            highlight="$15"
            subtitle="Choose a package that fits you. Every tier earns up to 200% total return."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <PlanCard pkg={pkg} onLaunch={onLaunch} />
            </Reveal>
          ))}
        </div>

        {/* Working vs Non-working */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-ink">Working Income</h3>
                <span className="text-3xl font-extrabold text-gradient-brand">3X</span>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: TrendingUp, t: 'Active Growth' },
                  { icon: BarChart3, t: 'Daily Earnings' },
                  { icon: PiggyBank, t: 'Financial Freedom' },
                ].map((x) => (
                  <li key={x.t} className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/12 text-brand">
                      <x.icon size={16} />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card h-full p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-ink">Non-Working Income</h3>
                <span className="text-3xl font-extrabold text-gradient-gold">2X</span>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: Wallet, t: 'Passive Wealth' },
                  { icon: Clock, t: 'Time Freedom' },
                  { icon: ShieldCheck, t: 'Long Term Security' },
                ].map((x) => (
                  <li key={x.t} className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold">
                      <x.icon size={16} />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Joining options */}
        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur sm:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Joining Options</p>
              <p className="mt-1 text-muted">
                Deposit & withdrawal in <span className="font-semibold text-ink">USDT BEP20</span>.
                Company payouts are made only in USDT.
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
      </Container>
    </Section>
  )
}
