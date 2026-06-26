import { ArrowRight, PlayCircle, Brain, Pickaxe, ShieldCheck, Globe2 } from 'lucide-react'
import Coin from '../components/Coin'
import Tilt from '../components/Tilt'
import Typewriter from '../components/Typewriter'
import { Container } from './ui'

const PILLS = [
  { icon: Brain, label: 'AI Powered' },
  { icon: Pickaxe, label: 'Crypto Mining' },
  { icon: ShieldCheck, label: 'Secure & Trusted' },
  { icon: Globe2, label: 'Global Impact' },
]

const STATS = [
  { value: '24/7', label: 'AI Mining' },
  { value: '100%', label: 'Automated' },
  { value: 'Live', label: 'Analytics' },
  { value: 'USDT', label: 'Secure Payouts' },
]

function FloatCard({ className, title, value, accent, delay = 0 }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
      className={`absolute animate-fade-in rounded-2xl border border-line bg-surface px-4 py-3 shadow-lift dark:border-white/15 dark:bg-white/10 dark:text-white dark:shadow-3d dark:backdrop-blur ${className}`}
    >
      <p className="text-[11px] uppercase tracking-wider text-muted dark:text-white/60">{title}</p>
      <p className={`text-lg font-bold ${accent}`}>{value}</p>
    </div>
  )
}

// helper for sequential entrance animation
const step = (d) => ({ animationDelay: `${d}ms`, animationFillMode: 'both' })

export default function Hero({ onLaunch }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* backdrop — light & professional by day, deep navy by night (matches the sections in each mode) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#e8edf6_0%,#dbe5f4_55%,#e8edf6_100%)] dark:bg-[linear-gradient(180deg,#070b17_0%,#0a1124_55%,#070b17_100%)]" />
      <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl dark:bg-brand/15" />
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl dark:bg-gold/10" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-64 rounded-full bg-tether/15 blur-3xl dark:bg-tether/[0.07]" />
      {/* faint grid — blue lines by day, white lines by night */}
      <div
        className="absolute inset-0 -z-10 opacity-50 dark:hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,.12) 1px,transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle at 70% 10%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 10%, black, transparent 75%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden opacity-20 dark:block"
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
        <div className="text-ink dark:text-white">
          <span
            style={step(80)}
            className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-brand/25 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand shadow-soft dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:shadow-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" /> AI-Powered Crypto Mining
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span style={step(220)} className="block animate-fade-in">
              Welcome to
            </span>
            <span style={step(360)} className="block animate-fade-in text-gradient-gold">
              Brinx.world
            </span>
          </h1>

          <div
            style={step(500)}
            className="mt-4 flex animate-fade-in items-center text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="text-muted dark:text-white/60">Powered by&nbsp;</span>
            <Typewriter
              words={['AI Crypto Mining', 'Automated Trading', 'Smart Analytics', 'Real Digital Wealth']}
              className="text-gradient-brand"
            />
          </div>

          <p
            style={step(640)}
            className="mt-5 max-w-xl animate-fade-in text-base font-medium leading-relaxed text-ink/80 dark:font-normal dark:text-white/75 sm:text-lg"
          >
            A next-generation crypto mining platform powered by advanced blockchain technology and
            intelligent automation — built for reliability, transparency and real digital wealth.
          </p>

          <div style={step(800)} className="mt-8 flex animate-fade-in flex-wrap gap-3">
            <button onClick={onLaunch} className="btn-gold text-base">
              Start Now <ArrowRight size={18} />
            </button>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-elevated dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/20"
            >
              <PlayCircle size={18} /> How it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {PILLS.map((p, i) => (
              <span
                key={p.label}
                style={step(960 + i * 110)}
                className="inline-flex animate-fade-in items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink shadow-soft dark:border-white/15 dark:bg-white/5 dark:font-medium dark:text-white/85 dark:shadow-none"
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
              <div className="absolute h-72 w-72 animate-spin-slow rounded-full border border-dashed border-brand/25 dark:border-white/15" />
              <div className="absolute h-56 w-56 rounded-full border border-brand/15 dark:border-white/10" />
              <Coin size={184} />
              <FloatCard className="left-0 top-6" title="AI Trading" value="Active" accent="text-emerald-600 dark:text-emerald-300" delay={1000} />
              <FloatCard className="right-0 top-24" title="Auto Mining" value="24/7" accent="text-gold" delay={1160} />
              <FloatCard className="bottom-6 left-8" title="Network" value="USDT BEP20" accent="text-brand dark:text-sky-300" delay={1320} />
            </div>
          </Tilt>
        </div>
      </Container>

      {/* stat strip */}
      <div className="border-y border-line bg-surface/60 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <Container className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted dark:text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
