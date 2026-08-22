import type { StatusType } from '../components/StatusBadge';

export function mapSeverityToStatus(severity: string | undefined): StatusType {
  switch (severity) {
    case 'critical':
      return 'critical';
    case 'high':
    case 'medium':
      return 'warning';
    case 'low':
      return 'healthy';
    default:
      return 'info';
  }
}
