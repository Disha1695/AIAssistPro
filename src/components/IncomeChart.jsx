import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { incomeChartData } from '../data'
import { useTheme } from '../theme'

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-line bg-surface px-3 py-2 shadow-lift">
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm font-semibold text-ink">${payload[0].value.toFixed(2)} USDT</p>
      </div>
    )
  }
  return null
}

export default function IncomeChart() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const line = isDark ? '#38bdf8' : '#2563eb'
  const grid = isDark ? '#212c47' : '#e2e8f0'
  const axis = isDark ? '#94a3b8' : '#64748b'

  return (
    <div className="card p-5">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="section-title">Mining Income</h2>
          <p className="text-xs text-muted">Daily payouts over the last 7 days (USDT)</p>
        </div>
        <span className="rounded-md bg-positive/10 px-2.5 py-1 text-xs font-semibold text-positive">
          +12.4%
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={incomeChartData} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={line} stopOpacity={0.25} />
                <stop offset="100%" stopColor={line} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
            <XAxis dataKey="day" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: line, strokeWidth: 1, strokeOpacity: 0.4 }} />
            <Area
              type="monotone"
              dataKey="income"
              stroke={line}
              strokeWidth={2.5}
              fill="url(#incomeFill)"
              dot={{ fill: line, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: line, stroke: isDark ? '#080d19' : '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
