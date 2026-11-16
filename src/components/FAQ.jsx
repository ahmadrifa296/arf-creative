import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A1220] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            PERTANYAAN UMUM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Seputar ARF Creative &amp; Dokumentasi
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Jawaban atas pertanyaan yang sering diajukan mengenai ruang kolaborasi dan dokumentasi kami.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-white/5 transition-colors min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-[#050B14] border border-white/10 text-[#38BDF8] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#2563EB]/20 border-[#2563EB]/50' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5 text-sm sm:text-base text-[#94A3B8] leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
