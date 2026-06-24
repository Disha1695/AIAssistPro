import { CheckCircle2, Clock } from 'lucide-react'

export default function StatusBadge({ status }) {
  if (status === 'Success' || status === 'Active') {
    return (
      <span className="badge-success">
        <CheckCircle2 size={12} /> {status}
      </span>
    )
  }
  if (status === 'Inactive') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted/10 px-2.5 py-0.5 text-xs font-medium text-muted">
        {status}
      </span>
    )
  }
  return (
    <span className="badge-pending">
      <Clock size={12} /> {status}
    </span>
  )
}
