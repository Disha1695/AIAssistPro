import { Info, CalendarClock, Percent, Coins, Network, ShieldCheck } from 'lucide-react'

const ICONS = [CalendarClock, Percent, Coins, Network, ShieldCheck, Info]

export default function WithdrawalInfoBox({ items }) {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center gap-2">
        <Info size={16} className="text-brand" />
        <h2 className="section-title">Withdrawal Information</h2>
      </div>
      <ul className="space-y-3">
        {items.map((text, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                <Icon size={13} />
              </span>
              <span className="text-muted">{text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
