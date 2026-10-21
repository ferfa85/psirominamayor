import React from 'react';
import { X, Check, Clock, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '../types';
import { PHONE_NUMBER_RAW } from '../data';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSchedule: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSchedule,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1b1f]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#ebe6f5] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#f3eef9] border-b border-[#ebe6f5]">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#645787] block mb-1">
              Dispositivo Terapéutico
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#3f2a55]">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 text-[#4a454d] hover:text-[#1b1b1f] hover:bg-white/80 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-[#3f2a55] uppercase tracking-wider mb-2">Fundamento y Alcance</h4>
            <p className="text-sm text-[#4a454d] leading-relaxed">{service.fullDesc}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#3f2a55] uppercase tracking-wider mb-3">Motivos de Consulta Frecuentes</h4>
            <ul className="space-y-2">
              {service.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4a454d]">
                  <span className="w-5 h-5 rounded-full bg-[#ebe6f5] text-[#3f2a55] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#faf8fd] border border-[#ebe6f5]">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#645787]" />
              <div>
                <span className="block text-xs text-[#4a454d]">Duración del encuentro</span>
                <span className="font-semibold text-sm text-[#3f2a55]">{service.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#645787]" />
              <div>
                <span className="block text-xs text-[#4a454d]">Frecuencia recomendada</span>
                <span className="font-semibold text-sm text-[#3f2a55]">{service.frequency}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#faf8fd] border-t border-[#ebe6f5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#059669] hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSchedule(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] text-white font-medium text-xs transition-colors shadow-sm"
          >
            <span>Agendar primera entrevista</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
