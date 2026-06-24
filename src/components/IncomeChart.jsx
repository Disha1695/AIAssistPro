import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { incomeChartData } from '../data'

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gold/40 bg-navy-900 px-3 py-2 shadow-glow-gold">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-bold text-gold">${payload[0].value.toFixed(2)} USDT</p>
      </div>
    )
  }
  return null
}

export default function IncomeChart() {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="section-title text-white">
            Mining Income <span className="text-gold">— Last 7 Days</span>
          </h2>
          <p className="text-xs text-slate-400">Daily payouts in USDT</p>
        </div>
        <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
          +12.4% ▲
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={incomeChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#16234f" />
            <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#FFD700', strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="income"
              stroke="url(#goldLine)"
              strokeWidth={3}
              dot={{ fill: '#FFD700', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#FFD700', stroke: '#0a0f2e', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
