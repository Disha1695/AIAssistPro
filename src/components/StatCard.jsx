export default function StatCard({ icon: Icon, label, value, sub, accent = 'electric' }) {
  const accentText = accent === 'gold' ? 'text-gold' : 'text-electric'
  const iconWrap =
    accent === 'gold'
      ? 'bg-gold/10 text-gold border-gold/30'
      : 'bg-electric/10 text-electric border-electric/30'

  return (
    <div className="card p-5 transition hover:-translate-y-0.5 hover:shadow-glow-blue-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p>
          <p className={`stat-value mt-2 ${accentText}`}>{value}</p>
          {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${iconWrap}`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  )
}
