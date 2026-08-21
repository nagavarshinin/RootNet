import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ThemeShowcase from './pages/ThemeShowcase';
import OemDashboard from './pages/OemDashboard';
import ServiceCenter from './pages/ServiceCenter';
import OwnerApp from './pages/OwnerApp';

const Landing = () => (
  <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-accent-primary mb-2">RootNet</h1>
      <p className="text-text-secondary">Vehicle Predictive Maintenance Platform</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
      <Link to="/oem" className="bg-bg-surface p-6 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-all text-center flex flex-col items-center justify-center gap-2 group">
        <span className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">OEM Dashboard</span>
        <span className="text-sm text-text-secondary">Fleet overview & AI insights</span>
      </Link>
      
      <Link to="/service" className="bg-bg-surface p-6 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-all text-center flex flex-col items-center justify-center gap-2 group">
        <span className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Service Center</span>
        <span className="text-sm text-text-secondary">Fault management & assignments</span>
      </Link>
      
      <Link to="/owner" className="bg-bg-surface p-6 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-all text-center flex flex-col items-center justify-center gap-2 group md:col-span-2 max-w-sm mx-auto w-full">
        <span className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Owner App</span>
        <span className="text-sm text-text-secondary">Mobile vehicle health & service</span>
      </Link>
    </div>

    <div className="pt-12 border-t border-border-subtle w-full max-w-xs text-center">
      <Link to="/theme" className="inline-flex items-center justify-center bg-accent-primary/10 text-accent-primary border border-accent-primary/20 px-6 py-2 rounded-pill hover:bg-accent-primary/20 transition-colors font-semibold text-sm">
        View Theme Showcase
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/theme" element={<ThemeShowcase />} />
        <Route path="/oem" element={<OemDashboard />} />
        <Route path="/service" element={<ServiceCenter />} />
        <Route path="/owner" element={<OwnerApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
