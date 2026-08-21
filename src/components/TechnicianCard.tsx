import React from 'react';

interface TechnicianCardProps {
  name: string;
  avatarSeed: string;
  status: 'busy' | 'available';
  currentTask?: string;
  onAssign?: () => void;
}

export const TechnicianCard: React.FC<TechnicianCardProps> = ({ name, avatarSeed, status, currentTask, onAssign }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-border-subtle group hover:border-accent-primary/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-bg-surface overflow-hidden flex-shrink-0 border border-border-subtle">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-text-primary font-bold text-sm">{name}</h4>
          <p className="text-text-secondary text-xs mt-0.5">{currentTask || 'Awaiting Assignment'}</p>
        </div>
      </div>
      
      {status === 'available' ? (
        <button 
          onClick={onAssign}
          className="text-accent-primary text-xs font-bold px-3 py-1.5 rounded-pill border border-accent-primary/20 hover:bg-accent-primary/10 transition-colors"
        >
          Assign
        </button>
      ) : (
        <span className="text-text-secondary text-xs font-semibold">Busy</span>
      )}
    </div>
  );
};
