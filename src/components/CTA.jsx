import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#050B14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Glass Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0A1220] to-[#050B14] border border-[#22D3EE]/30 p-8 sm:p-14 overflow-hidden shadow-2xl group">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050B14] border border-[#22D3EE]/40 text-[#22D3EE] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>SIAP MULAI PROJECT WEBSITE ANDA?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Punya Project Website yang Ingin Dikembangkan?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Ceritakan kebutuhan project kamu dan diskusikan solusinya bersama DisTech. Dapatkan bimbingan teknis dan pengerjaan yang terarah.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 text-base font-extrabold text-white rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1D4ED8] hover:to-[#06B6D4] shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-5 h-5 text-white/80" />
              </a>
            </div>

            <p className="text-xs text-[#64748B] pt-2">
              Respon cepat via WhatsApp • Konsultasi Awal Gratis
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
