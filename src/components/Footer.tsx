import React from 'react';
import { MapPin, Video, Clock, Mail, MessageCircle, Download } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_NUMBER_DISPLAY } from '../data';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f5f3f8] text-[#1b1b1f] border-t border-[#ebe6f5]">
      <div className="w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#ebe6f5]">
          {/* Col 1: Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                alt="Logo Lic. Romina Mayor"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJNQP-0nse7r2eyi_w5ZaVHz8O95da2oHfZr5drgS52gJ2mmUvxsx3C2yIr-5xzBXKPPNC0ASQQXNehjRb4R52Z_TOBB1yF_h29imE_qafFbiZMHMODbP2tAUjBlvPvvqSA4K7vy5ATApLmL9Ltjhuwf78CoQzPoL8AsxGFUM8LSzkK6kPIbqnUP8dZAl0vtntz4H2KxhrGZP4j-0ENPGarVl4ZH22zKk7KWGwTstdmFZr7chMLJ1"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-lg text-[#3f2a55] font-bold">
                Lic. Romina Mayor
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed max-w-xs">
              Atención psicológica con perspectiva sistémica relacional. Un espacio clínico confidencial, humano y empático para acompañar tus procesos de cambio y bienestar.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 rounded-full bg-[#ebe6f5] text-[#3E2E4F] text-xs font-medium">
                M.N. 62.507
              </span>
              <span className="px-3 py-1 rounded-full bg-[#f3eef9] text-[#C29B38] text-xs font-semibold">
                Graduada UBA
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#3f2a55] uppercase tracking-wider">
              Navegación
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre Mí' },
                { id: 'enfoque-sistemico', label: 'Enfoque Sistémico' },
                { id: 'servicios', label: 'Servicios Psicoterapéuticos' },
                { id: 'modalidades', label: 'Modalidades de Atención' },
                { id: 'preguntas-frecuentes', label: 'Preguntas Frecuentes' },
                { id: 'contacto', label: 'Contacto Directo' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className="text-left text-xs sm:text-sm text-[#4a454d] hover:text-[#3f2a55] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Modalidades */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#3f2a55] uppercase tracking-wider">
              Modalidades
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#4a454d]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#645787] shrink-0 mt-0.5" />
                <span>Consultorios Presenciales en CABA (Núñez) y Vicente López</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Video className="w-4 h-4 text-[#645787] shrink-0 mt-0.5" />
                <span>Sesiones Online para Argentina y residentes en el exterior (vía Zoom / Meet)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#645787] shrink-0 mt-0.5" />
                <span>Lunes a Viernes con coordinación previa</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contacto Directo */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#3f2a55] uppercase tracking-wider">
              Contacto Directo
            </h4>
            <p className="text-xs sm:text-sm text-[#4a454d]">
              Podés iniciar tu consulta de forma directa o coordinar una primera entrevista:
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <a
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#1b1b1f] hover:text-[#059669] transition-colors"
                href={`https://wa.me/${PHONE_NUMBER_RAW}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 text-[#059669]" />
                <span className="font-mono text-xs">{PHONE_NUMBER_DISPLAY}</span>
              </a>

              <a
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#1b1b1f] hover:text-[#3f2a55] transition-colors"
                href="mailto:mayor.romina@gmail.com"
              >
                <Mail className="w-4 h-4 text-[#3f2a55]" />
                <span className="font-mono text-xs">mayor.romina@gmail.com</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#059669] text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hola%20Lic.%20Romina,%20quiero%20consultar%20por%20un%20turno`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mensaje de WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4a454d]">
          <p>© 2025 Lic. Romina Natalia Mayor • Psicoterapia Sistémica. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="/codigo-fuente.zip"
              download="codigo-fuente-lic-romina-mayor.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ebe6f5] text-[#3f2a55] font-semibold text-[11px] hover:bg-[#ebe6f5] transition-all shadow-xs"
              title="Descargar paquete completo del proyecto en formato .ZIP"
            >
              <Download className="w-3.5 h-3.5 text-[#645787]" />
              <span>Descargar Código (.ZIP)</span>
            </a>
            <span className="text-[11px] text-[#4a454d]/80">Espacio Clínico Habilitado MSP / CABA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
