export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  sex: 'male' | 'female';
  birthDate: string;
  photoUrl?: string;
  weight?: number;
}

export interface Appointment {
  id: string;
  petId: string;
  petName: string;
  service: ServiceType;
  vetId?: string;
  vetName?: string;
  date: string;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
}

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  photoUrl?: string;
  crm: string;
}

export interface Vaccine {
  id: string;
  petId: string;
  name: string;
  date: string;
  nextDate?: string;
  vetName: string;
}

export interface MedicalRecord {
  id: string;
  petId: string;
  date: string;
  vetName: string;
  diagnosis: string;
  treatment: string;
  notes: string;
}

export type ServiceType = 'consultation' | 'vaccination' | 'surgery' | 'grooming' | 'emergency' | 'followup';

export interface Service {
  id: string;
  name: string;
  type: ServiceType;
  duration: number; // minutes
  price: number;
  description: string;
}

export interface Tutor {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
}

export type UserRole = 'tutor' | 'vet' | 'receptionist' | 'admin';
