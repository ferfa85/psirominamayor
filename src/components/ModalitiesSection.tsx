import React, { useState } from 'react';
import {
  Armchair,
  Laptop,
  CheckCircle,
  MapPin,
  CreditCard,
  Train,
  MessageCircle
} from 'lucide-react';
import { PHONE_NUMBER_RAW } from '../data';

export const ModalitiesSection: React.FC = () => {
  const [showLocationDetails, setShowLocationDetails] = useState(false);

  const presencialMsg = encodeURIComponent(
    'Hola Lic. Romina, quiero consultar por atención presencial en consultorio (CABA - Núñez o Vicente López).'
  );
  const virtualMsg = encodeURIComponent(
    'Hola Lic. Romina, quiero consultar por sesiones virtuales online.'
  );

  return (
    <section className="py-16 md:py-24 bg-[#faf8fd]" id="modalidades">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2 mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
            Modalidades Adaptadas
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
            Atención Presencial y Online
          </h2>
          <p className="text-sm sm:text-base text-[#4a454d] leading-relaxed">
            Ambos formatos comparten la misma rigurosidad técnica, el secreto profesional inviolable y un clima de serena escucha.
          </p>
        </div>

        {/* 2 Modality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Presencial Card */}
          <div className="bg-white rounded-2xl border border-[#ebe6f5] shadow-xs flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow group">
            {/* Real In-person consultation photo */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#ebe6f5]">
              <img
                src="/img/consultorio-psicoterapia-sistemica.jpg"
                alt="Atención presencial en consultorio con Lic. Romina Natalia Mayor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#3f2a55] inline-flex shadow-sm">
                  <Armchair className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#3f2a55]/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm border border-white/20">
                  CABA (Núñez) y Vicente López
                </span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4 text-white flex items-center justify-between">
                <span className="text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  Consultorios climatizados y privados
                </span>
                <span className="text-xs font-semibold text-[#f0e6fc]">
                  Presencial
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#3f2a55]">
                  Sesiones Presenciales
                </h3>

                <p className="text-sm text-[#4a454d] leading-relaxed">
                  Un ambiente íntimo, aislado de las exigencias del afuera, propicio para desconectar del ruido cotidiano y conectar con tus emociones.
                </p>

                <ul className="flex flex-col gap-3 pt-2 text-xs sm:text-sm text-[#4a454d]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Consultorios en <strong>CABA (Núñez)</strong> y <strong>Vicente López</strong>, con excelente accesibilidad.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Espacios habilitados con acústica cuidada y confidencialidad absoluta.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Ideal para abordajes vinculares directos con parejas o familias.</span>
                  </li>
                </ul>

                {/* Collapsible Transport Detail */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLocationDetails(!showLocationDetails)}
                    className="text-xs font-semibold text-[#645787] hover:text-[#3f2a55] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{showLocationDetails ? 'Ocultar accesos de transporte' : 'Ver conectividad y transportes'}</span>
                  </button>

                  {showLocationDetails && (
                    <div className="mt-3 p-3.5 bg-[#faf8fd] rounded-xl border border-[#ebe6f5] text-xs text-[#4a454d] space-y-2 animate-in fade-in duration-200">
                      <p className="font-semibold text-[#3f2a55] flex items-center gap-1">
                        <Train className="w-3.5 h-3.5" /> Accesos principales:
                      </p>
                      <p>• <strong>Sede CABA (Núñez):</strong> Subte Línea D (Estación Congreso de Tucumán), Tren Mitre (Estación Núñez) y Metrobus Norte (Av. Cabildo).</p>
                      <p>• <strong>Sede Vicente López:</strong> Cercano a Av. Maipú / Av. del Libertador, Tren Mitre y múltiples líneas de colectivos.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#ebe6f5]/70 flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/60 flex items-center justify-between text-xs">
                  <span className="text-[#4a454d] font-medium">Frecuencia recomendada</span>
                  <span className="font-bold text-[#3f2a55]">Semanal / Quincenal</span>
                </div>

                <a
                  href={`https://wa.me/${PHONE_NUMBER_RAW}?text=${presencialMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3f2a55] hover:bg-[#2e1d40] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#8ee2b0]" />
                  <span>Consultar por Turno Presencial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Virtual Card */}
          <div className="bg-white rounded-2xl border border-[#ebe6f5] shadow-xs flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow group">
            {/* Real Virtual Consultation photo */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#ebe6f5]">
              <img
                src="/img/terapia-online-psicologa.jpg"
                alt="Sesiones virtuales de psicoterapia online con Lic. Romina Natalia Mayor"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#3f2a55] inline-flex shadow-sm">
                  <Laptop className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#3f2a55]/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm border border-white/20">
                  Argentina & Exterior
                </span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4 text-white flex items-center justify-between">
                <span className="text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  Vía Google Meet o Zoom seguro
                </span>
                <span className="text-xs font-semibold text-[#f0e6fc]">
                  Online / Remoto
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#3f2a55]">
                  Sesiones Virtuales (Online)
                </h3>

                <p className="text-sm text-[#4a454d] leading-relaxed">
                  Terapia desde el confort y la privacidad de tu espacio personal. Ideal si residís en el interior del país o vivís en el exterior.
                </p>

                <ul className="flex flex-col gap-3 pt-2 text-xs sm:text-sm text-[#4a454d]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Conexión vía Google Meet o Zoom con link encriptado y puntualidad.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Ahorro de tiempos de traslado y adaptabilidad para horarios internacionales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6E8573] shrink-0 mt-0.5" />
                    <span>Abono sencillo vía transferencia bancaria y Mercado Pago.</span>
                  </li>
                </ul>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#645787]">
                  <CreditCard className="w-3.5 h-3.5 shrink-0" />
                  <span>Cobro por transferencia o Mercado Pago • Factura electrónica AFIP / ARCA.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#ebe6f5]/70 flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5]/60 flex items-center justify-between text-xs">
                  <span className="text-[#4a454d] font-medium">Requerimiento</span>
                  <span className="font-bold text-[#3f2a55]">Dispositivo con cámara & privacidad</span>
                </div>

                <a
                  href={`https://wa.me/${PHONE_NUMBER_RAW}?text=${virtualMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3f2a55] hover:bg-[#2e1d40] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#8ee2b0]" />
                  <span>Consultar por Turno Online</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
