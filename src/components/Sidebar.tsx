import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wrench, Smartphone, Settings } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-bg-surface border-r border-border-subtle h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-accent-primary rounded-md flex items-center justify-center">
          <LayoutDashboard className="text-bg-primary w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-text-primary tracking-wide">RootNet</span>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <NavLink 
          to="/oem" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-bg-surface-hover text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover'}`}
        >
          <LayoutDashboard className="w-5 h-5" />
          OEM Dashboard
        </NavLink>
        <NavLink 
          to="/service" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-bg-surface-hover text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover'}`}
        >
          <Wrench className="w-5 h-5" />
          Service Center
        </NavLink>
        <NavLink 
          to="/owner" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive ? 'bg-bg-surface-hover text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover'}`}
        >
          <Smartphone className="w-5 h-5" />
          Owner App
        </NavLink>
      </nav>

      <div className="p-4 mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover transition-colors font-medium w-full text-left">
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </div>
    </aside>
  );
};
