import { Check, Sparkles } from 'lucide-react'
import Tilt from './Tilt'
import Coin from './Coin'

export default function PackageCard({ pkg }) {
  const featured = pkg.popular
  return (
    <Tilt max={6}>
      <div
        className={`glare card relative flex h-full flex-col overflow-hidden p-6 ${
          featured ? 'glow-brand' : ''
        }`}
      >
        {featured && (
          <>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
            <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand ring-1 ring-inset ring-brand/30">
              <Sparkles size={11} /> Popular
            </span>
          </>
        )}

        <div className="flex items-center gap-3">
          <Coin size={40} float={false} />
          <div>
            <h3 className="text-sm font-semibold text-muted">{pkg.name}</h3>
            <p className="text-xs text-muted/80">{pkg.range}</p>
          </div>
        </div>

        <div className="mt-5 flex items-baseline gap-1.5">
          <span className={`text-3xl font-extrabold tracking-tight ${featured ? 'text-gradient-brand' : 'text-ink'}`}>
            {pkg.daily}
          </span>
          <span className="text-sm text-muted">daily income</span>
        </div>

        <div className="my-5 h-px bg-line" />

        <ul className="space-y-2.5 text-sm">
          {[`${pkg.roi} total return`, 'Automated daily payout', 'AI-powered mining', '24×7 monitoring'].map(
            (f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-positive/12 text-positive ring-1 ring-inset ring-positive/25">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-muted">{f}</span>
              </li>
            ),
          )}
        </ul>

        <button className={`mt-6 w-full ${featured ? 'btn-primary' : 'btn-ghost'}`}>
          Activate Package
        </button>
      </div>
    </Tilt>
  )
}
