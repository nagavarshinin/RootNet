import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-bg-surface p-6 rounded-card border border-border-subtle h-full flex flex-col">
      <h3 className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-6">{title}</h3>
      <div className="flex-grow w-full h-[250px]">
        {children}
      </div>
    </div>
  );
};
