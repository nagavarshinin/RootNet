import React from 'react';
import type { LucideIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend, trendUp }) => {
  return (
    <div className="bg-bg-surface p-6 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-text-secondary text-sm font-semibold uppercase tracking-wider">{title}</h3>
        <Icon className="text-text-secondary w-5 h-5" />
      </div>
      <div className="flex items-end gap-3">
        <span className="text-3xl font-bold tabular-nums text-text-primary">{value}</span>
        {trend && (
          <span className={`text-sm font-semibold mb-1 ${trendUp ? 'text-status-healthy' : 'text-status-critical'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};
