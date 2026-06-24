import { Info, CalendarClock, Percent, Coins, Network } from 'lucide-react'

const ICONS = [CalendarClock, Percent, Coins, Network, Info, Info]

export default function WithdrawalInfoBox({ items }) {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center gap-2">
        <Info size={18} className="text-electric" />
        <h2 className="section-title text-white">Withdrawal Information</h2>
      </div>
      <ul className="space-y-3">
        {items.map((text, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-electric/30 bg-electric/10 text-electric">
                <Icon size={14} />
              </span>
              <span>{text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
