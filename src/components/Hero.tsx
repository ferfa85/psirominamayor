import React from 'react';
import {
  GraduationCap,
  Shield,
  Lock,
  MessageCircle,
  Calendar,
  Receipt,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';
import { ServiceType } from '../types';
import { PHONE_NUMBER_RAW } from '../data';

interface HeroProps {
  selectedService: ServiceType;
  onSelectService: (service: ServiceType) => void;
  onNavigateToModalities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedService,
  onSelectService,
  onNavigateToModalities,
}) => {
  const getWhatsAppMessage = () => {
    switch (selectedService) {
      case 'individual':
        return 'Hola Lic. Romina, quiero consultar por la terapia individual.';
      case 'pareja':
        return 'Hola Lic. Romina, quiero consultar por la terapia de pareja.';
      case 'familia':
        return 'Hola Lic. Romina, quiero consultar por la terapia familiar.';
      case 'supervision':
        return 'Hola Lic. Romina, quiero consultar por la supervisión clínica.';
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ebe6f5]/50 via-[#faf8fd] to-[#f3eef9]/30 py-10 md:py-16 lg:py-20">
      {/* Background ambient blurs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#e9ddff]/30 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-40 right-10 w-96 h-96 bg-[#f0dbff]/25 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#3f2a55] text-xs font-semibold shadow-xs border border-[#ebe6f5]">
                <GraduationCap className="w-4 h-4 text-[#C29B38]" />
                Lic. en Psicología UBA • M.N. 62.507
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ebe6f5] text-[#3E2E4F] text-xs font-medium">
                <Shield className="w-3.5 h-3.5 text-[#645787]" />
                10+ Años de Clínica
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3eef9] text-[#6E8573] text-xs font-medium">
                <Lock className="w-3.5 h-3.5 text-[#6E8573]" />
                Espacio 100% Confidencial
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.18] text-[#3f2a55] tracking-tight font-bold">
              Un espacio seguro y sereno para{' '}
              <span className="italic font-normal text-[#645787]">sanar tus vínculos</span> y reencontrar tu calma.
            </h1>

            {/* Subtitle / Lead */}
            <p className="text-base sm:text-lg text-[#4a454d] leading-relaxed max-w-2xl">
              Psicoterapia sistémica para jóvenes, adultos, parejas y familias. Atención presencial en consultorios en CABA (Núñez) y Vicente López, y modalidad virtual para Argentina y el exterior.
            </p>

            {/* Quick Interactive Selector */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_8px_30px_rgba(62,46,79,0.06)] border border-[#ebe6f5] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#645787] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">forum</span>
                  ¿En qué podemos acompañarte hoy?
                </span>
                <span className="text-[11px] text-[#4a454d] hidden sm:inline">Selección directa</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'individual', label: 'Terapia Individual' },
                  { id: 'pareja', label: 'Terapia de Pareja' },
                  { id: 'familia', label: 'Terapia Familiar' },
                  { id: 'supervision', label: 'Supervisión UBA' },
                ].map((chip) => {
                  const isActive = selectedService === chip.id;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => onSelectService(chip.id as ServiceType)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#ebe6f5] text-[#3f2a55] ring-1 ring-[#3f2a55]/20 shadow-xs'
                          : 'bg-[#f5f3f8] text-[#4a454d] hover:bg-[#ebe6f5] hover:text-[#3f2a55]'
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Immediate Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#059669] text-white font-semibold text-sm shadow-md hover:bg-emerald-700 transition-all duration-300"
                href={`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onNavigateToModalities}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#3f2a55] font-semibold text-sm shadow-xs border border-[#ebe6f5] hover:bg-[#f5f3f8] transition-all"
              >
                <CalendarDays className="w-4 h-4 text-[#645787]" />
                <span>Conocer modalidades y turnos</span>
              </button>
            </div>

            {/* Quick response badge */}
            <div className="flex items-center gap-2 text-[#4a454d] text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
              <span>Respuesta en el transcurso del día • Sin intermediarios</span>
            </div>
          </div>

          {/* Visual Presentation Card Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Containment ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#ebe6f5] via-[#d7c6fe]/40 to-[#f3eef9] rounded-3xl blur-xl opacity-75" />

              {/* Card */}
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-[0_12px_40px_rgba(62,46,79,0.08)] border border-[#ebe6f5] flex flex-col items-center text-center gap-4">
                {/* Metaphorical illustration: From Tangled Thoughts to Calm Clarity */}
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-[340px] p-2.5 rounded-2xl bg-gradient-to-b from-[#f8f5fd] to-white border border-[#ebe6f5] shadow-xs flex items-center justify-center">
                    <img
                      src="/img/del-enredo-a-la-calma.png"
                      alt="Del enredo y la angustia a la serenidad y claridad - Transformación en terapia sistémica"
                      className="w-full h-auto object-contain max-h-24 sm:max-h-28"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-[#645787] tracking-wide mt-2">
                    Del enredo a la calma • Acompañamiento clínico
                  </span>
                </div>

                {/* Professional portrait */}
                <div className="relative mt-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-md ring-4 ring-white">
                    <img
                      className="w-full h-full object-cover object-top"
                      alt="Lic. Romina Natalia Mayor, Psicóloga Clínica UBA"
                      src="/img/romina-mayor-psicologa.jpg"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#C29B38] shadow-xs">
                    <CheckCircle2 className="w-4 h-4 fill-[#C29B38] text-white" />
                  </span>
                </div>

                {/* Name & Titles */}
                <div className="flex flex-col gap-1">
                  <h2 className="font-serif text-xl font-bold text-[#3f2a55]">Lic. Romina Natalia Mayor</h2>
                  <p className="text-xs font-semibold text-[#645787]">Psicóloga Clínica UBA • M.N. 62.507</p>
                  <p className="text-xs text-[#4a454d] mt-0.5">Enfoque Sistémico Relacional • Supervisora clínica</p>
                </div>

                {/* Trust mini grid */}
                <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                  <div className="p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/50 flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#645787] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-[#1b1b1f] font-semibold">Turnos Semanales</span>
                      <span className="text-[11px] text-[#4a454d]">Lunes a Viernes</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/50 flex items-center gap-2.5">
                    <Receipt className="w-4 h-4 text-[#6E8573] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-[#1b1b1f] font-semibold">Factura Oficial</span>
                      <span className="text-[11px] text-[#4a454d]">Reintegro prepagas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
