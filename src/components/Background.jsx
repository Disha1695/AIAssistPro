// Decorative animated gradient orbs + subtle grid behind all content.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-drift" />
      <div
        className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gold/15 blur-3xl animate-drift"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tether/15 blur-3xl animate-drift"
        style={{ animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line)) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 75%)',
        }}
      />
    </div>
  )
}
