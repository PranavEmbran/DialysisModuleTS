export interface Patient {
  id?: string | number;
  name: string;
  age?: number;
  gender?: string;
  bloodGroup: string;
  phone?: string;
  address?: string;
  emergencyContact?: string;
  medicalHistory?: string;
  registrationDate?: string;
  catheterDate: string;
  fistulaDate: string;
}

export interface Appointment {
  id?: number;
  patientId: number;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: string;
  notes?: string;
}

export interface Billing {
  id?: string | number;
  patientId: string | number;
  patientName: string;
  date: string;
  amount: number;
  description?: string;
  status: string;
  sessionDate?: string;
  sessionDuration?: number;
  totalAmount?: number;
}

export interface History {
  id?: string | number;
  date: string;
  patientId: string | number;
  patientName: string;
  parameters?: string;
  notes?: string;
  amount?: string;
  age?: string;
  gender?: string;
  treatmentParameters?: any;
  nursingNotes?: string;
}

export interface StaffData {
  technicians: string[];
  doctors: string[];
  units: string[];
}

export interface ScheduleEntry {
  id?: string | number;
  patientName: string;
  date: string;
  time: string;
  dialysisUnit: string;
  technician: string;
  admittingDoctor: string;
  status?: string;
  remarks?: string;
} 