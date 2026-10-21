import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface SystemicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartConsult: () => void;
}

export const SystemicModal: React.FC<SystemicModalProps> = ({
  isOpen,
  onClose,
  onStartConsult,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1b1f]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#ebe6f5] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#f3eef9] border-b border-[#ebe6f5]">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#645787] block mb-1">
              Marco Teórico y Clínico
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#3f2a55]">
              Comprender el Enfoque Sistémico Relacional
            </h3>
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
            <p className="text-sm text-[#4a454d] leading-relaxed">
              El enfoque sistémico relacional parte de una premisa central: <strong className="text-[#3f2a55]">las personas no somos islas</strong>. Cada síntoma (sea ansiedad, desgano, discusiones continuas o temores) adquiere su verdadero sentido dentro de las redes vinculares en las que vivimos cotidianamente: la pareja, la familia, el entorno laboral y los amigos.
            </p>
          </div>

          <div className="border border-[#ebe6f5] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-[#ebe6f5] p-3 text-xs font-bold text-[#3f2a55]">
              <span>Psicoterapia Tradicional</span>
              <span>Enfoque Sistémico Relacional</span>
            </div>
            <div className="divide-y divide-[#ebe6f5] text-xs text-[#4a454d]">
              <div className="grid grid-cols-2 p-3 gap-2">
                <span>Foco exclusivo en el conflicto intrapsíquico del individuo.</span>
                <span className="font-medium text-[#3f2a55] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  Foco en la interacción, la comunicación y los vínculos recíprocos.
                </span>
              </div>
              <div className="grid grid-cols-2 p-3 gap-2 bg-[#faf8fd]">
                <span>Causalidad lineal (A provoca B, buscando culpables en el pasado remoto).</span>
                <span className="font-medium text-[#3f2a55] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  Causalidad circular: cómo nuestras conductas se retroalimentan en el presente.
                </span>
              </div>
              <div className="grid grid-cols-2 p-3 gap-2">
                <span>Procesos a menudo extensos de análisis sin objetivos delimitados.</span>
                <span className="font-medium text-[#3f2a55] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  Tratamientos acotados con metas claras consensuadas con el paciente.
                </span>
              </div>
              <div className="grid grid-cols-2 p-3 gap-2 bg-[#faf8fd]">
                <span>Terapeuta en rol de observador silencioso y distante.</span>
                <span className="font-medium text-[#3f2a55] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  Terapeuta activa, cercana, propositiva, con tareas y ejercicios concretos.
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#ebe6f5]">
            <h4 className="text-xs uppercase font-bold text-[#3f2a55] mb-2 tracking-wider">
              ¿Para quién está especialmente indicado?
            </h4>
            <p className="text-xs text-[#4a454d] leading-relaxed">
              Para toda persona que desee destrabar un momento de crisis, mejorar sus relaciones afectivas, superar bucles de pensamientos ansiosos o resolver desacuerdos en su pareja o familia sin sentirse juzgada.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#faf8fd] border-t border-[#ebe6f5] flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#ebe6f5] text-xs font-semibold text-[#4a454d] hover:text-[#1b1b1f] hover:bg-white transition-colors"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onStartConsult();
            }}
            className="px-6 py-2.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Iniciar Consulta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
