import { Star, Check } from 'lucide-react'

export default function PackageCard({ pkg }) {
  const gold = pkg.accent === 'gold'
  return (
    <div
      className={`relative p-6 transition hover:-translate-y-1 ${
        gold ? 'card-gold hover:shadow-glow-gold-lg' : 'card hover:shadow-glow-blue-lg'
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
          Most Popular
        </span>
      )}

      <div className="mb-3 flex justify-center gap-1">
        {[0, 1, 2].map((i) => (
          <Star key={i} size={16} className="fill-gold text-gold" />
        ))}
      </div>

      <h3 className={`text-center text-lg font-bold ${gold ? 'text-gold' : 'text-electric'}`}>
        {pkg.name}
      </h3>
      <p className="mt-1 text-center text-2xl font-extrabold text-white">{pkg.range}</p>

      <div className="my-4 border-y border-white/10 py-4 text-center">
        <p className="text-3xl font-bold text-gold">{pkg.daily}</p>
        <p className="text-xs uppercase tracking-wider text-slate-400">Daily Mining Income</p>
      </div>

      <ul className="space-y-2 text-sm text-slate-300">
        {[`${pkg.roi} total return`, 'Auto daily payout', 'AI-powered mining', '24×7 monitoring'].map(
          (f) => (
            <li key={f} className="flex items-center gap-2">
              <Check size={15} className={gold ? 'text-gold' : 'text-electric'} /> {f}
            </li>
          ),
        )}
      </ul>

      <button
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          gold
            ? 'bg-gold text-navy-900 hover:shadow-glow-gold-lg'
            : 'border border-electric/40 text-electric hover:bg-electric/10'
        }`}
      >
        Activate Package
      </button>
    </div>
  )
}
