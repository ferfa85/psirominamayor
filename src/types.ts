export type ServiceType = 'individual' | 'pareja' | 'familia' | 'supervision';

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  shortDesc: string;
  tags: string[];
  fullDesc: string;
  symptoms: string[];
  frequency: string;
  duration: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'honorarios' | 'modalidad' | 'supervision';
  question: string;
  answer: string;
}
