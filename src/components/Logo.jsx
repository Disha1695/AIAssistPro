// Brinx brand logo — reusable SVG mark + wordmark.
export function BrinxMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="Brinx logo"
      role="img"
    >
      <defs>
        <linearGradient id="brinx-bg" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.55" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="brinx-spark" x1="30" y1="6" x2="44" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      {/* badge */}
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#brinx-bg)" />
      {/* glossy top highlight */}
      <rect x="2" y="2" width="44" height="19" rx="13" fill="#ffffff" opacity="0.14" />
      {/* B monogram */}
      <path
        d="M16 13h9.4c3.7 0 6.2 1.9 6.2 5.1 0 2.1-1.2 3.6-3 4.3 2.3.6 3.8 2.2 3.8 4.7 0 3.5-2.7 5.6-6.8 5.6H16V13Zm8.7 7.8c1.5 0 2.4-.7 2.4-2 0-1.2-.9-1.9-2.4-1.9h-4v3.9h4Zm.5 8.2c1.6 0 2.6-.8 2.6-2.1 0-1.4-1-2.1-2.6-2.1h-4.5V29h4.5Z"
        fill="#ffffff"
      />
      {/* gold spark node */}
      <circle cx="37.5" cy="11.5" r="3.4" fill="url(#brinx-spark)" />
      <circle cx="37.5" cy="11.5" r="3.4" fill="#ffffff" opacity="0.15" />
    </svg>
  )
}

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrinxMark size={40} className="drop-shadow-[0_8px_16px_rgba(37,99,235,0.45)]" />
      {!compact && (
        <div className="leading-tight">
          <p className="text-base font-extrabold tracking-tight text-ink">
            Brinx<span className="text-gradient-brand">.world</span>
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            AI Crypto Mining
          </p>
        </div>
      )}
    </div>
  )
}
