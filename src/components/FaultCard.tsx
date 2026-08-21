import React, { useState } from 'react';
import { Car, Search, UserPlus } from 'lucide-react';
import { StatusBadge, StatusType } from './StatusBadge';

interface FaultCardProps {
  vehicleName: string;
  licensePlate: string;
  bay?: string;
  faultTitle: string;
  severity: StatusType;
  onAssign?: () => void;
  onRunDiagnostics?: () => void;
  showAssign?: boolean;
}

export const FaultCard: React.FC<FaultCardProps> = ({ 
  vehicleName, 
  licensePlate, 
  bay, 
  faultTitle, 
  severity,
  onAssign,
  onRunDiagnostics,
  showAssign = true
}) => {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    if (onRunDiagnostics) {
      onRunDiagnostics();
    }
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="bg-bg-surface p-5 rounded-card border border-border-subtle flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4 w-full">
          <div className="w-14 h-14 bg-bg-primary rounded-lg flex items-center justify-center border border-border-subtle flex-shrink-0">
             <Car className="w-7 h-7 text-text-secondary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start w-full">
               <h4 className="text-text-primary font-bold">{vehicleName}</h4>
               <StatusBadge status={severity} />
            </div>
            <p className="text-text-secondary text-xs mt-1">
              Lic: {licensePlate} {bay && `• Bay ${bay}`}
            </p>
            <p className="text-text-primary text-sm font-medium mt-1">{faultTitle}</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3 justify-end mt-2">
        {showAssign ? (
          <button 
            onClick={onAssign}
            className="flex items-center gap-2 bg-accent-primary text-bg-primary px-4 py-2 rounded-pill font-bold text-sm hover:bg-opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <UserPlus className="w-4 h-4" />
            Assign Technician
          </button>
        ) : (
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 px-4 py-2 rounded-pill font-bold text-sm transition-all w-full sm:w-auto justify-center border ${
              isRunning 
                ? 'bg-bg-surface-hover text-text-secondary border-border-subtle cursor-not-allowed'
                : 'bg-bg-primary text-text-primary hover:bg-bg-surface-hover border-border-subtle'
            }`}
          >
            <Search className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
            {isRunning ? 'Running...' : 'Run Diagnostics'}
          </button>
        )}
      </div>
    </div>
  );
};
