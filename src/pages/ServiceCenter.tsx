import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { StatusBadge } from '../components/StatusBadge';
import { FaultCard } from '../components/FaultCard';
import { TechnicianCard } from '../components/TechnicianCard';
import { AppointmentCard } from '../components/AppointmentCard';
import { Modal } from '../components/Modal';
import { mockVehicles, mockTechnicians, mockAppointments } from '../data/mockData';
import type { Appointment, Technician } from '../data/mockData';
import { mapSeverityToStatus } from '../utils/severity';
export const ServiceCenter: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>(mockTechnicians);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedFault, setSelectedFault] = useState<{ vehicleId: string, faultTitle: string } | null>(null);

  const [isAddAptModalOpen, setIsAddAptModalOpen] = useState(false);
  const [newApt, setNewApt] = useState({ time: '', vehicle: '', serviceType: '' });

  // Get vehicles with faults
  const faultyVehicles = mockVehicles.filter(v => v.faults.length > 0);

  const handleAssignClick = (vehicleId: string, faultTitle: string) => {
    setSelectedFault({ vehicleId, faultTitle });
    setIsAssignModalOpen(true);
  };

  const assignTechnician = (techId: string) => {
    setTechnicians(prev => prev.map(t => {
      if (t.id === techId) {
        return { ...t, status: 'busy', currentTask: selectedFault?.faultTitle };
      }
      return t;
    }));
    setIsAssignModalOpen(false);
  };

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newApt.time && newApt.vehicle && newApt.serviceType) {
      setAppointments(prev => [...prev, {
        id: `ap-${Date.now()}`,
        time: newApt.time,
        vehicle: newApt.vehicle,
        serviceType: newApt.serviceType,
        status: 'scheduled'
      }].sort((a, b) => a.time.localeCompare(b.time)));
      setIsAddAptModalOpen(false);
      setNewApt({ time: '', vehicle: '', serviceType: '' });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg-surface p-4 rounded-card border border-border-subtle">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
              <span className="text-bg-primary font-bold">AI</span>
            </div>
            <h1 className="text-xl font-bold text-text-primary hidden md:block">Service Hub</h1>
            <StatusBadge status="healthy" label="• AI ONLINE" className="px-3 py-1 text-sm bg-status-healthy/20 border-status-healthy/40" />
          </div>
          <div className="flex gap-3">
            <div className="bg-bg-primary px-4 py-2 rounded-pill border border-border-subtle text-xs font-bold uppercase tracking-wider">
              <span className="text-text-secondary">Bays: </span>
              <span className="text-text-primary">4/6</span>
            </div>
            <div className="bg-bg-primary px-4 py-2 rounded-pill border border-border-subtle text-xs font-bold uppercase tracking-wider">
              <span className="text-text-secondary">Parts: </span>
              <span className="text-text-primary">12 Pending</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Critical Faults Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-text-primary font-bold text-lg">Critical Faults</h3>
              <span className="text-status-healthy text-sm font-semibold">{faultyVehicles.reduce((acc, v) => acc + v.faults.length, 0)} Detected</span>
            </div>

            <div className="space-y-4">
              {faultyVehicles.map(vehicle =>
                vehicle.faults.map(fault => (
                  <FaultCard
                    key={fault.id}
                    vehicleName={vehicle.name}
                    licensePlate={vehicle.licensePlate}
                    bay={vehicle.bay}
                    faultTitle={fault.title}
                    severity={mapSeverityToStatus(fault.severity)}
                    onAssign={() => handleAssignClick(vehicle.id, fault.title)}
                    onRunDiagnostics={() => { }}
                    showAssign={fault.severity === 'critical'}
                  />
                ))
              )}
            </div>
          </div>

          {/* Technician Status Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-text-primary font-bold text-lg">Technician Status</h3>
            </div>

            <div className="space-y-4">
              {technicians.map(tech => (
                <TechnicianCard
                  key={tech.id}
                  name={tech.name}
                  avatarSeed={tech.avatarSeed}
                  status={tech.status}
                  currentTask={tech.currentTask}
                  onAssign={() => {
                    setSelectedFault({ vehicleId: 'any', faultTitle: 'General Maintenance' });
                    setIsAssignModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Schedule Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-text-primary font-bold text-lg">Schedule (Today)</h3>
            </div>

            <div className="bg-bg-surface p-6 rounded-card border border-border-subtle h-full relative">
              <div className="space-y-0">
                {appointments.map(apt => (
                  <AppointmentCard
                    key={apt.id}
                    time={apt.time}
                    vehicle={apt.vehicle}
                    serviceType={apt.serviceType}
                    status={apt.status}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsAddAptModalOpen(true)}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-primary text-bg-primary flex items-center justify-center hover:bg-opacity-90 transition-opacity border-4 border-bg-primary"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} title="Assign Technician">
        <div className="space-y-4">
          <p className="text-text-secondary text-sm mb-4">Select an available technician to assign to {selectedFault?.faultTitle}.</p>
          {technicians.filter(t => t.status === 'available').length === 0 ? (
            <p className="text-status-warning text-sm font-semibold">No available technicians.</p>
          ) : (
            <div className="space-y-2">
              {technicians.filter(t => t.status === 'available').map(tech => (
                <button
                  key={tech.id}
                  onClick={() => assignTechnician(tech.id)}
                  className="w-full flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-border-subtle hover:border-accent-primary transition-colors text-left"
                >
                  <span className="text-text-primary font-bold">{tech.name}</span>
                  <span className="text-accent-primary text-xs font-bold px-3 py-1 bg-accent-primary/10 rounded-pill">Assign</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </Modal>

      <Modal isOpen={isAddAptModalOpen} onClose={() => setIsAddAptModalOpen(false)} title="Add Appointment">
        <form onSubmit={handleAddAppointment} className="space-y-4">
          <div>
            <label className="block text-text-secondary text-xs font-bold uppercase tracking-wider mb-2">Time</label>
            <input
              type="text"
              placeholder="e.g. 03:00 PM"
              value={newApt.time}
              onChange={(e) => setNewApt({ ...newApt, time: e.target.value })}
              className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-bold uppercase tracking-wider mb-2">Vehicle</label>
            <input
              type="text"
              placeholder="e.g. Tesla Model Y"
              value={newApt.vehicle}
              onChange={(e) => setNewApt({ ...newApt, vehicle: e.target.value })}
              className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-bold uppercase tracking-wider mb-2">Service Type</label>
            <input
              type="text"
              placeholder="e.g. Tire Rotation"
              value={newApt.serviceType}
              onChange={(e) => setNewApt({ ...newApt, serviceType: e.target.value })}
              className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              required
            />
          </div>
          <button type="submit" className="w-full bg-accent-primary text-bg-primary font-bold py-3 rounded-pill hover:bg-opacity-90 transition-opacity mt-4">
            Schedule Appointment
          </button>
        </form>
      </Modal>

    </DashboardLayout>
  );
};

export default ServiceCenter;
