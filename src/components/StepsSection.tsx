import React from 'react';
import { Calendar } from 'lucide-react';

interface StepsSectionProps {
  onStartBooking: () => void;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ onStartBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-[#f3eef9]/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center flex flex-col gap-2 mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
            Sin Burocracia ni Fricción
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
            Comenzar es muy simple
          </h2>
          <p className="text-sm sm:text-base text-[#4a454d] max-w-xl mx-auto leading-relaxed">
            Sabemos que pedir ayuda cuesta. Por eso diseñamos un camino claro para que puedas dar el primer paso con absoluta tranquilidad.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgba(62,46,79,0.04)] border border-[#ebe6f5] flex flex-col items-center text-center gap-3 relative hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ebe6f5] text-[#3f2a55] font-bold font-serif text-lg flex items-center justify-center shadow-xs">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Primer Mensaje</h3>
            <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed">
              Me escribís por WhatsApp o formulario comentando en unas breves líneas qué necesitás o qué situación te gustaría abordar.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgba(62,46,79,0.04)] border border-[#ebe6f5] flex flex-col items-center text-center gap-3 relative hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ebe6f5] text-[#3f2a55] font-bold font-serif text-lg flex items-center justify-center shadow-xs">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Coordinación de Turno</h3>
            <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed">
              Elegimos juntos el día, horario y modalidad (presencial en consultorio u online) que mejor se adapte a tu rutina semanal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgba(62,46,79,0.04)] border border-[#ebe6f5] flex flex-col items-center text-center gap-3 relative hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ebe6f5] text-[#3f2a55] font-bold font-serif text-lg flex items-center justify-center shadow-xs">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Primer Encuentro</h3>
            <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed">
              Iniciamos el espacio clínico con calidez, sin juicios, delimitando los objetivos iniciales para que te sientas acompañado desde el minuto uno.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={onStartBooking}
            className="px-8 py-3.5 rounded-full bg-[#3f2a55] text-white font-semibold text-sm shadow-md hover:bg-[#3E2E4F] transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Dar el primer paso hoy</span>
          </button>
        </div>
      </div>
    </section>
  );
};
