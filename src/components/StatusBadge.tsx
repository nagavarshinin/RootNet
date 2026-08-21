import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type StatusType = 'critical' | 'warning' | 'healthy' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; bg: string; text: string; border: string }> = {
  critical: { label: 'Critical', bg: 'bg-status-critical/10', text: 'text-status-critical', border: 'border-status-critical/20' },
  warning: { label: 'Warning', bg: 'bg-status-warning/10', text: 'text-status-warning', border: 'border-status-warning/20' },
  healthy: { label: 'Optimal', bg: 'bg-status-healthy/10', text: 'text-status-healthy', border: 'border-status-healthy/20' },
  info: { label: 'Info', bg: 'bg-status-info/10', text: 'text-status-info', border: 'border-status-info/20' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, className }) => {
  const config = statusConfig[status];
  return (
    <span className={twMerge(clsx(
      'px-2 py-0.5 rounded-pill text-[10px] sm:text-xs font-bold uppercase tracking-wider border',
      config.bg, config.text, config.border, className
    ))}>
      {label || config.label}
    </span>
  );
};
