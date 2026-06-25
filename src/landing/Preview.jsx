import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Activity, Cpu, Globe2, Gauge } from 'lucide-react'
import { Section, Container, SectionHeading, Reveal } from './ui'

// Representative performance index (unitless) — illustrative, not actual figures.
const DATA = [
  { t: '00h', v: 42 },
  { t: '04h', v: 55 },
  { t: '08h', v: 49 },
  { t: '12h', v: 68 },
  { t: '16h', v: 61 },
  { t: '20h', v: 79 },
  { t: '24h', v: 73 },
]

const METRICS = [
  { icon: Cpu, label: 'Mining Hashrate', value: '512 PH/s' },
  { icon: Activity, label: 'AI Engine', value: 'Optimizing' },
  { icon: Globe2, label: 'Markets Tracked', value: '50+' },
  { icon: Gauge, label: 'System Uptime', value: '99.9%' },
]

function Tip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/15 bg-[#0a1733] px-3 py-1.5 text-xs text-white shadow-lift">
        Performance · {payload[0].value}
      </div>
    )
  }
  return null
}

export default function Preview() {
  return (
    <Section id="preview" className="bg-elevated/40">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Live Dashboard"
            title="See your portfolio"
            highlight="in real time"
            subtitle="A clean, AI-driven dashboard gives you full visibility over mining performance and market activity — 24/7."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative isolate mt-12 overflow-hidden rounded-3xl border border-white/10 p-6 text-white shadow-3d sm:p-8">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#0a1733_0%,#13316f_55%,#0a1733_100%)]" />
            <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />

            <div className="grid gap-6 lg:grid-cols-3">
              {/* chart */}
              <div className="lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">AI Mining Performance</h3>
                    <p className="text-xs text-white/60">Real-time activity index</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
                  </span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DATA} margin={{ top: 8, right: 8, left: -28, bottom: 0 }}>
                      <defs>
                        <linearGradient id="previewFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" vertical={false} />
                      <XAxis dataKey="t" stroke="#ffffff66" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip content={<Tip />} cursor={{ stroke: '#38bdf8', strokeOpacity: 0.4 }} />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="#38bdf8"
                        strokeWidth={2.5}
                        fill="url(#previewFill)"
                        dot={{ fill: '#38bdf8', r: 3, strokeWidth: 0 }}
                        activeDot={{ r: 5, fill: '#38bdf8', stroke: '#0a1733', strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* metric tiles */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="glass-panel flex items-center gap-3 rounded-2xl border border-white/15 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold">
                      <m.icon size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/55">{m.label}</p>
                      <p className="text-base font-bold">{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
