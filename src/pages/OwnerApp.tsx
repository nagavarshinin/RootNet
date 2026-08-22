import React, { useState } from 'react';
import { MobileLayout } from '../layouts/MobileLayout';
import { HealthScoreGauge } from '../components/HealthScoreGauge';
import { VoiceAssistant } from '../components/VoiceAssistant';
import { Modal } from '../components/Modal';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { mockVehicles } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';
import { mapSeverityToStatus } from '../utils/severity';

export const OwnerApp: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  
  const [isFaultDetailOpen, setIsFaultDetailOpen] = useState(false);

  // For the owner app, we'll pick the first vehicle as the context
  const myVehicle = mockVehicles[0];
  const activeFault = myVehicle.faults[0];

  const handleBookService = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingDate) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setIsBookingModalOpen(false);
        setBookingDate('');
      }, 2000);
    }
  };

  return (
    <MobileLayout>
      <div className="p-6 space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-start pt-4">
          <div>
            <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-status-healthy"></div>
              CONNECTED — {myVehicle.name}
            </div>
            <h1 className="text-3xl font-bold text-text-primary">Good Morning,<br/>Alex</h1>
          </div>
          <div className="w-12 h-12 rounded-full bg-bg-surface border-2 border-border-subtle overflow-hidden flex-shrink-0">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Health Score */}
        <div className="flex flex-col items-center justify-center py-4">
          <HealthScoreGauge score={myVehicle.healthScore} size={220} />
          <h2 className="text-text-secondary font-bold uppercase tracking-wider text-sm mt-4">Vehicle Health</h2>
        </div>

        {/* Active Fault */}
        {activeFault && (
          <div className="bg-bg-surface p-5 rounded-card border-l-4 border-l-status-critical border-y border-r border-y-border-subtle border-r-border-subtle">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-status-critical flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-text-primary font-bold text-lg leading-tight">Attention Required</h3>
                <p className="text-text-secondary text-sm mt-1">{activeFault.description}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <button onClick={() => setIsFaultDetailOpen(true)} className="px-3 py-1.5 rounded-pill text-[10px] font-bold uppercase tracking-wider bg-bg-primary text-text-secondary border border-border-subtle hover:border-accent-primary transition-colors focus:outline-none">
                Tire Pressure
              </button>
              <button onClick={() => setIsFaultDetailOpen(true)} className="px-3 py-1.5 rounded-pill text-[10px] font-bold uppercase tracking-wider bg-bg-primary text-text-secondary border border-border-subtle hover:border-accent-primary transition-colors focus:outline-none">
                Sensor
              </button>
            </div>
          </div>
        )}

        {/* Voice Assistant */}
        <VoiceAssistant />

        {/* Book Service CTA */}
        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="w-full bg-accent-primary text-bg-primary font-bold py-4 rounded-pill hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(52,226,122,0.2)] focus:outline-none"
        >
          Book Service Now
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>

      {/* Booking Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} title="Schedule Service">
        {isBooked ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-status-healthy/20 text-status-healthy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Service Confirmed</h3>
            <p className="text-text-secondary">Your appointment has been scheduled.</p>
          </div>
        ) : (
          <form onSubmit={handleBookService} className="space-y-4">
            <p className="text-sm text-text-secondary mb-4">Scheduling service for <strong>{myVehicle.name}</strong> to address <strong>{activeFault?.title || 'General Maintenance'}</strong>.</p>
            
            <div>
               <label className="block text-text-secondary text-xs font-bold uppercase tracking-wider mb-2">Select Date & Time</label>
               <input 
                 type="datetime-local" 
                 value={bookingDate}
                 onChange={(e) => setBookingDate(e.target.value)}
                 className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                 required
               />
            </div>
            
            <button type="submit" className="w-full bg-accent-primary text-bg-primary font-bold py-3 rounded-pill hover:bg-opacity-90 transition-opacity mt-4">
              Confirm Booking
            </button>
          </form>
        )}
      </Modal>

      {/* Fault Detail Modal */}
      <Modal isOpen={isFaultDetailOpen} onClose={() => setIsFaultDetailOpen(false)} title="Fault Details">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-text-primary">{activeFault?.title}</h3>
            <StatusBadge status={mapSeverityToStatus(activeFault?.severity)} />
            <p className="text-text-secondary text-sm mt-4">{activeFault?.description}</p>
         </div>
      </Modal>

    </MobileLayout>
  );
};

export default OwnerApp;
