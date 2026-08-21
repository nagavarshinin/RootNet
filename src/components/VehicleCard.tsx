import React from 'react';
import { Car } from 'lucide-react';
import { StatusBadge, type StatusType } from './StatusBadge';

interface VehicleCardProps {
  name: string;
  licensePlate: string;
  status: StatusType;
  bay?: string;
  onClick?: () => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ name, licensePlate, status, bay, onClick }) => {
  return (
    <div
      className="bg-bg-surface p-4 rounded-card border border-border-subtle flex items-center justify-between hover:bg-bg-surface-hover transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-12 bg-bg-primary rounded-lg flex items-center justify-center border border-border-subtle">
          <Car className="w-8 h-8 text-text-secondary" />
        </div>
        <div>
          <h4 className="text-text-primary font-bold">{name}</h4>
          <p className="text-text-secondary text-xs mt-1">
            Lic: {licensePlate} {bay && `• Bay ${bay}`}
          </p>
        </div>
      </div>
      <StatusBadge status={status} />
    </div>
  );
};
