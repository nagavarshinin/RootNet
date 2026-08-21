import React from 'react';
import { MobileBottomNav } from '../components/MobileBottomNav';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#000000] sm:bg-black/90 flex items-center justify-center p-0 sm:p-6">
      <div className="w-full h-[100dvh] sm:h-[844px] max-w-[430px] bg-bg-primary relative sm:rounded-[2rem] sm:border-[8px] sm:border-bg-surface overflow-hidden shadow-2xl flex flex-col">
        <main className="flex-1 overflow-y-auto pb-24 relative scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {children}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
};
