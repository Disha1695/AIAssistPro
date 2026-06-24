import { ArrowRight, PlayCircle, Brain, Pickaxe, ShieldCheck, Globe2 } from 'lucide-react'
import Coin from '../components/Coin'
import Tilt from '../components/Tilt'
import { Container } from './ui'

const PILLS = [
  { icon: Brain, label: 'AI Powered' },
  { icon: Pickaxe, label: 'Crypto Mining' },
  { icon: ShieldCheck, label: 'Secure & Trusted' },
  { icon: Globe2, label: 'Global Impact' },
]

const STATS = [
  { value: '$15', label: 'Min. to start' },
  { value: '1.5%', label: 'Daily income' },
  { value: '200%', label: 'Total ROI' },
  { value: '24/7', label: 'AI mining' },
]

function FloatCard({ className, title, value, accent }) {
  return (
    <div
      className={`glass-panel absolute rounded-2xl border border-white/15 px-4 py-3 text-white shadow-3d ${className}`}
    >
      <p className="text-[11px] uppercase tracking-wider text-white/60">{title}</p>
      <p className={`text-lg font-bold ${accent}`}>{value}</p>
    </div>
  )
}

export default function Hero({ onLaunch }) {
  return (
    <section className="relative overflow-hidden">
      {/* premium dark gradient backdrop (works in light & dark) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#070d20_0%,#0e1f4d_45%,#08122e_100%)]" />
      <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle at 70% 10%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 10%, black, transparent 75%)',
        }}
      />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        {/* copy */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Empowering the Digital Future
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to <br />
            <span className="text-gradient-gold">AI Digital Assets</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A next-generation crypto mining platform powered by advanced blockchain technology and
            intelligent automation — built for reliability, transparency and real digital wealth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onLaunch} className="btn-gold text-base">
              Start Now <ArrowRight size={18} />
            </button>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PlayCircle size={18} /> How it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {PILLS.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
              >
                <p.icon size={14} className="text-gold" /> {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* 3D visual */}
        <div className="relative mx-auto hidden h-[26rem] w-full max-w-md lg:block">
          <Tilt max={10} className="h-full w-full">
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-brand/20 blur-2xl" />
              <div className="absolute h-72 w-72 animate-spin-slow rounded-full border border-dashed border-white/15" />
              <div className="absolute h-56 w-56 rounded-full border border-white/10" />
              <Coin size={184} />
              <FloatCard className="left-0 top-6" title="Daily Income" value="+$5.00" accent="text-emerald-300" />
              <FloatCard className="right-0 top-24" title="Total ROI" value="200%" accent="text-gold" />
              <FloatCard className="bottom-6 left-8" title="Network" value="USDT BEP20" accent="text-sky-300" />
            </div>
          </Tilt>
        </div>
      </Container>

      {/* stat strip */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur">
        <Container className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-0.5 text-xs uppercase tracking-wider text-white/55">{s.label}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
