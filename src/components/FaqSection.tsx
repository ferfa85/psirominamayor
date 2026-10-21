import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('admision');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'todos' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-white" id="preguntas-frecuentes">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-2 mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-[#645787]">
            Claridad Previa
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3f2a55] font-bold">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#4a454d]">
            Despejamos tus dudas principales antes de agendar tu primera consulta.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#7b757e] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave (ej: reintegro, duración, online)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#ebe6f5] bg-[#faf8fd] text-xs sm:text-sm text-[#1b1b1f] focus:outline-none focus:ring-2 focus:ring-[#3f2a55]/20 placeholder:text-[#7b757e]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'general', label: 'Sesiones y Encuadre' },
              { id: 'honorarios', label: 'Prepagas y Factura' },
              { id: 'modalidad', label: 'Terapia Virtual' },
              { id: 'supervision', label: 'Supervisión UBA' },
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#ebe6f5] text-[#3f2a55] shadow-xs'
                    : 'bg-[#faf8fd] text-[#4a454d] hover:bg-[#efedf2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#f3eef9]/50 rounded-2xl border border-[#ebe6f5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base text-[#3f2a55] font-bold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#645787] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4a454d] leading-relaxed border-t border-[#ebe6f5]/40 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs text-[#4a454d] bg-[#faf8fd] rounded-2xl border border-[#ebe6f5]">
              No encontramos preguntas relacionadas con tu búsqueda. Podés consultarme directamente por WhatsApp o formulario.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
