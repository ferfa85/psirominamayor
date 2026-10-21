import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'enfoque-sistemico', label: 'Enfoque Sistémico' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'modalidades', label: 'Modalidades' },
    { id: 'preguntas-frecuentes', label: 'Preguntas Frecuentes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#faf8fd]/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(62,46,79,0.05)] border-b border-[#ebe6f5]/60 transition-all">
      <div className="h-20 w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('inicio');
          }}
          className="flex items-center gap-2.5 text-left group"
        >
          <img
            alt="Logo Lic. Romina Mayor"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJNQP-0nse7r2eyi_w5ZaVHz8O95da2oHfZr5drgS52gJ2mmUvxsx3C2yIr-5xzBXKPPNC0ASQQXNehjRb4R52Z_TOBB1yF_h29imE_qafFbiZMHMODbP2tAUjBlvPvvqSA4K7vy5ATApLmL9Ltjhuwf78CoQzPoL8AsxGFUM8LSzkK6kPIbqnUP8dZAl0vtntz4H2KxhrGZP4j-0ENPGarVl4ZH22zKk7KWGwTstdmFZr7chMLJ1"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg text-[#3f2a55] tracking-tight font-bold whitespace-nowrap">
              Lic. Romina Natalia Mayor
            </span>
            <span className="text-[11px] text-[#4a454d] tracking-wider uppercase font-medium">
              Psicóloga UBA • M.N. 62.507
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#ebe6f5] text-[#3f2a55] font-bold shadow-xs'
                    : 'text-[#4a454d] hover:text-[#1b1b1f] hover:bg-[#efedf2]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Zone & Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#3f2a55] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(63,42,85,0.18)] hover:bg-[#3E2E4F] transition-all duration-300 whitespace-nowrap"
          >
            Agendar Consulta
          </button>

          <img
            alt="Lic. Romina Natalia Mayor"
            className="w-8 h-8 rounded-full object-cover object-top shadow-sm ring-1 ring-[#ebe6f5] shrink-0"
            src="/img/romina-mayor-psicologa.jpg"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#4a454d] hover:text-[#1b1b1f] hover:bg-[#ebe6f5] rounded-full transition-colors ml-1"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf8fd] border-b border-[#ebe6f5] px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#ebe6f5] text-[#3f2a55] font-bold'
                    : 'text-[#4a454d] hover:bg-[#efedf2]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#ebe6f5] mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-full bg-[#3f2a55] text-white font-semibold text-xs text-center"
              >
                Agendar Consulta
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
