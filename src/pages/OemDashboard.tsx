import React, { useState } from 'react';
import { Car, AlertTriangle, Brain, FileText, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { HealthScoreGauge } from '../components/HealthScoreGauge';
import { StatCard } from '../components/StatCard';
import { AIInsightCard } from '../components/AIInsightCard';
import { AlertCard } from '../components/AlertCard';
import { ChartCard } from '../components/ChartCard';
import { Modal } from '../components/Modal';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { fleetStats, mockAlerts, mockHealthTrend, mockFaultCategories } from '../data/mockData';

export const OemDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleInvestigate = () => {
    setModalContent({
      title: 'AI Diagnosis Details',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary text-sm">Detailed root cause analysis for predicted anomaly.</p>
          <div className="bg-bg-primary p-4 rounded-lg border border-border-subtle">
            <h4 className="text-text-primary font-bold mb-2">Thermal Runaway Risk</h4>
            <p className="text-status-critical font-semibold mb-4">Cell Block B Voltage Variance detected.</p>
            <ul className="text-sm text-text-secondary list-disc pl-5 space-y-1">
              <li>Affected Vehicle: Tesla Model 3 (8XJ-992)</li>
              <li>Timestamp: 10 mins ago</li>
              <li>Recommended Action: Immediate technician inspection required.</li>
            </ul>
          </div>
        </div>
      )
    });
    setIsModalOpen(true);
  };

  const handleAlertClick = (alert: any) => {
    setModalContent({
      title: 'Alert Details',
      content: (
        <div className="space-y-4">
          <h4 className="text-text-primary font-bold">{alert.title}</h4>
          <p className="text-text-secondary text-sm">{alert.subtitle}</p>
          <p className="text-text-primary text-sm mt-4">Status: <span className={alert.severity === 'critical' ? 'text-status-critical' : 'text-status-warning'}>{alert.severity.toUpperCase()}</span></p>
        </div>
      )
    });
    setIsModalOpen(true);
  };

  const recentActivity = [
    { id: 1, icon: CheckCircle2, text: 'OTA Update 1.4 deployed successfully', time: '10m ago', color: 'text-status-healthy' },
    { id: 2, icon: AlertCircle, text: 'New critical fault reported (VIN-8829X)', time: '45m ago', color: 'text-status-critical' },
    { id: 3, icon: Wrench, text: 'Service completed for Porsche Taycan', time: '2h ago', color: 'text-status-info' },
    { id: 4, icon: FileText, text: 'Monthly fleet health report generated', time: '5h ago', color: 'text-text-secondary' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        
        {/* Top Section: Health Score & Stats */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-bg-surface rounded-card border border-border-subtle w-full lg:w-72">
            <h3 className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-6 w-full text-center">Fleet Health Score</h3>
            <HealthScoreGauge score={fleetStats.fleetHealthScore} size={180} />
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
              title="Vehicles" 
              value={fleetStats.totalVehicles.toLocaleString()} 
              icon={Car} 
              trend="+12 this week" 
              trendUp={true} 
            />
            <StatCard 
              title="Critical" 
              value={fleetStats.criticalCount} 
              icon={AlertTriangle} 
              trend="Action Required" 
              trendUp={false} 
            />
            <StatCard 
              title="AI Accuracy" 
              value={`${fleetStats.aiAccuracy}%`} 
              icon={Brain} 
              trend="+0.4% this month" 
              trendUp={true} 
            />
          </div>
        </div>

        {/* RCA & Alerts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AIInsightCard 
              title="Thermal Runaway Risk"
              confidence={98}
              description="Predicted anomaly detected in battery module B sequence."
              rootCause="Cell Block B Voltage Variance"
              onInvestigate={handleInvestigate}
            />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-4">Active Alerts</h3>
            <div className="space-y-3 flex-1">
              {mockAlerts.map(alert => (
                <AlertCard 
                  key={alert.id}
                  title={alert.title}
                  subtitle={alert.subtitle}
                  icon={AlertTriangle}
                  iconColorClass={alert.severity === 'critical' ? 'text-status-critical' : alert.severity === 'warning' ? 'text-status-warning' : 'text-status-info'}
                  onClick={() => handleAlertClick(alert)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChartCard title="Fleet Health Trend">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockHealthTrend} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                <XAxis dataKey="day" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 100]} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Line type="monotone" dataKey="score" stroke="var(--accent-primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--bg-surface)', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard title="Fault Categories">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockFaultCategories} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  cursor={{ fill: 'var(--bg-surface-hover)' }}
                />
                <Bar dataKey="value" fill="var(--accent-primary-dim)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Recent Activity Section */}
        <div>
          <h3 className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-4">Recent Activity</h3>
          <div className="bg-bg-surface rounded-card border border-border-subtle overflow-hidden">
            {recentActivity.map((activity, index) => (
              <div key={activity.id} className={`flex items-start gap-4 p-4 ${index !== recentActivity.length - 1 ? 'border-b border-border-subtle' : ''}`}>
                <activity.icon className={`w-5 h-5 mt-0.5 ${activity.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary">{activity.text}</p>
                  <p className="text-xs text-text-secondary mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalContent?.title || ''}
      >
        {modalContent?.content}
      </Modal>
    </DashboardLayout>
  );
};

export default OemDashboard;
