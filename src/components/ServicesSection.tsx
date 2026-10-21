import React from 'react';
import {
  User,
  Heart,
  Users,
  ClipboardList,
  ArrowRight,
  Info,
  MessageCircle
} from 'lucide-react';
import { SERVICES, PHONE_NUMBER_RAW } from '../data';
import { ServiceDetail, ServiceType } from '../types';

interface ServicesSectionProps {
  selectedService: ServiceType;
  onSelectService: (service: ServiceType) => void;
  onOpenDetails: (service: ServiceDetail) => void;
  onOpenBookingForService: (serviceId: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedService,
  onSelectService,
  onOpenDetails,
  onOpenBookingForService,
}) => {
  const getIcon = (id: ServiceType) => {
    switch (id) {
      case 'individual':
        return <User className="w-6 h-6 text-[#3f2a55]" />;
      case 'pareja':
        return <Heart className="w-6 h-6 text-[#3f2a55]" />;
      case 'familia':
        return <Users className="w-6 h-6 text-[#3f2a55]" />;
      case 'supervision':
        return <ClipboardList className="w-6 h-6 text-[#3f2a55]" />;
    }
  };

  const getActionLabel = (id: ServiceType) => {
    switch (id) {
      case 'individual':
        return 'Consultar por Terapia Individual';
      case 'pareja':
        return 'Consultar por Parejas';
      case 'familia':
        return 'Consultar por Familias';
      case 'supervision':
        return 'Consultar Supervisión';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf8fd]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-xl flex flex-col gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
              Propuestas Clínicas
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
              Áreas de Atención Especializada
            </h2>
            <p className="text-sm sm:text-base text-[#4a454d]">
              Dispositivos diseñados con calidez para acompañar cada momento y configuración vital.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ebe6f5] text-[#3E2E4F]">
              Presencial • Virtual
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f3eef9] text-[#C29B38]">
              Adultos & Jóvenes
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => {
            const isHighlighted = selectedService === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => onSelectService(srv.id)}
                className={`bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHighlighted
                    ? 'border-[#3f2a55] shadow-[0_8px_30px_rgba(63,42,85,0.12)] ring-1 ring-[#3f2a55]/20 -translate-y-1'
                    : 'border-[#ebe6f5] shadow-xs hover:shadow-md hover:border-[#645787]/30'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#f3eef9] flex items-center justify-center">
                      {getIcon(srv.id)}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetails(srv);
                      }}
                      className="p-1.5 text-[#645787] hover:text-[#3f2a55] hover:bg-[#ebe6f5] rounded-full transition-colors text-xs flex items-center gap-1"
                      title="Ver detalles clínicos"
                    >
                      <Info className="w-4 h-4" />
                      <span className="text-[11px] font-medium hidden sm:inline">Detalles</span>
                    </button>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#3f2a55]">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {srv.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#f5f3f8] text-xs text-[#4a454d] border border-[#ebe6f5]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#ebe6f5]/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBookingForService(srv.id);
                    }}
                    className="inline-flex items-center gap-1.5 text-[#3f2a55] font-semibold text-xs hover:text-[#645787] transition-colors group"
                  >
                    <span>{getActionLabel(srv.id)}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(srv.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-[#25D366]/10 text-[#059669] hover:bg-[#25D366]/20 transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                    title={`Consultar por ${srv.title} vía WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#059669]" />
                    <span className="hidden sm:inline text-[11px]">WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
