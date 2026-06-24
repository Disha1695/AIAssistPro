import { CheckCircle2, Clock } from 'lucide-react'

export default function StatusBadge({ status }) {
  if (status === 'Success' || status === 'Active') {
    return (
      <span className="badge-success">
        <CheckCircle2 size={12} /> {status}
      </span>
    )
  }
  return (
    <span className="badge-pending">
      <Clock size={12} /> {status}
    </span>
  )
}
