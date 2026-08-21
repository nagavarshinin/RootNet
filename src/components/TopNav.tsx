import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

export const TopNav: React.FC = () => {
  return (
    <header className="h-20 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 text-text-secondary hover:text-text-primary">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex items-center gap-2 bg-bg-surface border border-border-subtle rounded-pill px-4 py-2 w-96">
          <Search className="w-4 h-4 text-text-secondary" />
          <input 
            type="text" 
            placeholder="Search vehicles, alerts, technicians..." 
            className="bg-transparent border-none outline-none text-sm text-text-primary w-full placeholder:text-text-secondary"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-status-critical rounded-full border-2 border-bg-primary"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-bg-surface border border-border-subtle overflow-hidden flex items-center justify-center cursor-pointer hover:border-accent-primary transition-colors">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};
