import React from 'react';
import { LucideIcon, MoreVertical } from 'lucide-react';

interface AlertCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColorClass?: string;
  onClick?: () => void;
}

export const AlertCard: React.FC<AlertCardProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  iconColorClass = 'text-status-warning',
  onClick 
}) => {
  return (
    <div 
      className="bg-bg-surface p-4 rounded-card border-l-4 border-y border-r border-y-border-subtle border-r-border-subtle flex items-center justify-between hover:bg-bg-surface-hover transition-colors cursor-pointer group"
      style={{ borderLeftColor: 'currentColor' }}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 w-full" style={{ color: 'var(--border-subtle)' }}>
        <div className={`p-2 rounded-lg bg-bg-primary ${iconColorClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 text-left">
          <h4 className="text-text-primary font-semibold text-sm">{title}</h4>
          <p className="text-text-secondary text-xs mt-0.5">{subtitle}</p>
        </div>
      </div>
      <button 
        className="text-text-secondary hover:text-text-primary p-2 rounded-md hover:bg-bg-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100" 
        onClick={(e) => { e.stopPropagation(); console.log('Alert kebab menu clicked'); }}
      >
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  );
};
