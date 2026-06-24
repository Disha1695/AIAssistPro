import { Pickaxe, UserPlus, GitMerge } from 'lucide-react'

const ICONS = [Pickaxe, UserPlus, GitMerge]

export default function IncomeTypeCard({ item, index }) {
  const Icon = ICONS[index % ICONS.length]
  const gold = index === 0
  return (
    <div className="card p-5 transition hover:-translate-y-1 hover:shadow-glow-blue-lg">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
            gold ? 'border-gold/30 bg-gold/10 text-gold' : 'border-electric/30 bg-electric/10 text-electric'
          }`}
        >
          <Icon size={20} />
        </div>
        <span className="rounded-full border border-white/10 bg-navy-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {item.tag}
        </span>
      </div>
      <h3 className="mt-4 font-bold text-white">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
      <p className={`mt-3 text-lg font-bold ${gold ? 'text-gold' : 'text-electric'}`}>{item.value}</p>
    </div>
  )
}
