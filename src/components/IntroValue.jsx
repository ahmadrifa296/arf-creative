import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Layers, Target, Smartphone, Wrench } from 'lucide-react';

export default function IntroValue() {
  const valueCards = [
    {
      number: "01",
      title: "Modern Development",
      description: "Website dengan struktur dan tampilan modern menggunakan praktik koding terkini.",
      icon: Layers
    },
    {
      number: "02",
      title: "Project Focused",
      description: "Dibuat berdasarkan kebutuhan spesifik project dan standar akademis mahasiswa.",
      icon: Target
    },
    {
      number: "03",
      title: "Responsive",
      description: "Tampilan optimal di layar desktop, laptop, tablet, hingga smartphone.",
      icon: Smartphone
    },
    {
      number: "04",
      title: "Technical Support",
      description: "Bantuan teknis untuk debugging, penyesuaian fitur, dan penjelasan alur koding.",
      icon: Wrench
    }
  ];

  return (
    <section className="py-20 bg-[#0A1220] relative overflow-hidden border-y border-white/5">
      {/* Background Subtle Accent */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project Website Jangan Berhenti di Tengah Jalan.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Mulai dari desain, coding, database, hingga debugging, DisTech membantu mahasiswa mengembangkan project website dengan pendekatan yang terarah dan mudah dipahami.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.number}
                className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#22D3EE]/80 group-hover:text-[#22D3EE] transition-colors">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#050B14] border border-white/10 flex items-center justify-center text-[#2563EB] group-hover:text-[#22D3EE] group-hover:border-[#22D3EE]/30 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle glow line */}
                <div className="mt-6 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#64748B]">
                  <span>DisTech Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
