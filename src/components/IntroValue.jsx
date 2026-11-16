import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Lightbulb, BookOpen, Layers, Users } from 'lucide-react';

export default function IntroValue() {
  const pillarIcons = [Lightbulb, BookOpen, Layers, Users];

  return (
    <section id="tentang" className="py-20 bg-[#0A1220] relative overflow-hidden border-y border-white/5">
      {/* Background Subtle Accent */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            TENTANG ARF CREATIVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mendokumentasikan Setiap Langkah Proses Kreatif
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            ARF Creative adalah ruang eksplorasi karya digital. Dari perumusan konsep awal, perancangan antarmuka, hingga penulisan baris kode web, setiap tahap dicatat agar menjadi arsip pembelajaran dan pijakan kolaborasi yang solid.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx] || Lightbulb;
            return (
              <div
                key={pillar.number}
                className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#38BDF8]/80 group-hover:text-[#38BDF8] transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#050B14] border border-white/10 flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#64748B]">
                  <span>Pilar Kreatif</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
