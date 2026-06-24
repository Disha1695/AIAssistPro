export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-navy-900 shadow-glow-gold">
        <span className="text-lg font-extrabold tracking-tighter">
          <span className="text-electric">A</span>
          <span className="text-gold">D</span>
          <span className="text-electric">A</span>
        </span>
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-sm font-extrabold tracking-wide text-white">
            AI DIGITAL <span className="text-gold">ASSETS</span>
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-electric/70">
            Empowering the digital future
          </p>
        </div>
      )}
    </div>
  )
}
