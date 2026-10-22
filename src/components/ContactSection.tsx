import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { ServiceType } from '../types';
import { PHONE_NUMBER_RAW, PHONE_NUMBER_DISPLAY } from '../data';
import { sendForm } from '../lib/sendForm';

interface ContactSectionProps {
  selectedService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const [waMessage, setWaMessage] = useState(
    'Hola Lic. Romina, quiero consultar por la terapia individual.'
  );

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    modalidad: 'Online',
    servicio: 'Terapia Individual',
    mensaje: '',
  });

  // Sync when selectedService prop changes from Hero or Services section
  useEffect(() => {
    switch (selectedService) {
      case 'individual':
        setWaMessage('Hola Lic. Romina, quiero consultar por la terapia individual.');
        setFormData(prev => ({ ...prev, servicio: 'Terapia Individual' }));
        break;
      case 'pareja':
        setWaMessage('Hola Lic. Romina, quiero consultar por la terapia de pareja.');
        setFormData(prev => ({ ...prev, servicio: 'Terapia de Pareja' }));
        break;
      case 'familia':
        setWaMessage('Hola Lic. Romina, quiero consultar por la terapia familiar.');
        setFormData(prev => ({ ...prev, servicio: 'Terapia Familiar' }));
        break;
      case 'supervision':
        setWaMessage('Hola Lic. Romina, quiero consultar por la supervisión clínica.');
        setFormData(prev => ({ ...prev, servicio: 'Supervisión para Psicólogos' }));
        break;
    }
  }, [selectedService]);

  const handleWaSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setWaMessage(val);
    if (val.includes('individual')) onServiceChange('individual');
    else if (val.includes('Pareja')) onServiceChange('pareja');
    else if (val.includes('Familiar')) onServiceChange('familia');
    else if (val.includes('Supervisión')) onServiceChange('supervision');
  };

  const handleFormServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, servicio: val });
    if (val.includes('Individual')) onServiceChange('individual');
    else if (val.includes('Pareja')) onServiceChange('pareja');
    else if (val.includes('Familiar')) onServiceChange('familia');
    else if (val.includes('Supervisión')) onServiceChange('supervision');
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      await sendForm(e.currentTarget);
      setFormSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setSendError(false);
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      modalidad: 'Online',
      servicio: 'Terapia Individual',
      mensaje: '',
    });
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf8fd] relative" id="contacto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct WhatsApp & Encuadre */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
                Coordinación de Turno
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
                Comunicate directamente
              </h2>
              <p className="text-sm sm:text-base text-[#4a454d]">
                Elegí la vía que te resulte más cómoda. Siempre serás atendido de forma confidencial y directa.
              </p>
            </div>

            {/* Dynamic WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white shadow-xs border border-[#ebe6f5] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#3f2a55]">Mensaje Directo de WhatsApp</h3>
                  <span className="text-xs text-[#4a454d]">{PHONE_NUMBER_DISPLAY} • En el día</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4a454d]">
                Podés seleccionar un mensaje preconfigurado para consultar al instante:
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#3f2a55] font-semibold" htmlFor="wa-message-select">
                  Seleccionar motivo de consulta:
                </label>
                <select
                  id="wa-message-select"
                  value={waMessage}
                  onChange={handleWaSelectChange}
                  className="w-full p-2.5 rounded-xl bg-[#f5f3f8] text-xs sm:text-sm text-[#1b1b1f] border border-[#ebe6f5] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                >
                  <option value="Hola Lic. Romina, quiero consultar por la terapia individual.">
                    Terapia Individual Presencial / Online
                  </option>
                  <option value="Hola Lic. Romina, quiero consultar por la terapia de pareja.">
                    Terapia de Pareja
                  </option>
                  <option value="Hola Lic. Romina, quiero consultar por la terapia familiar.">
                    Terapia Familiar
                  </option>
                  <option value="Hola Lic. Romina, quiero consultar por la supervisión clínica.">
                    Supervisión Clínica Profesional
                  </option>
                </select>
              </div>

              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full py-3 rounded-full bg-[#059669] hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Abrir WhatsApp con este mensaje</span>
              </button>
            </div>

            {/* Frame / Clinic Location Details */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#f3eef9] border border-[#ebe6f5] flex flex-col gap-4 text-xs sm:text-sm text-[#4a454d]">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3f2a55] block font-semibold">WhatsApp / Teléfono Directo</strong>
                  <a href={`https://wa.me/${PHONE_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#059669] font-bold hover:underline">
                    {PHONE_NUMBER_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#645787] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3f2a55] block font-semibold">Consultorios Presenciales</strong>
                  <span>Sedes en CABA (Núñez) y Vicente López, con fácil acceso y cercanía a múltiples transportes.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#645787] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3f2a55] block font-semibold">Horarios de Atención</strong>
                  <span>Lunes a Viernes de 09:00 a 20:00 hs (con coordinación anticipada).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#645787] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3f2a55] block font-semibold">Email de Contacto</strong>
                  <span className="font-mono text-xs">mayor.romina@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgba(62,46,79,0.05)] border border-[#ebe6f5] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3f2a55]">
                  Formulario de Contacto Confidencial
                </h3>
                <p className="text-xs sm:text-sm text-[#4a454d]">
                  Completá tus datos y te responderé en breve por correo o WhatsApp.
                </p>
              </div>

              {!formSubmitted ? (
                <form name="contacto" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4" id="contact-clinic-form">
                  <input type="hidden" name="form-name" value="contacto" />
                  <p hidden>
                    <label>No completar: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-nombre">
                        Nombre y Apellido *
                      </label>
                      <input
                        id="form-nombre"
                      name="nombre"
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: María Clara"
                        className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20 placeholder:text-[#7b757e]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-telefono">
                        WhatsApp o Teléfono *
                      </label>
                      <input
                        id="form-telefono"
                      name="telefono"
                        required
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej: 11 5555 4444"
                        className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20 placeholder:text-[#7b757e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-email">
                        Correo Electrónico *
                      </label>
                      <input
                        id="form-email"
                      name="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tuemail@ejemplo.com"
                        className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20 placeholder:text-[#7b757e]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-modalidad">
                        Modalidad Preferida
                      </label>
                      <select
                        id="form-modalidad"
                      name="modalidad"
                        value={formData.modalidad}
                        onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                      >
                        <option value="Online">Virtual / Online (Zoom / Meet)</option>
                        <option value="Presencial (CABA - Núñez)">Presencial (CABA - Núñez)</option>
                        <option value="Presencial (Vicente López)">Presencial (Vicente López)</option>
                        <option value="Indistinto">Indistinto / A evaluar</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-servicio">
                      Motivo Principal de Consulta
                    </label>
                    <select
                      id="form-servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleFormServiceChange}
                      className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20"
                    >
                      <option value="Terapia Individual">Terapia Individual</option>
                      <option value="Terapia de Pareja">Terapia de Pareja</option>
                      <option value="Terapia Familiar">Terapia Familiar</option>
                      <option value="Supervisión para Psicólogos">Supervisión Clínica para Colegas</option>
                      <option value="Consulta General">Otra Consulta / Admisión</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#3f2a55]" htmlFor="form-mensaje">
                      Mensaje o breve descripción (opcional)
                    </label>
                    <textarea
                      id="form-mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Podés contarnos brevemente qué te motiva a consultar o tus horarios de preferencia..."
                      className="w-full p-3 rounded-xl bg-[#f5f3f8] border border-[#ebe6f5] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20 placeholder:text-[#7b757e]"
                    />
                  </div>

                  {sendError && (
                    <p role="alert" className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl p-3 leading-relaxed">
                      No pudimos enviar tu consulta. Probá de nuevo en unos minutos o escribinos directamente por WhatsApp al {PHONE_NUMBER_DISPLAY}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-full bg-[#3f2a55] hover:bg-[#3E2E4F] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{sending ? 'Enviando...' : 'Enviar Consulta Confidencial'}</span>
                  </button>

                  <p className="text-[11px] text-[#4a454d] text-center leading-relaxed">
                    Tus datos son tratados bajo estricto secreto profesional conforme a la Ley de Salud Mental y Ética Profesional de Psicólogos de la República Argentina.
                  </p>
                </form>
              ) : (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#ebe6f5] border border-[#645787]/20 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-white text-[#059669] flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#3f2a55]">¡Mensaje recibido con éxito!</h4>
                    <p className="text-xs sm:text-sm text-[#4a454d] mt-2 max-w-md leading-relaxed">
                      Muchas gracias, <strong>{formData.nombre}</strong>. Recibí tu consulta por <strong>{formData.servicio}</strong>. Me pondré en contacto con vos hoy mismo a través de tu teléfono ({formData.telefono}) o email ({formData.email}) para coordinar la primera entrevista.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        const text = `Hola Lic. Romina, acabo de enviar el formulario web con mi nombre ${formData.nombre} para consultar por ${formData.servicio}.`;
                        window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#059669] text-white text-xs font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Avisar por WhatsApp también
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-full bg-white text-[#3f2a55] text-xs font-semibold border border-[#ebe6f5] hover:bg-[#faf8fd] transition-all flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
