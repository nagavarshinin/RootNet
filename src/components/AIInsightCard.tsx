import React from 'react';
import { Activity, Zap } from 'lucide-react';

interface AIInsightCardProps {
  title: string;
  confidence: number;
  description: string;
  rootCause: string;
  onInvestigate: () => void;
}

export const AIInsightCard: React.FC<AIInsightCardProps> = ({ title, confidence, description, rootCause, onInvestigate }) => {
  return (
    <div className="bg-bg-surface p-6 rounded-card border border-border-subtle flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-accent-primary font-semibold text-sm">
          <Activity className="w-4 h-4" />
          AI Diagnosis
        </div>
        <div className="text-accent-primary font-bold text-sm">
          {confidence}% Conf.
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-6 flex-grow">{description}</p>
      
      <div className="bg-bg-primary p-4 rounded-lg border border-border-subtle flex items-start gap-3 mb-6">
        <div className="text-status-critical mt-0.5">
          <Zap className="w-5 h-5 fill-current" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Root Cause</span>
          <p className="text-sm font-semibold text-text-primary">{rootCause}</p>
        </div>
      </div>
      
      <button 
        onClick={onInvestigate}
        className="w-full bg-accent-primary text-bg-primary font-bold py-3 rounded-pill hover:bg-opacity-90 transition-opacity"
      >
        Investigate &rarr;
      </button>
    </div>
  );
};
