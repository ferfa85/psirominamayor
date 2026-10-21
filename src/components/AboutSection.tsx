import React from 'react';
import {
  Sparkles,
  School,
  Users,
  Eye,
  Brain,
  Quote
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf8fd]" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Card Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f3eef9] shadow-[0_4px_24px_rgba(62,46,79,0.05)] border border-[#ebe6f5] relative overflow-hidden">
              {/* Subtle background glyph */}
              <Brain className="w-32 h-32 text-[#3f2a55]/5 absolute -right-6 -bottom-6 select-none pointer-events-none" />

              <span className="inline-block px-3 py-1 rounded-full bg-[#ebe6f5] text-[#3f2a55] text-xs font-semibold">
                Compromiso Humano • Sin Estigmas
              </span>

              <blockquote className="font-serif text-lg sm:text-xl text-[#3f2a55] italic leading-relaxed mt-4">
                “No analizamos a la persona de forma aislada. Exploramos los vínculos invisibles, los modos en que nos comunicamos y nuestra historia afectiva para inaugurar caminos reales de alivio y transformación.”
              </blockquote>

              <div className="pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ebe6f5] flex items-center justify-center text-[#3f2a55] font-bold font-serif shadow-xs">
                  RM
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#3f2a55]">Lic. Romina Natalia Mayor</span>
                  <span className="text-xs text-[#4a454d]">Graduada Facultad de Psicología, UBA (2014)</span>
                </div>
              </div>
            </div>

            {/* Session in consultation room photo */}
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm border border-[#ebe6f5] group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Lic. Romina Natalia Mayor en sesión de atención psicoterapéutica"
                src="/img/consultorio-psicoterapia-sistemica.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2E4F]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                  Espacio de escucha clínica, contención y calidez profesional
                </span>
              </div>
            </div>
          </div>

          {/* Structured Biography & Credentials Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
                Trayectoria & Enfoque
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold leading-tight">
                Más de diez años acompañando procesos de cambio con rigor clínico y cercanía.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4a454d] leading-relaxed">
              Graduada en la Universidad de Buenos Aires (UBA) en el año 2014, concibo la terapia no como una instancia de juicio o encasillamiento patológico, sino como un puente de entendimiento donde resignificar lo que duele.
            </p>

            <p className="text-sm sm:text-base text-[#4a454d] leading-relaxed">
              A lo largo de mi recorrido profesional me desempeñé como admisora y terapeuta clínica en <strong className="text-[#3f2a55] font-semibold">Espacio Olazábal</strong>, adquiriendo experiencia en la recepción de motivos de consulta agudos, la evaluación diagnóstica vincular y el trabajo interdisciplinario. Cuento además con formación específica en dispositivos de <strong className="text-[#3f2a55] font-semibold">Cámara Gesell</strong> y en la formación pedagógica y supervisión clínica de psicólogos noveles.
            </p>

            {/* Grid of Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/70 flex items-start gap-3">
                <School className="w-6 h-6 text-[#3f2a55] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#3f2a55]">Formación UBA</h3>
                  <p className="text-xs text-[#4a454d] mt-0.5">Sólida fundamentación epistemológica y ética profesional.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/70 flex items-start gap-3">
                <Users className="w-6 h-6 text-[#645787] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#3f2a55]">Admisión y Diagnóstico</h3>
                  <p className="text-xs text-[#4a454d] mt-0.5">Experiencia en detección temprana y derivación responsable.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/70 flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#6E8573] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#3f2a55]">Cámara Gesell</h3>
                  <p className="text-xs text-[#4a454d] mt-0.5">Observación no invasiva de la interacción familiar compleja.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/70 flex items-start gap-3">
                <Brain className="w-6 h-6 text-[#C29B38] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#3f2a55]">Supervisión Clínica</h3>
                  <p className="text-xs text-[#4a454d] mt-0.5">Acompañamiento a profesionales que inician sus primeros casos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
