import { Bot, TrendingUp, ShieldCheck, Clock, Globe2, Cpu, LineChart, Brain, Zap, Lock } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const WORK_PILLS = [
  { icon: Bot, label: 'AI Powered Trading' },
  { icon: TrendingUp, label: 'Automated Growth' },
  { icon: ShieldCheck, label: 'Secure & Reliable' },
  { icon: Clock, label: '24/7 Monitoring' },
  { icon: Globe2, label: 'Global Access' },
]

const CAPABILITIES = [
  {
    icon: Bot,
    chip: 'from-sky-400 to-blue-600 text-white',
    title: 'AI Trading Engine',
    desc: 'Advanced AI algorithms analyze the markets around the clock and execute optimized strategies automatically — no manual effort required.',
  },
  {
    icon: Cpu,
    chip: 'from-amber-300 to-amber-500 text-amber-950',
    title: 'Automated Crypto Mining',
    desc: 'High-performance mining infrastructure runs 24/7, generating digital assets with maximum efficiency and uptime.',
  },
  {
    icon: LineChart,
    chip: 'from-emerald-400 to-teal-600 text-white',
    title: 'Real-Time Analytics',
    desc: 'Live dashboards, market insights and performance tracking keep you fully informed and in control of your portfolio.',
  },
]

const TECH = [
  { icon: Brain, label: 'Machine Learning Models' },
  { icon: Lock, label: 'Blockchain Secured' },
  { icon: Zap, label: 'Smart Automation' },
  { icon: Clock, label: '99.9% Uptime' },
]

export default function Income() {
  return (
    <Section id="income" className="bg-app">
      <Container>
        {/* Put your money to work */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-3d sm:p-12">
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
                { k: 'Uptime', v: '24/7' },
                { k: 'Markets', v: 'Live' },
                { k: 'Automation', v: '100%' },
              ].map((s) => (
                <div key={s.k} className="glass-panel rounded-2xl border border-white/15 p-4 text-center">
                  <p className="text-2xl font-extrabold">{s.v}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">{s.k}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Capabilities */}
        <Reveal className="mt-20">
          <SectionHeading
            kicker="Platform Capabilities"
            title="Intelligent technology that"
            highlight="works for you"
            subtitle="AI-driven crypto mining and trading — fully automated, transparent and secure."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Tilt max={6}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.chip} shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]`}
                    >
                      <item.icon size={20} />
                    </span>
                    <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Technology strip */}
        <Reveal delay={120}>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur sm:grid-cols-4">
            {TECH.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/12 text-brand">
                  <t.icon size={18} />
                </span>
                <p className="text-sm font-semibold text-ink">{t.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
