import { Pickaxe, UserPlus, GitMerge } from 'lucide-react'

const ICONS = [Pickaxe, UserPlus, GitMerge]
const CHIPS = [
  'bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 shadow-[0_8px_18px_-6px_rgba(245,158,11,0.6)]',
  'bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]',
  'bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-[0_8px_18px_-6px_rgba(20,184,166,0.6)]',
]

export default function IncomeTypeCard({ item, index }) {
  const Icon = ICONS[index % ICONS.length]
  return (
    <div className="card card-hover group p-5">
      <div className="flex items-center justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${CHIPS[index % CHIPS.length]}`}>
          <Icon size={19} />
        </div>
        <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
          {item.tag}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
      <p className="mt-3 text-base font-bold text-ink">{item.value}</p>
    </div>
  )
}
