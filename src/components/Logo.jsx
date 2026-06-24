export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-400 via-brand to-blue-700 text-sm font-extrabold tracking-tighter text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.7),inset_0_1px_0_rgba(255,255,255,0.4)]">
        <span className="absolute left-1/2 top-0 h-1/2 w-3/4 -translate-x-1/2 rounded-b-full bg-white/25 blur-[2px]" />
        ADA
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-tight text-ink">
            AI Digital <span className="text-gradient-brand">Assets</span>
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            Empowering the future
          </p>
        </div>
      )}
    </div>
  )
}
