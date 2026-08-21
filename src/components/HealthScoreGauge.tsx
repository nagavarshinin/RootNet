import React from 'react';
import { CircularProgress } from './CircularProgress';

interface HealthScoreGaugeProps {
  score: number;
  size?: number;
}

export const HealthScoreGauge: React.FC<HealthScoreGaugeProps> = ({ score, size = 160 }) => {
  let statusColor = 'var(--status-healthy)';
  let label = 'OPTIMAL';

  if (score < 40) {
    statusColor = 'var(--status-critical)';
    label = 'CRITICAL';
  } else if (score < 80) {
    statusColor = 'var(--status-warning)';
    label = 'ATTENTION';
  }

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      <CircularProgress value={score} size={size} color={statusColor} strokeWidth={size * 0.08} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex items-start">
          <span className="text-5xl font-bold tabular-nums text-text-primary leading-none">{score}</span>
          <span className="text-2xl font-bold text-text-secondary">%</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: statusColor }}>
          {label}
        </span>
      </div>
    </div>
  );
};
