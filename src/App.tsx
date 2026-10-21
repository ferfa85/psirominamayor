/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SystemicSection } from './components/SystemicSection';
import { ServicesSection } from './components/ServicesSection';
import { StepsSection } from './components/StepsSection';
import { ModalitiesSection } from './components/ModalitiesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SystemicModal } from './components/SystemicModal';
import { ServiceType, ServiceDetail } from './types';
import { PHONE_NUMBER_RAW } from './data';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType>('individual');
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<ServiceType>('individual');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceDetail | null>(null);
  const [isSystemicModalOpen, setIsSystemicModalOpen] = useState(false);

  // Scroll spy to detect active section in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'sobre-mi',
        'enfoque-sistemico',
        'servicios',
        'modalidades',
        'preguntas-frecuentes',
        'contacto',
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId: ServiceType = selectedService) => {
    setBookingInitialService(serviceId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8fd] text-[#1b1b1f] selection:bg-[#d7c6fe] selection:text-[#5e5080] font-sans">
      {/* Fixed Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBooking={() => handleOpenBooking(selectedService)}
      />

      {/* Main Container */}
      <main className="w-full pt-20" id="inicio">
        {/* Hero Section */}
        <Hero
          selectedService={selectedService}
          onSelectService={(srv) => {
            setSelectedService(srv);
          }}
          onNavigateToModalities={() => scrollToSection('modalidades')}
        />

        {/* Sobre Mí & Trayectoria */}
        <AboutSection />

        {/* Enfoque Sistémico Relacional */}
        <SystemicSection
          onOpenSystemicModal={() => setIsSystemicModalOpen(true)}
          onStartConsult={() => scrollToSection('contacto')}
        />

        {/* Áreas de Atención Especializada (Servicios) */}
        <ServicesSection
          selectedService={selectedService}
          onSelectService={(srv) => {
            setSelectedService(srv);
          }}
          onOpenDetails={(detail) => setActiveServiceDetail(detail)}
          onOpenBookingForService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Comenzar es simple (3 Pasos) */}
        <StepsSection onStartBooking={() => handleOpenBooking(selectedService)} />

        {/* Modalidades de Atención */}
        <ModalitiesSection />

        {/* Preguntas Frecuentes */}
        <FaqSection />

        {/* Contacto Directo & Formulario Confidencial */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={(srv) => setSelectedService(srv)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Discrete Floating WhatsApp Button */}
      <a
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(5,150,105,0.35)] hover:scale-105 hover:bg-emerald-700 transition-all duration-300 group"
        href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hola%20Lic.%20Romina,%20quiero%20consultar%20por%20un%20turno`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Consultar por WhatsApp</span>
        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#3f2a55] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md">
          Consultar directamente
        </span>
      </a>

      {/* Interactive Booking / Consultation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={bookingInitialService}
        onSuccess={() => {}}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onSchedule={(srvId) => handleOpenBooking(srvId as ServiceType)}
      />

      {/* Systemic Theoretical Comparison Modal */}
      <SystemicModal
        isOpen={isSystemicModalOpen}
        onClose={() => setIsSystemicModalOpen(false)}
        onStartConsult={() => {
          setIsSystemicModalOpen(false);
          scrollToSection('contacto');
        }}
      />
    </div>
  );
}
