import React, { useState } from 'react';
import { sendForm } from '../lib/sendForm';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceType } from '../types';
import { PHONE_NUMBER_RAW } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
  onSuccess: (data: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'individual',
  onSuccess,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<ServiceType>(initialService);
  const [modality, setModality] = useState<'presencial-nunez' | 'presencial-vl' | 'virtual'>('presencial-nunez');
  const [timePreference, setTimePreference] = useState<'manana' | 'tarde' | 'vespertino'>('tarde');
  const [selectedDays, setSelectedDays] = useState<string[]>(['Martes', 'Jueves']);
  
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comentario: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  if (!isOpen) return null;

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const getServiceLabel = (type: ServiceType) => {
    switch (type) {
      case 'individual': return 'Terapia Individual';
      case 'pareja': return 'Terapia de Pareja';
      case 'familia': return 'Terapia Familiar';
      case 'supervision': return 'Supervisión Clínica UBA';
    }
  };

  const getModalityLabel = (m: 'presencial-nunez' | 'presencial-vl' | 'virtual') => {
    switch (m) {
      case 'presencial-nunez': return 'Presencial en CABA (Núñez)';
      case 'presencial-vl': return 'Presencial en Vicente López';
      case 'virtual': return 'Virtual / Online (Zoom/Meet)';
    }
  };

  const getTimeLabel = () => {
    switch (timePreference) {
      case 'manana': return 'Mañana (09:00 a 13:00 hs)';
      case 'tarde': return 'Tarde (14:00 a 18:00 hs)';
      case 'vespertino': return 'Vespertino (18:00 a 20:00 hs)';
    }
  };

  const generateWhatsappUrl = () => {
    const text = `Hola Lic. Romina, quisiera coordinar una primera consulta:\n` +
      `• Servicio: ${getServiceLabel(service)}\n` +
      `• Modalidad: ${getModalityLabel(modality)}\n` +
      `• Días de preferencia: ${selectedDays.join(', ') || 'A coordinar'}\n` +
      `• Franja horaria: ${getTimeLabel()}\n` +
      `• Mi nombre: ${formData.nombre || 'Particular'}\n` +
      (formData.comentario ? `• Motivo/Nota: ${formData.comentario}` : '');
    return `https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      await sendForm(e.currentTarget);
      setIsSubmitted(true);
      onSuccess({
        service,
        modality,
        timePreference,
        selectedDays,
        ...formData
      });
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1b1f]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#ebe6f5] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#faf8fd] border-b border-[#ebe6f5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ebe6f5] text-[#3f2a55] flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-[#3f2a55]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#3f2a55]">Agendar Consulta</h3>
              <p className="text-xs text-[#4a454d]">Coordiná tu primer encuentro con la Lic. Romina Mayor</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 text-[#4a454d] hover:text-[#1b1b1f] hover:bg-[#ebe6f5] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!isSubmitted ? (
            <div>
              {/* Stepper indicator */}
              <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#3f2a55] text-white' : 'bg-[#efedf2] text-[#4a454d]'}`}>
                    1
                  </span>
                  <span className="text-xs font-semibold text-[#3f2a55] hidden sm:inline">Servicio</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-[#3f2a55]' : 'bg-[#efedf2]'}`} />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#3f2a55] text-white' : 'bg-[#efedf2] text-[#4a454d]'}`}>
                    2
                  </span>
                  <span className="text-xs font-semibold text-[#3f2a55] hidden sm:inline">Modalidad & Horario</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-[#3f2a55]' : 'bg-[#efedf2]'}`} />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-[#3f2a55] text-white' : 'bg-[#efedf2] text-[#4a454d]'}`}>
                    3
                  </span>
                  <span className="text-xs font-semibold text-[#3f2a55] hidden sm:inline">Tus Datos</span>
                </div>
              </div>

              {/* Step 1: Dispositivo / Servicio */}
              {step === 1 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-[#3f2a55]">¿Qué tipo de espacio clínico estás buscando?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'individual', title: 'Terapia Individual', desc: 'Ansiedad, toma de decisiones, duelos y crisis.' },
                      { id: 'pareja', title: 'Terapia de Pareja', desc: 'Diálogo, acuerdos y superación de conflictos.' },
                      { id: 'familia', title: 'Terapia Familiar', desc: 'Crianza, dinámicas complejas y ensamblaje.' },
                      { id: 'supervision', title: 'Supervisión Clínica', desc: 'Mentoría para psicólogos noveles (UBA).' }
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setService(item.id as ServiceType)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          service === item.id
                            ? 'border-[#3f2a55] bg-[#ebe6f5] shadow-sm'
                            : 'border-[#ebe6f5] bg-[#faf8fd] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-[#3f2a55]">{item.title}</span>
                          {service === item.id && <CheckCircle2 className="w-4 h-4 text-[#3f2a55]" />}
                        </div>
                        <p className="text-xs text-[#4a454d] leading-relaxed">{item.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] text-white font-medium text-sm transition-all flex items-center gap-2"
                    >
                      <span>Siguiente: Modalidad y Días</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Modalidad y Horarios */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#3f2a55] mb-2">Modalidad y Sede de preferencia:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setModality('presencial-nunez')}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                          modality === 'presencial-nunez' ? 'border-[#3f2a55] bg-[#ebe6f5] shadow-xs' : 'border-[#ebe6f5] bg-[#faf8fd]'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm text-[#3f2a55]">CABA (Núñez)</span>
                        <span className="text-[11px] text-[#4a454d]">Presencial • Congreso de Tucumán</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setModality('presencial-vl')}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                          modality === 'presencial-vl' ? 'border-[#3f2a55] bg-[#ebe6f5] shadow-xs' : 'border-[#ebe6f5] bg-[#faf8fd]'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm text-[#3f2a55]">Vicente López</span>
                        <span className="text-[11px] text-[#4a454d]">Presencial • Zona Norte</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setModality('virtual')}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                          modality === 'virtual' ? 'border-[#3f2a55] bg-[#ebe6f5] shadow-xs' : 'border-[#ebe6f5] bg-[#faf8fd]'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm text-[#3f2a55]">Online (Virtual)</span>
                        <span className="text-[11px] text-[#4a454d]">Google Meet / Zoom</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3f2a55] mb-2">Franja horaria de tu preferencia:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'manana', label: 'Mañanas', hours: '9 a 13 hs' },
                        { id: 'tarde', label: 'Tardes', hours: '14 a 18 hs' },
                        { id: 'vespertino', label: 'Vespertino', hours: '18 a 20 hs' }
                      ].map(t => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimePreference(t.id as any)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            timePreference === t.id ? 'border-[#3f2a55] bg-[#ebe6f5] text-[#3f2a55] font-semibold' : 'border-[#ebe6f5] bg-[#faf8fd] text-[#4a454d]'
                          }`}
                        >
                          <span className="block text-xs font-semibold">{t.label}</span>
                          <span className="block text-[11px] text-[#4a454d]">{t.hours}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3f2a55] mb-2">Días disponibles:</label>
                    <div className="flex flex-wrap gap-2">
                      {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map(day => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => toggleDay(day)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            selectedDays.includes(day)
                              ? 'bg-[#3f2a55] text-white border-[#3f2a55]'
                              : 'bg-[#faf8fd] text-[#4a454d] border-[#ebe6f5] hover:bg-[#ebe6f5]'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-medium text-[#4a454d] hover:text-[#1b1b1f]"
                    >
                      Volver
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] text-white font-medium text-sm transition-all flex items-center gap-2"
                    >
                      <span>Siguiente: Tus Datos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Formulario & Envío */}
              {step === 3 && (
                <form name="agendar" method="POST" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="agendar" />
                  <p hidden>
                    <label>No completar: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                  </p>
                  <input type="hidden" name="servicio" value={getServiceLabel(service)} />
                  <input type="hidden" name="modalidad" value={getModalityLabel(modality)} />
                  <input type="hidden" name="dias" value={selectedDays.join(', ') || 'A coordinar'} />
                  <input type="hidden" name="franja" value={getTimeLabel()} />
                  <div className="p-3 bg-[#f3eef9] rounded-xl flex items-center justify-between text-xs text-[#3f2a55]">
                    <div>
                      <span className="font-semibold block">{getServiceLabel(service)}</span>
                      <span className="text-[#4a454d]">{getModalityLabel(modality)} • {selectedDays.join(', ') || 'Cualquier día'} • {timePreference}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-[#645787] underline hover:text-[#3f2a55]"
                    >
                      Modificar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#3f2a55] mb-1">Nombre y Apellido *</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: Clara Morales"
                        className="w-full p-2.5 rounded-lg border border-[#ebe6f5] bg-[#faf8fd] text-sm focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3f2a55] mb-1">WhatsApp o Teléfono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej: 11 5555 1234"
                        className="w-full p-2.5 rounded-lg border border-[#ebe6f5] bg-[#faf8fd] text-sm focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3f2a55] mb-1">Correo Electrónico (opcional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tunombre@ejemplo.com"
                      className="w-full p-2.5 rounded-lg border border-[#ebe6f5] bg-[#faf8fd] text-sm focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3f2a55] mb-1">¿Algún comentario o motivo puntual? (opcional)</label>
                    <textarea
                      rows={2}
                      name="comentario"
                      value={formData.comentario}
                      onChange={e => setFormData({ ...formData, comentario: e.target.value })}
                      placeholder="Breve detalle sobre lo que te gustaría abordar..."
                      className="w-full p-2.5 rounded-lg border border-[#ebe6f5] bg-[#faf8fd] text-sm focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                    />
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    {sendError && (
                      <p role="alert" className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl p-3 leading-relaxed">
                        No pudimos enviar tu solicitud. Probá de nuevo o usá el botón de WhatsApp de abajo.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{sending ? 'Enviando...' : 'Confirmar y Enviar Solicitud'}</span>
                    </button>

                    <a
                      href={generateWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full bg-[#059669] hover:bg-emerald-700 text-white font-medium text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>O enviar directo por WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-medium text-[#4a454d] hover:text-[#1b1b1f]"
                    >
                      Atrás
                    </button>
                    <span className="text-[11px] text-[#4a454d] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#6E8573]" />
                      Secreto profesional protegido
                    </span>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#3f2a55]">¡Solicitud Recibida!</h4>
              <p className="text-sm text-[#4a454d] max-w-md mx-auto leading-relaxed">
                Gracias, <strong className="text-[#3f2a55]">{formData.nombre || 'por tu consulta'}</strong>. Recibí tu solicitud para <strong>{getServiceLabel(service)}</strong> en modalidad <strong>{getModalityLabel(modality)}</strong>. Me pondré en contacto con vos hoy mismo para coordinar el horario definitivo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#059669] text-white text-xs font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir chat de WhatsApp ahora
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full border border-[#ebe6f5] text-[#3f2a55] text-xs font-semibold hover:bg-[#faf8fd] transition-all"
                >
                  Finalizar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
