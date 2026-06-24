export default function StatCard({ icon: Icon, label, value, sub, trend, accent = 'brand' }) {
  const gold = accent === 'gold'
  const chip = gold
    ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 shadow-[0_8px_18px_-6px_rgba(245,158,11,0.6)]'
    : 'bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]'
  const bar = gold ? 'from-amber-400/70' : 'from-brand/70'

  return (
    <div className="card card-hover group relative overflow-hidden p-5">
      {/* top accent bar */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${bar} to-transparent`} />
      {/* faint watermark icon */}
      <Icon
        size={92}
        className="pointer-events-none absolute -bottom-4 -right-3 text-ink/[0.03] transition group-hover:text-ink/[0.05]"
      />

      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${chip}`}>
          <Icon size={18} />
        </div>
      </div>

      <p className="stat-value mt-3 text-ink">{value}</p>
      <div className="mt-1 flex items-center gap-2">
        {trend && <span className="text-xs font-semibold text-positive">{trend}</span>}
        {sub && <p className="text-xs text-muted">{sub}</p>}
      </div>
    </div>
  )
}
