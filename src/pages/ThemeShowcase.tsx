import React from 'react';

const ThemeShowcase = () => {
  return (
    <div className="p-8 space-y-8 min-h-screen">
      <h1 className="text-3xl font-bold text-accent-primary">Theme Showcase</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Colors</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="w-24 h-24 rounded-card bg-bg-primary border border-border-subtle flex items-center justify-center">Primary</div>
          <div className="w-24 h-24 rounded-card bg-bg-surface border border-border-subtle flex items-center justify-center">Surface</div>
          <div className="w-24 h-24 rounded-card bg-bg-surface-hover border border-border-subtle flex items-center justify-center">Hover</div>
          <div className="w-24 h-24 rounded-card bg-accent-primary text-bg-primary font-bold flex items-center justify-center">Accent</div>
          <div className="w-24 h-24 rounded-card bg-accent-primary-dim text-accent-primary flex items-center justify-center text-center">Accent Dim</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Status Colors</h2>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <div className="w-24 h-24 rounded-card bg-status-critical flex items-center justify-center text-white">Critical</div>
          <div className="w-24 h-24 rounded-card bg-status-warning flex items-center justify-center text-white">Warning</div>
          <div className="w-24 h-24 rounded-card bg-status-healthy flex items-center justify-center text-bg-primary">Healthy</div>
          <div className="w-24 h-24 rounded-card bg-status-info flex items-center justify-center text-white">Info</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Typography</h2>
        <div className="space-y-4 bg-bg-surface p-6 rounded-card border border-border-subtle">
          <h1 className="text-4xl font-bold">Heading 1 (4xl)</h1>
          <h2 className="text-3xl font-semibold">Heading 2 (3xl)</h2>
          <h3 className="text-2xl font-semibold">Heading 3 (2xl)</h3>
          <p className="text-base text-text-primary">Body 400. The quick brown fox jumps over the lazy dog.</p>
          <p className="text-text-secondary font-medium">Body 500 Secondary. The quick brown fox jumps over the lazy dog.</p>
          <p className="text-3xl font-bold tabular-nums text-accent-primary">1,234.56</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Components</h2>
        <div className="flex flex-col gap-4 max-w-md">
          {/* Sample Card */}
          <div className="bg-bg-surface p-6 rounded-card border border-border-subtle hover:bg-bg-surface-hover transition-colors cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
            <p className="text-text-secondary mb-6 text-sm">This is how a standard card looks with standard padding (p-6) and radius.</p>
            <button className="bg-accent-primary text-bg-primary font-semibold px-5 py-2 rounded-pill hover:bg-opacity-90 transition-opacity flex items-center justify-center w-full">
              Action Button
            </button>
          </div>

          {/* Sample Badge */}
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wider bg-status-critical/10 text-status-critical border border-status-critical/20">
              Critical
            </span>
            <span className="px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wider bg-status-warning/10 text-status-warning border border-status-warning/20">
              Warning
            </span>
            <span className="px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wider bg-status-healthy/10 text-status-healthy border border-status-healthy/20">
              Optimal
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeShowcase;
