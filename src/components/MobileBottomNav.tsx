import React, { useState } from 'react';
import { Home, Car, Wrench, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'vehicle', icon: Car, label: 'Vehicle' },
    { id: 'service', icon: Wrench, label: 'Service' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="h-20 bg-bg-surface border-t border-border-subtle flex items-center justify-around px-2 pb-4 absolute bottom-0 w-full z-40 sm:rounded-b-[1.5rem]">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors pt-2 ${activeTab === tab.id ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}
        >
          <tab.icon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-semibold tracking-wide">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
