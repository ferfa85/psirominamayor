import React from 'react';
import { Network, Zap, Sparkles, Infinity, HelpCircle } from 'lucide-react';

interface SystemicSectionProps {
  onOpenSystemicModal: () => void;
  onStartConsult: () => void;
}

export const SystemicSection: React.FC<SystemicSectionProps> = ({
  onOpenSystemicModal,
  onStartConsult,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white" id="enfoque-sistemico">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-2 mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
            Marco Teórico Contemporáneo
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
            ¿Por qué el Enfoque Sistémico Relacional?
          </h2>
          <p className="text-sm sm:text-base text-[#4a454d] leading-relaxed">
            Entendemos que los seres humanos vivimos en constante interacción con nuestras parejas, familias, amistades y trabajos. Un cambio en una parte transforma la totalidad.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#f3eef9]/60 p-6 sm:p-8 rounded-2xl border border-[#ebe6f5] shadow-xs flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#3f2a55] border border-[#ebe6f5]/50">
              <Network className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-[#645787] uppercase tracking-wider">
              01 • CONEXIÓN
            </span>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Mirada Integral</h3>
            <p className="text-sm text-[#4a454d] leading-relaxed">
              No estás solo con tu problema. Comprendemos tus vínculos, tus contextos diarios y la historia relacional que da sentido a lo que estás viviendo.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#f3eef9]/60 p-6 sm:p-8 rounded-2xl border border-[#ebe6f5] shadow-xs flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#3f2a55] border border-[#ebe6f5]/50">
              <Zap className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-[#645787] uppercase tracking-wider">
              02 • PRAGMATISMO
            </span>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Soluciones Concretas</h3>
            <p className="text-sm text-[#4a454d] leading-relaxed">
              Focalizamos en el presente para destrabar circuitos de comunicación circulares y patrones de conducta repetitivos que hoy te generan malestar.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#f3eef9]/60 p-6 sm:p-8 rounded-2xl border border-[#ebe6f5] shadow-xs flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#3f2a55] border border-[#ebe6f5]/50">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-[#645787] uppercase tracking-wider">
              03 • EMPODERAMIENTO
            </span>
            <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Potenciamos tus Recursos</h3>
            <p className="text-sm text-[#4a454d] leading-relaxed">
              Rescatamos las fortalezas y capacidades que ya habitan en vos para superar momentos de crisis, pérdidas o transiciones vitales complejas.
            </p>
          </div>
        </div>

        {/* Infographic Banner with interactive explorer button */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#f5f3f8] border border-[#ebe6f5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-full bg-[#ebe6f5] text-[#3f2a55] shrink-0">
              <Infinity className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-serif text-lg font-bold text-[#3f2a55]">
                Intervenciones breves y orientadas al cambio
              </h4>
              <p className="text-xs sm:text-sm text-[#4a454d]">
                Sin análisis interminables ni dependencias innecesarias: trabajamos con objetivos claros pactados en conjunto.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenSystemicModal}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-full border border-[#ebe6f5] bg-white text-xs font-semibold text-[#645787] hover:bg-[#ebe6f5] transition-all flex items-center justify-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              <span>¿Cómo funciona?</span>
            </button>

            <button
              type="button"
              onClick={onStartConsult}
              className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] text-white text-xs font-semibold transition-all shadow-xs"
            >
              Iniciar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
