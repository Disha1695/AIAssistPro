// 3D-styled USDT (Tether) coin built purely with CSS gradients & shadows.
export default function Coin({ size = 64, float = true, className = '' }) {
  return (
    <div
      className={`coin coin-ring relative flex shrink-0 items-center justify-center ${
        float ? 'animate-float' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {/* glossy top highlight */}
      <span
        className="absolute left-1/2 top-[12%] h-[28%] w-[55%] -translate-x-1/2 rounded-full bg-white/45 blur-[3px]"
        aria-hidden
      />
      <span
        className="font-bold text-white drop-shadow"
        style={{ fontSize: size * 0.5, lineHeight: 1 }}
      >
        ₮
      </span>
    </div>
  )
}
