export interface Fault {
  id: string;
  vehicleId: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  detectedAt: string;
}

export interface Vehicle {
  id: string;
  name: string;
  licensePlate: string;
  healthScore: number;
  status: 'healthy' | 'warning' | 'critical';
  bay?: string;
  faults: Fault[];
}

export interface FleetStats {
  totalVehicles: number;
  criticalCount: number;
  fleetHealthScore: number;
  aiAccuracy: number;
}

export interface Technician {
  id: string;
  name: string;
  avatarSeed: string;
  status: 'busy' | 'available';
  currentTask?: string;
}

export interface Appointment {
  id: string;
  time: string;
  vehicle: string;
  serviceType: string;
  status: 'scheduled' | 'in-progress' | 'waiting';
}

export const fleetStats: FleetStats = {
  totalVehicles: 12405,
  criticalCount: 3,
  fleetHealthScore: 94,
  aiAccuracy: 99.2,
};

export const mockVehicles: Vehicle[] = [
  { id: 'v1', name: 'Tesla Model 3', licensePlate: '8XJ-992', healthScore: 42, status: 'critical', bay: '4', faults: [
    { id: 'f1', vehicleId: 'v1', title: 'Battery Cell Failure', severity: 'critical', description: 'Thermal runaway risk detected in module B', detectedAt: '2024-03-20T10:00:00Z' }
  ]},
  { id: 'v2', name: 'Porsche Taycan', licensePlate: 'PORS-01', healthScore: 68, status: 'warning', bay: 'Intake', faults: [
    { id: 'f2', vehicleId: 'v2', title: 'Thermal Management', severity: 'high', description: 'Coolant flow restricted', detectedAt: '2024-03-20T11:30:00Z' }
  ]},
  { id: 'v3', name: 'Ford F-150 Lightning', licensePlate: 'F150-EV', healthScore: 95, status: 'healthy', faults: [] },
];

export const mockAlerts = [
  { id: 'a1', title: 'Powertrain Malfunction', subtitle: 'VIN-8829X • 2m ago', severity: 'critical' },
  { id: 'a2', title: 'Tire Pressure Low', subtitle: 'VIN-4402Q • 15m ago', severity: 'warning' },
  { id: 'a3', title: 'OTA Update Pending', subtitle: 'Fleet Wide • 1h ago', severity: 'info' },
];

export const mockHealthTrend = [
  { day: 'Mon', score: 85 },
  { day: 'Tue', score: 87 },
  { day: 'Wed', score: 89 },
  { day: 'Thu', score: 92 },
  { day: 'Fri', score: 91 },
  { day: 'Sat', score: 93 },
  { day: 'Sun', score: 94 },
];

export const mockFaultCategories = [
  { name: 'Battery', value: 45 },
  { name: 'Powertrain', value: 30 },
  { name: 'Sensors', value: 15 },
  { name: 'Software', value: 10 },
];

export const mockTechnicians: Technician[] = [
  { id: 't1', name: 'Mike R.', avatarSeed: 'Mike', status: 'busy', currentTask: 'Replacing Brake Calipers' },
  { id: 't2', name: 'Sarah L.', avatarSeed: 'Sarah', status: 'available' },
  { id: 't3', name: 'David K.', avatarSeed: 'David', status: 'busy', currentTask: 'Engine Diagnostics' },
];

export const mockAppointments: Appointment[] = [
  { id: 'ap1', time: '10:00 AM', vehicle: 'Ford F-150 Lightning', serviceType: 'Regular Maintenance • Oil Change', status: 'scheduled' },
  { id: 'ap2', time: '11:30 AM', vehicle: 'BMW i3', serviceType: 'Sensor Calibration • ADAS Check', status: 'scheduled' },
  { id: 'ap3', time: '02:00 PM', vehicle: 'Rivian R1T', serviceType: 'Suspension check • Client Waiting', status: 'scheduled' },
];
