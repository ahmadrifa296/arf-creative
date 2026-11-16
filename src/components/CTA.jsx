import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { IconInstagram } from './Icons';

export default function CTA() {
  return (
    <section className="py-20 bg-[#050B14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Glass Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0A1220] to-[#050B14] border border-[#38BDF8]/30 p-8 sm:p-14 overflow-hidden shadow-2xl group">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050B14] border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
              <span>LET'S COLLABORATE</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Punya Projek Website yang Ingin Dikembangkan?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Ceritakan ide dan kebutuhan projek Anda. Mari berdiskusi santai, eksplorasi antarmuka, dan dokumentasikan hasil karya yang siap dibanggakan.
            </p>

            {/* CTA Button Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] hover:from-[#1D4ED8] hover:to-[#0284C7] shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-0.5 min-h-[44px]"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-5 h-5 text-white/80" />
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-[#F8FAFC] bg-[#0A1220] hover:bg-[#1E293B] border border-white/10 hover:border-white/20 rounded-2xl transition-all min-h-[44px]"
              >
                <IconInstagram className="w-5 h-5 text-[#E1306C]" />
                <span>DM Instagram @arf_.creative</span>
              </a>
            </div>

            <p className="text-xs text-[#64748B] pt-2 font-mono">
              "{siteConfig.quote}"
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
