import React from 'react';
import { Clock } from 'lucide-react';

interface AppointmentCardProps {
  time: string;
  vehicle: string;
  serviceType: string;
  status: 'scheduled' | 'in-progress' | 'waiting';
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ time, vehicle, serviceType }) => {
  return (
    <div className="relative pl-6 pb-6 border-l-2 border-border-subtle last:pb-0">
      <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-border-subtle"></div>
      
      <div className="bg-bg-surface p-4 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-colors">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-text-primary font-bold text-sm">{vehicle}</h4>
          <div className="flex items-center gap-1 text-text-secondary text-xs font-medium">
            <Clock className="w-3 h-3" />
            {time}
          </div>
        </div>
        <p className="text-text-secondary text-xs">{serviceType}</p>
      </div>
    </div>
  );
};
