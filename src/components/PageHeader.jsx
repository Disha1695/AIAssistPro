export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        <span className="text-gold">{title.split(' ')[0]}</span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </h1>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
    </div>
  )
}
