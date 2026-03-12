import { Pet, Appointment, Vet, Service, Vaccine } from '@/types';

export const mockVets: Vet[] = [
  { id: '1', name: 'Dra. Ana Carolina Silva', specialty: 'Clínica Geral', crm: 'CRMV-SP 12345', photoUrl: '' },
  { id: '2', name: 'Dr. Ricardo Mendes', specialty: 'Cirurgia', crm: 'CRMV-SP 12346', photoUrl: '' },
  { id: '3', name: 'Dra. Beatriz Santos', specialty: 'Dermatologia', crm: 'CRMV-SP 12347', photoUrl: '' },
  { id: '4', name: 'Dr. Felipe Oliveira', specialty: 'Ortopedia', crm: 'CRMV-SP 12348', photoUrl: '' },
];

export const mockPets: Pet[] = [
  { id: '1', name: 'Thor', species: 'dog', breed: 'Golden Retriever', sex: 'male', birthDate: '2021-03-15', weight: 32 },
  { id: '2', name: 'Luna', species: 'cat', breed: 'Siamês', sex: 'female', birthDate: '2022-07-20', weight: 4.5 },
  { id: '3', name: 'Bob', species: 'dog', breed: 'Bulldog Francês', sex: 'male', birthDate: '2023-01-10', weight: 12 },
];

export const mockAppointments: Appointment[] = [
  { id: '1', petId: '1', petName: 'Thor', service: 'consultation', vetId: '1', vetName: 'Dra. Ana Carolina Silva', date: '2026-03-15', time: '09:00', status: 'confirmed' },
  { id: '2', petId: '2', petName: 'Luna', service: 'vaccination', vetId: '3', vetName: 'Dra. Beatriz Santos', date: '2026-03-18', time: '14:30', status: 'scheduled' },
  { id: '3', petId: '1', petName: 'Thor', service: 'grooming', date: '2026-03-20', time: '10:00', status: 'scheduled' },
  { id: '4', petId: '3', petName: 'Bob', service: 'consultation', vetId: '2', vetName: 'Dr. Ricardo Mendes', date: '2026-02-28', time: '11:00', status: 'completed' },
];

export const mockServices: Service[] = [
  { id: '1', name: 'Consulta', type: 'consultation', duration: 30, price: 150, description: 'Consulta clínica geral' },
  { id: '2', name: 'Vacinação', type: 'vaccination', duration: 15, price: 80, description: 'Aplicação de vacinas' },
  { id: '3', name: 'Cirurgia', type: 'surgery', duration: 120, price: 800, description: 'Procedimentos cirúrgicos' },
  { id: '4', name: 'Banho e Tosa', type: 'grooming', duration: 60, price: 70, description: 'Banho e tosa completos' },
  { id: '5', name: 'Emergência', type: 'emergency', duration: 45, price: 250, description: 'Atendimento emergencial 24h' },
  { id: '6', name: 'Retorno', type: 'followup', duration: 20, price: 0, description: 'Consulta de retorno gratuita' },
];

export const mockVaccines: Vaccine[] = [
  { id: '1', petId: '1', name: 'V10', date: '2025-03-15', nextDate: '2026-03-15', vetName: 'Dra. Ana Carolina Silva' },
  { id: '2', petId: '1', name: 'Antirrábica', date: '2025-06-10', nextDate: '2026-06-10', vetName: 'Dra. Ana Carolina Silva' },
  { id: '3', petId: '2', name: 'V4', date: '2025-08-20', nextDate: '2026-08-20', vetName: 'Dra. Beatriz Santos' },
  { id: '4', petId: '3', name: 'V10', date: '2025-01-10', nextDate: '2026-01-10', vetName: 'Dr. Ricardo Mendes' },
];

export const availableTimeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];
