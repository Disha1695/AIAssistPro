import { Bot, TrendingUp, ShieldCheck, Clock, Globe2, Pickaxe, UserPlus, GitMerge } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'
import { incomeTypes } from '../data'

const WORK_PILLS = [
  { icon: Bot, label: 'AI Powered Trading' },
  { icon: TrendingUp, label: 'Automated Growth' },
  { icon: ShieldCheck, label: 'Secure & Reliable' },
  { icon: Clock, label: '24/7 Monitoring' },
  { icon: Globe2, label: 'Global Access' },
]

const TYPE_ICONS = [Pickaxe, UserPlus, GitMerge]
const TYPE_CHIPS = [
  'from-amber-300 to-amber-500 text-amber-950',
  'from-sky-400 to-blue-600 text-white',
  'from-emerald-400 to-teal-600 text-white',
]

const CAPPING = [
  ['15 USDT', '15 USDT'],
  ['100 USDT', '100 USDT'],
  ['200 USDT', '200 USDT'],
  ['500 USDT', '500 USDT'],
  ['1000 USDT', '1000 USDT'],
  ['2000 USDT', '2000 USDT'],
  ['5000 USDT', '5000 USDT'],
]

export default function Income() {
  return (
    <Section id="income" className="bg-app">
      <Container>
        {/* Put your money to work */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-3d sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#0a1733_0%,#13316f_55%,#0a1733_100%)]" />
          <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                Put your money to work
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Automated, <span className="text-gradient-gold">continuous</span> financial growth
              </h2>
              <p className="mt-3 max-w-lg text-white/70">
                Experience AI-powered mining and real-time analytics working for you — 24 hours a
                day, 365 days a year.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {WORK_PILLS.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
                  >
                    <p.icon size={14} className="text-gold" /> {p.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="grid grid-cols-3 gap-3">
              {[
                { k: 'Growth', v: '85%' },
                { k: 'Return', v: '73%' },
                { k: 'Profit', v: '65%' },
              ].map((s) => (
                <div key={s.k} className="glass-panel rounded-2xl border border-white/15 p-4 text-center">
                  <p className="text-2xl font-extrabold">{s.v}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">{s.k}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Income types */}
        <Reveal className="mt-20">
          <SectionHeading
            kicker="Types of Income"
            title="Three ways to"
            highlight="earn & grow"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {incomeTypes.map((item, i) => {
            const Icon = TYPE_ICONS[i]
            return (
              <Reveal key={item.title} delay={i * 100}>
                <Tilt max={6}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${TYPE_CHIPS[i]} shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]`}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                    <p className="mt-3 text-base font-bold text-gradient-gold">{item.value}</p>
                  </div>
                </Tilt>
              </Reveal>
            )
          })}
        </div>

        {/* Matching capping */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <h3 className="text-xl font-bold text-ink">Matching Income — 10%</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Earn <span className="font-semibold text-ink">10% matching income</span> on left and
                right teams. First matching is based on{' '}
                <span className="font-semibold text-brand">1:2 or 2:1</span>, then continues at{' '}
                <span className="font-semibold text-brand">1:1</span>. Power-leg business volume
                carries forward.
              </p>
              <div className="mt-5 flex items-center gap-4">
                {['1:2', '2:1', '1:1'].map((r) => (
                  <div
                    key={r}
                    className="flex-1 rounded-xl border border-line bg-app/60 py-4 text-center"
                  >
                    <p className="text-2xl font-extrabold text-gradient-gold">{r}</p>
                    <p className="text-xs text-muted">matching</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full overflow-hidden p-7">
              <h3 className="text-xl font-bold text-ink">Weekly Matching Capping</h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-line">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-elevated/70 text-xs uppercase tracking-wider text-muted">
                      <th className="px-4 py-2.5 font-semibold">Amount (USDT)</th>
                      <th className="px-4 py-2.5 font-semibold">Weekly Capping</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CAPPING.map(([a, b], i) => (
                      <tr key={a} className={i % 2 ? 'bg-app/40' : ''}>
                        <td className="px-4 py-2 font-medium text-ink">{a}</td>
                        <td className="px-4 py-2 font-semibold text-gold">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
