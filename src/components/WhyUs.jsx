import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#050B14] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-wider">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Memilih DisTech?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Komitmen kami untuk menyajikan layanan terfokus, profesional, dan dapat diandalkan bagi mahasiswa.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.reasons.map((reason) => (
            <div
              key={reason.number}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#22D3EE]/40 transition-all duration-300 group flex items-start gap-6"
            >
              {/* Number Badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#22D3EE] p-[1px] shrink-0 shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <div className="w-full h-full bg-[#050B14] rounded-[15px] flex items-center justify-center font-mono font-extrabold text-xl text-[#22D3EE] group-hover:bg-[#0A1220] transition-colors">
                  {reason.number}
                </div>
              </div>

              {/* Reason Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
